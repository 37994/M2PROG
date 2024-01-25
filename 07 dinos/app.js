class Dino {
    constructor(naam, vleeseter, leeftijd) {
        this.naam = naam;
        this.vleester = vleeseter;
        this.leeftijd = leeftijd;

        this.leeft = true;
        this.honger = true;
    }

    eatFood(foodToEat) {
        this.hunger = false;
        foodToEat.leeft = false;

        console.log("ik ben een " + this.naam);
        console.log("ik eet nu " + foodToEat.naam);
        console.log("mijn honger: " + this.honger);
    }
}

class Plant {
    constructor(naam) {
        this.naam = naam;
        this.leeft = true;
    }
}

class App {
    runApplication() {
        console.log("hello world");

        let dino = new Dino("T-Rex", true, 62);
        let plantenEter = new Dino("Triceratops", true, 62);
        let gras = new Plant("gras"); 
        let struik = new Plant("struik"); 
        
        plantenEter.eatFood(gras);
        plantenEter.eatFood(struik);

        console.log(dino);
        console.log(plantenEter); 

        dino.eatFood(plantenEter);
        console.log("leeft " + plantenEter.naam + "? " + plantenEter.leeft);
    }
}

let app = new App();
app.runApplication();