function add(x, y) {
    return x + y;
}

function printer(myCallback) {
    console.log(myCallback)
}

let x = 10;
let y = 14;

printer(add(x, y));