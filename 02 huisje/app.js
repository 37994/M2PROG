class App
{
    runApplication()
    {
        console.log("Hello World!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillStyle = "grey";
        g.beginPath();
        g.moveTo(200, 300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.moveTo(800,300);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        g.fillStyle = "red";
        g.beginPath();
        g.moveTo(600,400);
        g.lineTo(700,200);
        g.lineTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "grey";
        g.beginPath();
        g.moveTo(20, 30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.moveTo(60,40);
        g.lineTo(60,60);
        g.moveTo(80,30);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();
        g.fillStyle = "red";
        g.beginPath();
        g.moveTo(60,40);
        g.lineTo(70,20);
        g.lineTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();
        console.log(canvas);
    }
}
 
let app = new App();
app.runApplication();