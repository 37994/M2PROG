class Dino {
    constructor(naam, vleester, leeftijd) {
        this.naam = 'peter';
        this.vleester = true;
        this.leeftijd = 62;
    }
}

class App {
    runApplication() {
        let dino = new Dino();

        console.log('de leeftijd van '+dino.naam+' is: '+dino.leeftijd);
        console.log('en '+dino.naam+" eet vlees "+dino.vleester);

        console.log(dino);
    }
}

let app = new App();
app.runApplication();