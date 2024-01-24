class App{

    runApplication()
    {
        console.log("Hello World!")       

        let arr = [ " Leonardo da Vinci", "Michelangelo ", "Rembrandt ", "winnie the pooh"]
        for (const iterator of arr) {
            console.log(iterator);
        }
        
        let arr2 = [5, 3, 1, 9, 3.14159265359979323338]
        for(const nummmmmer of arr2){
            console.log(nummmmmer +1)
        }

        for(let i = 0; i<arr.length;i++)
        {
            arr.push("bob Dylan", "prince");
            console.log(i+": "+arr[i]);
            arr.splice("prince");
            console.log(i+": "+arr[i]);
        }

        let h1s = document.getElementsByClassName("spelen");
        for(const headers of h1s) {
            console.log(headers);
        }

        let mijnH1 = document.getElementById("headerId");
        console.log(mijnH1.innerText);

        mijnH1.innerText = "nieuwe text";
        for(const textDing of mijnH1.innerText) {
            console.log(textDing);
        }

        //mijnH1[0].innerText = "nieuwe text";
        //mijnH1[1].innerText = "andere nieuwe text";
        //mijnH1[2].innerText = "nog een nieuwe text";
        //for(const textDing of mijnH1[0].innerText) {
        //    console.log(textDing);
        //}

        let data = ["rainbow six siege", "war thunder", "escape from tarkov", "tax evasion simulator", "train sim world 3"];
        for(let i = 0; i<data;i++)
        {
            data.headersByCssClass[1];
        }
    }
}

let app = new App();
app.runApplication();