// there are 3 methods of condition checking

const num = 40;

if (num < 30) {
    console.log("The number is bigger 30!");
} else if (num < 50) {
    console.log("The number is less than 50!");
} else {
    console.log("The number bigger than 50!");
}

let result = num < 30 ? console.log("The number is bigger than 30!") : 
  num < 50 ? console.log("The number is less than 50!") : console.log("The number bigger than 50!");

switch (num) {
  case num < 30:
    console.log("The number is bigger 30!");
    break;
  case num < 50:
    console.log("The number is less than 50!");
    break;

}
