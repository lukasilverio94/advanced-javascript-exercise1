// //Exercises from Javascript Advanced,
// //Matrix Master #14
// // 1. We have a simple object:

// // JAVASCRIPT
// // let user = {
// //   name: "John",
// //   years: 30
// // }
// // Write the destructuring assignment that reads:

// // name property into the variable name.
// // years property into the variable age.
// // isAdmin property into the variable isAdmin (false if absent)

// // //Solution >>>
// // const {name, years, isAdmin} = user;
// // // ##############################################################################################################################

// // // Exercise 2
// // // Give the right name:

// // // Create the variable with the name of our planet. How would you name such a variable?
// // // Create the variable to store the name of the current visitor. How would you name that variable?
// //Solution >>>
// // const ourPlanet = "Earth";
// // let currentVisitor = "Mike";
// // ##############################################################################################################################

// //Exercise 3
// // Look at the code. What will be result of the call at the last line and why?

// // JAVASCRIPT
// // let phrase = "Hello"

// // if (true) {
// //   let user = "John";
// //   function sayHi() {
// //     alert(`${phrase}, ${user}`)
// //   }
// // }

// // sayHi()
// //Solution >>>
// //It will alert Hello, John - Because the condition true is true.

// // ##############################################################################################################################

// // Exercise 4
// // Write the code, one line for each action:

// // Create an empty object user.
// // Add the property name with the value John.
// // Add the property surname with the value Smith.
// // Change the value of the name to Pete.
// // Remove the property name from the object.#
// //Solution >>>
// // const user = {}
// // user.name = "John";
// // user.surname = "Smith";
// // user.name = "Pete";
// // delete user.name

// // console.log(user)

// // ##############################################################################################################################
// //Exercise 5
// // Is it possible to change an object declared with const, how do you think and why?
// // JAVASCRIPT
// // const user = {
// //   name: "John"
// // }
// // // does it work?
// // user.name = "Pete"
// //Solution: >>> Yes, it works! Because you are reasigning the value of the key, not changing the object itself
// //it will console {name : "Pete"},

// // ##############################################################################################################################
// //Exercise 6
// // We have an object storing salaries of our team:
// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130,
// };
// // Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.
// //Solution >>>
// let sum = 0;
// //Using loop in
// for (let employee in salaries) {
//   sum += salaries[employee];
// }
// //Check if salaries is empty, if yes, the result must be 0
// if (Object.keys(salaries).length === 0) {
//   sum = 0;
// }

// console.log(`Total salary sum: ${sum}`);
// // ##############################################################################################################################
// //Exercise 7
// // Rewrite this if using the ternary operator '?':
// // if (a + b < 4) {
// //     result = 'Below';
// //   } else {
// //     result = 'Over';
// //   }
// //Solution >>>
// // let result = (a + b < 4) ? "Bellow" : "Over";
// // ##############################################################################################################################

// // Exercise 8
// // Rewrite if..else using multiple ternary operators '?'.
// // let message;

// // if (login == 'Employee') {
// //   message = 'Hello';
// // } else if (login == 'Director') {
// //   message = 'Greetings';
// // } else if (login == '') {
// //   message = 'No login';
// // } else {
// //   message = '';
// // }

// //Solution >>>
// // let login = "Director"
// // let message =
// //   login == "Employee"
// //     ? "Hello"
// //     : login == "Director"
// //     ? "Greetings"
// //     : login == ""
// //     ? "No login"
// //     : "";
// //it will console "Greetings"