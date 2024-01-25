class App {

    runApplication() {
        console.log("hello world");
        let uiButton = document.getElementById('knop');

        let localeFuntion = function (e) {
            console.log("click!");
        };
        uiButton.addEventListener("click", (e) => {
            console.log("click!")
        });
    }
}

let app = new App();
app.runApplication();