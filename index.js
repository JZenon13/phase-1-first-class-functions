function greeting(name) {
    console.log(name);
  }
  


function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction()  {
    return function greeting() {
        console.log('hello')
    }
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log('yoooooo')
    }
}
