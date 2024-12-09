function receivesAFunction(callback) {
    const data = 15*2;
    callback(data);
}

function receivedFunction(data){
    console.log("The result is = "  + data);
}

receivesAFunction(receivedFunction);

function returnsANamedFunction() {
    return function returnedFunction() {
        console.log("This is a returned function");
    }
}
 returnsANamedFunction()();

 function returnsAnAnonymousFunction() {
    return () => {
        console.log(" This is my  anonymous function");
    }
 }

 returnsAnAnonymousFunction()();