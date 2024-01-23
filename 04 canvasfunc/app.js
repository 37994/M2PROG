class App
{
    runApplication()
    {
        console.log("Hello World!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        
        this.tekenhuis(g, 8, 9);
        this.tekenhuis2(g);
        this.tekenhuis3(g);
        this.tekenKerstBoom1(g);
    }

    tekenhuis(g, x, y)
    {      
    

        //g.fillStyle = "grey";
        //g.beginPath();
        //g.moveTo(200+x,300+y);
        //g.lineTo(200+x,500+y);
        //g.lineTo(600+x,600+y);
        //g.lineTo(800+x,500+y);
        //g.lineTo(800+x,300+y);
        //g.lineTo(600+x,400+y);
        //g.lineTo(200+x,300+y);
        //g.moveTo(600+x,400+y);
        //g.lineTo(600+x,600+y);
        //g.moveTo(800+x,300+y);
        //g.lineTo(700+x,200+y);
        //g.lineTo(600+x,400+y);
        //g.closePath();
        //g.stroke();
        //g.fill();
//
        //g.fillStyle = "red";
        //g.beginPath();
        //g.moveTo(600+x,400+y);
        //g.lineTo(700+x,200+y);
        //g.lineTo(300+x,100+y);
        //g.lineTo(200+x,300+y);
        //g.lineTo(600+x,400+y);
        //g.closePath();
        //g.stroke();
        //g.fill();

        g.fillStyle = "grey";
        g.beginPath();
        g.moveTo(20+x,30+y);
        g.lineTo(20+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(80+x,50+y);
        g.lineTo(80+x,30+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.moveTo(60+x,40+y);
        g.lineTo(60+x,60+y);
        g.moveTo(80+x,30+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.fillStyle = "red";
        g.beginPath();
        g.moveTo(60+x,40+y);
        g.lineTo(70+x,20+y);
        g.lineTo(30+x,10+y);
        g.lineTo(20+x,30+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();
        
        //console.log(canvas);
    }

    tekenhuis2(g)
    {      
        let x = 100;
        let y = 100;

        //g.fillStyle = "grey";
        //g.beginPath();
        //g.moveTo(200+x,300+y);
        //g.lineTo(200+x,500+y);
        //g.lineTo(600+x,600+y);
        //g.lineTo(800+x,500+y);
        //g.lineTo(800+x,300+y);
        //g.lineTo(600+x,400+y);
        //g.lineTo(200+x,300+y);
        //g.moveTo(600+x,400+y);
        //g.lineTo(600+x,600+y);
        //g.moveTo(800+x,300+y);
        //g.lineTo(700+x,200+y);
        //g.lineTo(600+x,400+y);
        //g.closePath();
        //g.stroke();
        //g.fill();
//
        //g.fillStyle = "red";
        //g.beginPath();
        //g.moveTo(600+x,400+y);
        //g.lineTo(700+x,200+y);
        //g.lineTo(300+x,100+y);
        //g.lineTo(200+x,300+y);
        //g.lineTo(600+x,400+y);
        //g.closePath();
        //g.stroke();
        //g.fill();

        g.fillStyle = "grey";
        g.beginPath();
        g.moveTo(20+x,30+y);
        g.lineTo(20+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(80+x,50+y);
        g.lineTo(80+x,30+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.moveTo(60+x,40+y);
        g.lineTo(60+x,60+y);
        g.moveTo(80+x,30+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.fillStyle = "red";
        g.beginPath();
        g.moveTo(60+x,40+y);
        g.lineTo(70+x,20+y);
        g.lineTo(30+x,10+y);
        g.lineTo(20+x,30+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();
        
        //console.log(canvas);
    }

    tekenhuis3(g)
    {      
        let x = 200;
        let y = 100;

        //g.fillStyle = "grey";
        //g.beginPath();
        //g.moveTo(200+x,300+y);
        //g.lineTo(200+x,500+y);
        //g.lineTo(600+x,600+y);
        //g.lineTo(800+x,500+y);
        //g.lineTo(800+x,300+y);
        //g.lineTo(600+x,400+y);
        //g.lineTo(200+x,300+y);
        //g.moveTo(600+x,400+y);
        //g.lineTo(600+x,600+y);
        //g.moveTo(800+x,300+y);
        //g.lineTo(700+x,200+y);
        //g.lineTo(600+x,400+y);
        //g.closePath();
        //g.stroke();
        //g.fill();
//
        //g.fillStyle = "red";
        //g.beginPath();
        //g.moveTo(600+x,400+y);
        //g.lineTo(700+x,200+y);
        //g.lineTo(300+x,100+y);
        //g.lineTo(200+x,300+y);
        //g.lineTo(600+x,400+y);
        //g.closePath();
        //g.stroke();
        //g.fill();

        g.fillStyle = "grey";
        g.beginPath();
        g.moveTo(20+x,30+y);
        g.lineTo(20+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(80+x,50+y);
        g.lineTo(80+x,30+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.moveTo(60+x,40+y);
        g.lineTo(60+x,60+y);
        g.moveTo(80+x,30+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.fillStyle = "red";
        g.beginPath();
        g.moveTo(60+x,40+y);
        g.lineTo(70+x,20+y);
        g.lineTo(30+x,10+y);
        g.lineTo(20+x,30+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();
        
        //console.log(canvas);
    }

    tekenKerstBoom1(g)
    {

        let x = 0;
        let y = 0;

        g.fillStyle = "green";
        g.beginPath();
        g.moveTo(200+x, 200+y);
        g.lineTo(400+x, 200+y);
        g.lineTo(300+x, 100+y);
        g.lineTo(200+x, 200+y);
        g.moveTo(200+x, 150+y);
        g.lineTo(400+x, 150+y);
        g.lineTo(300+x, 50+y);
        g.lineTo(200+x, 150+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "brown"
        g.beginPath();
        g.moveTo(275+x, 200+y);
        g.lineTo(325+x, 200+y);
        g.lineTo(325+x, 250+y);
        g.lineTo(275+x, 250+y);
        g.lineTo(275+x, 200+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "blue"
        g.beginPath();
        g.arc(235, 180, 10, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "blue"
        g.beginPath();
        g.arc(275, 160, 10, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "blue"
        g.beginPath();
        g.arc(295, 180, 10, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "blue"
        g.beginPath();
        g.arc(235, 180, 10, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "blue"
        g.beginPath();
        g.arc(235, 180, 10, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "blue"
        g.beginPath();
        g.arc(235, 180, 10, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "blue"
        g.beginPath();
        g.arc(235, 180, 10, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "blue"
        g.beginPath();
        g.arc(235, 180, 10, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "blue"
        g.beginPath();
        g.arc(235, 180, 10, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "blue"
        g.beginPath();
        g.arc(235, 180, 10, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
    }
}
 
let app = new App();
app.runApplication();