require('should');
const { get } = require('axios');
const headers = { 'Content-Type': 'application/json' };

const cases = [...Array(20).keys()];

cases.forEach(val => describe(`${val} calculate`, () => {
  it('sent num is equal to received num', async () => {
    const firstURL = `https://kodaktor.ru/api2/there/${val}`;
    const firstRes = await get(firstURL, { headers });

    const secondURL = `https://kodaktor.ru/api2/andba/${firstRes.data}`;
    const secondRes = await get(secondURL, { headers });
    secondRes.data.should.equal(val);
  });
}));
