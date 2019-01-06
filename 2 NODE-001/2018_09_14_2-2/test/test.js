const { get } = require('axios');
const should = require('should');

const headers = { 'Content-Type': 'application/json'};
const cases = [
	{a: 3, b: 6, xs: 9}, 
	{a: -4, b: 1, xs: -3}, 
	{a: 0.1, b: 0.2, xs: 0.3}
];



cases.forEach(({a, b, xs}) => {
  describe('asyncAdd', () => {
    it(`respond with sum`, (async () => {
		const URL = `http://localhost:4321/add/${a}/${b}`;
		const {data : {"Сумма": s}} = await get(URL, {headers});
		s.should.equal(xs);
    }));
  });
});
