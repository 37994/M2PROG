class App {

    runApplication() {
        console.log("hello world");
        let uiButton = document.getElementById('knop');
        let mijnButton = document.getElementById('mijnKnop');
        let Knop3 = document.getElementById('nogEenKnop');

        let localeFuntion = function (e) {
            console.log("click!");
        };
        uiButton.addEventListener("click", (e) => {
            const para = document.createElement("p");
            const node = document.createTextNode("this is new");
            para.appendChild(node);
            document.body.appendChild(para);
        });

        mijnButton.addEventListener("click", (e) => {
            const h1 = document.createElement("h1");
            const woorden = document.createTextNode("eigen tekst");
            const img = document.createElement("img");

            img.src = "foto.jpeg";

            h1.appendChild(woorden);
            document.body.appendChild(h1);
            document.body.appendChild(img);
        });

        Knop3.addEventListener("click", (e) => {
            const h1 = document.createElement("h1");
            const woorden = document.createTextNode("clicked a div");
            const img = document.createElement("img");

            img.src = "foto2.jpeg";

            h1.appendChild(woorden);
            document.body.appendChild(h1);
            document.body.appendChild(img);
        });
    }
}

let app = new App();
app.runApplication();