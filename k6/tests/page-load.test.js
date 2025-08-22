import http from 'k6/http'
import { check, sleep } from 'k6'
import { getBaseUrl } from '../utils/variaveis.js'

export let options = {
  vus: 10,          
  duration: '20s',
  thresholds: {
    'http_req_duration': ['p(95)<500'],           
    'checks': ['rate>0.99'],                      
  },  
}

export default function () {
  const res = http.get(getBaseUrl());

  check(res, {
    'status 200': (r) => r.status === 200,
    'contém "Cadastrar Produto"': (r) => r.body.includes('Cadastrar Produto'),
  })

  sleep(1)
}
