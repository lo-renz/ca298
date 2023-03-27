const greetings = ["how are you", 
        "how's it going", 
        "where were you when the Westfold fell",
        "DId yOU pUT YOUr NAmE iN The goBlet Of fIRE",
        "this is the way",
        "I was there the day Horus slew the Emperor"
    ]

function HeadingComponent({name="Renso"}) {
    return (
        <h1>{name}</h1>
        //<h1>{sayHello()}</h1>
    )
}

//const sayHello = () =>{
//    let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
//    return `Hello ${name}, ${randomGreeting}`;
//}

export default HeadingComponent;