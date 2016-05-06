var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach( function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach( (name) => console.log('forEach arrow', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Andre'));

var person = {
  name: 'Andre',
  greet: function() {
    names.forEach( function(name) {
      // this is undefined here
      console.log(this.name + ' says hi to ' + name);
    })
  }
}

var person2 = {
  name: 'Andre',
  greet: function() {
    names.forEach( (name) => {
      // using arrow function, this is defined here
      console.log(this.name + ' says hi to ' + name);
    })
  }
}

// person2.greet();

//  Challenge area
function add (a, b) {
  return a + b;
}

var add2 = (a, b) => {
  return a + b;
}

var add3 = (a, b) => a + b;


// console.log(add(1, 3));
// console.log(add(9, 0));

console.log(add2(1, 3));
console.log(add3(9, 0));
