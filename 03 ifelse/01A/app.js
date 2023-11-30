class App
{
    runApplication()
    {
      let title = document.getElementById("newstitle");
      let newsitem1 = document.getElementsByClassName("gamenews")[0];
      let newsitem2 = document.getElementsByClassName("gamenews")[1];
      //let gameNews = document.getElementsByClassName('gamenews');
      
      console.log(title);
      console.log(newsitem1);
      console.log(newsitem2);


      let random = Math.random();
      console.log(random);
      if(random < 0.2)
      {
        title.style.backgroundColor = 'FF0000'
      }
      else if(random < 0.6)
      {
        title.style.backgroundColor = '#b85f8d'
      }
      else if(random < 0.75)
      {
        title.style.backgroundColor = '#ff00e1'
      }
      else if(random > 0.75)
      {
        title.style.backgroundColor = '#b3711b'
      }

      let random1 = Math.random();
      console.log(random1);
      if(random1 < 0.2)
      {
        newsitem1.style.backgroundColor = 'FF0000'
      }
      else if(random1 < 0.6)
      {
        newsitem1.style.backgroundColor = 'FF0000'
      }
      else if(random1 < 0.75)
      {
        newsitem1.style.backgroundColor = '#ff00e1'
      }
      else if(random1 > 0.75)
      {
        newsitem1.style.backgroundColor = '#b3711b'
      }
      let random2 = Math.random();
      console.log(random2);
      if(random2 < 0.2)
      {
        newsitem2.style.backgroundColor = 'FF0000'
      }
      else if(random2 < 0.6)
      {
        newsitem2.style.backgroundColor = '#b85f8d'
      }
      else if(random2 < 0.75)
      {
        newsitem2.style.backgroundColor = '#ff00e1'
      }
      else if(random2 > 0.75)
      {
        newsitem2.style.backgroundColor = '#b3711b'
      }
    }
}

let app = new App();
app.runApplication();