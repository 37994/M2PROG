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
    }
}

let app = new App();
app.runApplication();