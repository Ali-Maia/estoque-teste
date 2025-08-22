import http from 'k6/http'
import { check, group, sleep } from 'k6'
import { getBaseUrl } from '../utils/variaveis.js';

export let options = {
  vus: 10,
  duration: '20s',
  thresholds: {
    'http_req_duration': ['p(95)<400'],           // 95% das respostas devem ser < 400ms
    'checks': ['rate>0.99'],
  },
}

export default function () {
  group('Testar recursos estáticos', function () {
    const html = http.get(getBaseUrl());
    check(html, { 'HTML carregado': (r) => r.status === 200 })

    const css = http.get(`${getBaseUrl()}/styles.css`)
    check(css, { 'CSS carregado': (r) => r.status === 200 })

    const js = http.get(`${getBaseUrl()}/app.js`)
    check(js, { 'JS carregado': (r) => r.status === 200 });

  })

  sleep(1)
}