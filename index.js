function greeting(name) {
  console.log(name);
}

let receivesAFunction = (callback) => {
  return callback();
};

let returnsANamedFunction = () => {
  return function greeting() {
    console.log("hello");
  };
};

let returnsAnAnonymousFunction = () => {
  return () => {
    console.log("yoooooo");
  };
};
