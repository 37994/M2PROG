//function argumentsAreHandy(shoutout)
//{
//    console.log('do you want to give a shoutout');
//    console.log(shoutout);
//}
//
//function superMooieGlobalFunction()
//{
//    console.log('ik ben global');
//    console.log('dus je mag mij overal aanroepen');
//}
//
//superMooieGlobalFunction();
//superMooieGlobalFunction();
//superMooieGlobalFunction();
//
//
//
//class App {
//
//    runApplication() {
//        console.log('hello world')
//        superMooieGlobalFunction();
//
//    }
//}
//
//let app = new App();
//app.runApplication();

class App {

//   runApplication() {
//
//       console.log('hello world');
//   }
//
//   newClassFunction() {
//       
//       console.log('hello world in de nieuwclassfunction');
//   }
//
//   anotherFunctionWithArguments(aArgument) {
//       console.log('hier:');
//       console.log(aArgument);
//   }

    mario() {
        console.log('MARIO!!');
    }

    bwah() {
        console.log('BWAHAHA!!!');
    }

    maffs() {
        let a = 1;
        let b = 2;

        let c = (a+b);
        console.log(c);
    }

    abc() {
        console.log('abc')
    }
}

let app = new App();
app.mario();
app.bwah();
app.maffs();
app.abc();