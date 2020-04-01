//4 task

const f = function (arg) {
    let message;

    if (typeof (arg) === 'string') {
        message = arg.trim();
        if (message.length > 30) {
            message = message.slice(0, 30) + ' ...';
        }
        return message;
    }
    message = 'arg not string';
    return message;
};

console.log(f(5));
console.log(f('string'));
console.log(f('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'));