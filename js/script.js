let cost = parseFloat(prompt("Enter the cost."));
let amount = parseFloat(prompt("Enter the amount given."));
let change = amount - cost;
let numQuarters = 0;
let numDimes = 0;
let numNickels = 0;
let numPennies = 0;
let totalChange = 0;
const quarter = .25;
const dime = .1;
const nickel = .05;
const penny = .01;

change = change.toFixed(2);

totalChange = change;

if (change >= quarter) {
  numQuarters = Math.trunc(change/quarter);
  change = change - quarter * numQuarters;
  change = change.toFixed(2);
}
if (change >= dime) {
  numDimes = Math.trunc(change/dime);
  change = change - dime * numDimes;
  change = change.toFixed(2);
}
if (change >= nickel) {
  numNickels = Math.trunc(change/nickel);
  change = change - nickel * numNickels;
  change = change.toFixed(2);
}
if (change >= penny) {
  numPennies = Math.trunc(change/penny);
}

document.querySelector('#change').innerHTML = "<p>Total change: $" + totalChange + "</p>"
+ "<p>Quarters: " + numQuarters + ", Dimes: " + numDimes + ", Nickels: " + numNickels + ", Pennies: " + numPennies + "</p>";
