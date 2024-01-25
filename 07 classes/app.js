class App {
    runApplication() {
        console.log('hello world!');
    }
}

class Greet {
    constructor() {
        console.log("greetings!");
    }
}

class Goodbye {
    constructor() {
        console.log("buh bye!");
    }
}

let geet = new Greet();
let goodby = new Goodbye();

let app = new App();
app.runApplication();
