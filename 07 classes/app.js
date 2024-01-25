class App {
    runApplication() {
        console.log('hello world!');
    }
}

class Greet {
    constructor() {
        this.greeting = 'greetings!'
    }

    showGreeting() {
        console.log("greeting ban binnen: " +this.greeting);
    }
}

class Goodbye {
    constructor() {
        this.goodbye = 'goodbye!'
    }

    showGoodbye() {
        console.log("buh bye van binnen: " +this.goodbye);
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

console.log('greeting vam buiten: ' +geet.greeting);

app.runApplication();

