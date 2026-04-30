import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuração de carga
export let options = {
  stages: [
    { duration: '10s', target: 10 }, // subida
    { duration: '20s', target: 30 }, // carga média
    { duration: '10s', target: 0 },  // descida
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% das requisições < 500ms
    http_req_failed: ['rate<0.01'],   // menos de 1% de erro
  },
};

export default function () {
  const petId = Math.floor(Math.random() * 100000);

  // CREATE
  let payload = JSON.stringify({
    id: petId,
    name: "dog-k6",
    status: "available"
  });

  let params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let createRes = http.post('https://petstore.swagger.io/v2/pet', payload, params);

  check(createRes, {
    'POST status 200': (r) => r.status === 200,
  });

  // GET
  let getRes = http.get(`https://petstore.swagger.io/v2/pet/${petId}`);

  check(getRes, {
    'GET status 200': (r) => r.status === 200,
    'GET tempo < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}