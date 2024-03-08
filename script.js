// -------------------------------------------------------------- //
// -------------------------------------------------------------- //
// Using a loop and our conditional skills to take an array
// of monies:
//   [5, .10, 1, .25, 20]
// And put each "dollar bill" value into the dollars array.
//   [5, 1, 20]
// And put each "cents" value into the cents array.
//   [.10, .25]
let monies = [5, .10, 1, .25, 20];

let dollars = [];
let cents = [];

for (let i = 0; i < monies.length; i++) {
  let oneMoney = monies[i];

  if (oneMoney >= 1) {
    dollars.push(oneMoney);
  } else if (oneMoney < 1) {
    cents.push(oneMoney);
  }
}

console.log('dollars should be [5, 1, 20]', dollars);
console.log('cents should be [.10, .25]', cents);


// -------------------------------------------------------------- //
// -------------------------------------------------------------- //
// Bonus content: On `for` vs `for...of` loops!
let someThings = [];
// -------------------------------------------------------------- //
// -------------------------------------------------------------- //

// "Start at index 0 and look at each value in the
// array, one by one" is BY FAR the most common way we use
// for loops.
// It starts feeling like a real hassle to have to type
// this code out EVERY TIME we need to do this:
for (let i = 0; i < someThings.length; i++) {
  let oneThing = someThings[i];
  // Do something with oneThing...
}

// That's a lot of code to tell the computer to do something simple:
  // * Loop through someThings one-by-one.
  // * Refer to each "thing" as oneThing.
// So! Thankfully, the JS language gives us a shortcut!
// The for...of loop!
for (let oneThing of someThings) {
 // Do something with oneThing...
}

// In this example, or job is to look at each string in the
// mySocks array. If the value of the string is 'blue', we
// want to use console.log to make 'A blue sock!' appear in
// the browser console.

let mySocks = ['yellow', 'white', 'gray', 'blue', 'green'];

// Solution using a for loop:
for (let i = 0; i < mySocks.length; i++) {
  let aSock = mySocks[i];

  if (aSock === 'blue') {
    console.log('A blue sock!');
  }
}

// Solution using a for...of loop:
for (let aSock of mySocks) {
  if (aSock === 'blue') {
    console.log('A blue sock!');
  }
}

// Once you're truly comfortable (AKA: You have a solid mental model
// that you could explain to some other human!) with for loops, using
// for...of loops is a syntactical shortcut that:
// * Makes our code more "human readable."
// * Requires less typing. (Less typing...less bugs! Right!?)
// * "Abstracts away" the need to think about array index values.
