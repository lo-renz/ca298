function printer(myCallback) {
    console.log(myCallback);
}

let anonymous = function() {
    console.log("Anonymous function");
};

printer(anonymous);