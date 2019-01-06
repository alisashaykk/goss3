require ('should');
const { get } = require('axios');

const a = 1;
const b = 2;
const URL = `https://kodaktor.ru/api/add/${a}/${b}`;
const headers = { 'Content-Type': 'application/json' };

describe('asyncAdd', () => {
  it (`should return the sum of ${a}, ${b}`, async () => {
    const {data : {"Сумма": s}}  = await get(URL, { headers });
    s.should.equal(3);
  });
});
