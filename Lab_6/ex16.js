const person = {
    name: "Renso",
    age: 19,
    address: "Dublin",
    sayHello: function() {
        return "Hello my name is " + this.name;
    }
}

console.log(person.sayHello());