class User {
    constructor(naam) {
        this.naam = naam;
    }

    WieBenIk() {
        console.log(this.naam);
    }
}

class App {
    runApplication() {
        console.log('hello world!');
        let user1 = new User('lois');
        let user2 = new User('brian');
        let user3 = new User('stewie');
        let user4 = new User('meg');
        let user5 = new User('christopher');
        let user6 = new User('herbert');

        user1.WieBenIk(); //lois
        user2.WieBenIk(); //brian
        user3.WieBenIk(); //stewie
        user6.WieBenIk();//herbert
        user5.WieBenIk();//christopher
        user1.WieBenIk();//lois
        user2.WieBenIk();//brian
        user4.WieBenIk();//meg
        user4.WieBenIk();//meg
        user3.WieBenIk();//stewie
        user5.WieBenIk();//christopher
        user6.WieBenIk();//herbert
    }
}

let app = new App();
app.runApplication();