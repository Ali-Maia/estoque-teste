import http from 'k6/http'
import { check, sleep } from 'k6'
import { getBaseUrl } from '../utils/variaveis.js';

export let options = {
  stages: [
    { duration: '30s', target: 200 },  
    { duration: '60s', target: 200 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    'http_req_duration': ['p(95)<800'],
    'http_req_failed': ['rate<0.01'],
    'checks': ['rate>0.98'],
  },
}

export default function () {
  const res = http.get(getBaseUrl());

  check(res, {
    'status 200': (r) => r.status === 200,
  })

  sleep(1)
}