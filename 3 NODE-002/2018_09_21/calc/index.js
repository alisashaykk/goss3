const arg_to_num = args => Object.entries(args).reduce(
    (result, [key, value]) => {
        const numberedArg = Number(value);
        return { ...result, [key]: numberedArg };
    },{},
);

const calculator = (method, { a, b }) => {
    let result;

    switch (method) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = a / b;
            break;
        case 'pow':
            result = a ** b;
            break;

        default:
            break;
    }

    return String(result);
};

module.exports = (URL, app) => app
    .get(URL, (req, res) => {
        const { method, ...string_args } = req.params;
	    const args = arg_to_num(string_args);
		
        res.send(calculator(method, args));
    });
