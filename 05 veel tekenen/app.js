class App {
    runApplication() {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        for(let i = 0;i<200;i++) {
            this.tekenCirkel(g, Math.random() * canvas.offsetWidth, Math.random() * canvas.offsetHeight);
        }
    }

    tekenCirkel(g, x, y) {        
        g.fillStyle = "red"
        g.beginPath();
        g.arc(x, y, 20, 0, Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
    }
}
 
let app = new App();
app.runApplication();