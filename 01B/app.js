class App {
    runApplication() 
    {
        this.greeting = "starting up";
        this.appNaam = 'naam';
        this.versienummer = 9;
        this.versiedatum = new Date();
        this.autheur = 'Liam'
        this.copyright = 'ja'
        this.distributeur = 'iemand'
        this.darkmode = true
        console.log(this.greeting)
        console.log('App Naam: '+this.appNaam);
        console.log('versie nummer: '+this.versienummer);
        console.log('versie datum: '+this.versiedatum);
        console.log('autheur: '+this.autheur);
        console.log('copyrights: '+this.copyright);
        console.log('distributeur: '+this.distributeur);
        console.log('darkmode: '+this.darkmode);
        
    }
}

let app = new App();
app.runApplication();