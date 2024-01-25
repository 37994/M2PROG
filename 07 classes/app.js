class App {
    runApplication() {
        console.log('hello world!');
    }
}

class Greet {
    constructor() {
    }

    showGreeting() {
        console.log("greetings")
    }
}

class Goodbye {
    constructor() {
    }

    showGoodbye() {
        console.log("buh bye")
    }
}

let geet = new Greet();
let goodby = new Goodbye();
let app = new App();

geet.showGreeting();
goodby.showGoodbye();

geet.showGreeting();
goodby.showGoodbye();

geet.showGreeting();
goodby.showGoodbye();

app.runApplication();

