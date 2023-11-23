class App
{
    runApplication()
    {
        console.log("Hello World!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillStyle = "blue";
        g.fillRect(0, 0, canvas.width, canvas.height);
        g.fillStyle = "grey";
        g.fillRect(0, 0, 10, 10);
        console.log(canvas);

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(20, 20);
        g.lineTo(300, 300);
        g.lineTo(580, 20);
        g.closePath();
        g.stroke();
        g.fill();
      
    }
}
 
let app = new App();
app.runApplication();