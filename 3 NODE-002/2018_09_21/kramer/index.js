const arg_to_num = args => Object.entries(args).reduce(
    (result, [key, value]) => {
        const numberedArg = Number(value);
        return { ...result, [key]: numberedArg };
    },{},
);


const kramer = ({
    a1, b1, c1, a2, b2, c2,
}) => {
	let d;
    d = a1 * b2 - a2 * b1;	
	if (d != 0) {
		let d1,d2,x,y;
		d1 = c1 * b2 - c2 * b1;
		d2 = a1 * c2 - a2 * c1;
		x = d1 / d;
		y = d2 / d;
		return { x, y };
	} else {
		return "It can not be solved with Kramer method";
	}    
};

module.exports = (URL, app) => app.get(URL, (req, res) => {
    const args = arg_to_num(req.params);
    res.json(kramer(args));
});
