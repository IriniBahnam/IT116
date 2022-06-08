// console.log("hello world");
// Using let to assighn variable of randomNumber// 
// let randomNumber = Math.random(); //0.0-1
// If statement. If the randomNumber is less than 0.50 then the condition is met
// if(randomNumber <0.50) {
//     console.log("condition was met");
//     console.log(randomNumber);
// }

// If the randomNumber is greater than or equal to 0.5 then consition is met// 
// if (randomNumber >= 0.5) {
//     console.log("condition was met");
//     console.log(randomNumber);
// }

// making a const (will never change) and using the else-if statement to figure out the day of the week
// const dayOfWeek = 'Saturday';

// if(dayOfWeek === 'Monday') {
//     console.log("Yay its Monday!");
// } else if (dayOfWeek === 'Friday'){
//     console.log("Yay its Friday!")
// } else if (dayOfWeek === 'Saturday') {
//     console.log("You have the correct day");
// }

// using const (never changes) and using the prompt function to output a WINDOW
// const age = prompt("Enter an Age");
// // using if and else if statements to figure out how old you are. 
// if (age < 5) {
//     console.log("Hey you're a baby");
// }else if (age < 10) {
//     console.log("Hey you're just a kid");
// } else if (age < 35) {
//     console.log("You're getting older");
//     // IF ALL OTHER CONDITIONS FAIL, USE ELSE
// } else {
//     console.log("You're over the age of 35.");
// }

// const fruit = 'oranges';
// // using a switch statements, very similar to if statements but uses 'case' to input values. Default is the last resort if all conditions fail. Also need BREAKS after every case statment.
// switch (fruit) {
//     case 'bananas':
//     console.log("bananas are 50 cents");
//         break;
//     case 'blueberries':
//     console.log("blueberriess are 1 dollar");
//         break;
//     case 'strawberries':
//     console.log("strawberies are 2 dollar");
//         break;
//     case 'rasberries':
//     console.log("rasberries are 1 dollar");
//         break;
//         default:
//             console.log("Last resort if all conditions fail");
// }

// const password = prompt("Enter in a New Password");
// if the password is less than 6 characters it is too short. // 
// if (password.length >= 6) {
// using indexOf because if there is no spaces in the password then will return -1 and is valid
//     if (password.indexOf(' ') === -1) {
//         console.log("valid password")

//     } else {

//         console.log("Password cant have spaces");
//     }
// } else {
//     console.log("password is too short");
// }

// using function and name to pass argument parameters into console.log
// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("ME");
// }

// singSong()
// singSong()
// singSong()

// // using function and name to pass in multiple arguments and also using expressions ${} in the console
// function greet(firstName, lastName) {
//     console.log(`Hey There, ${firstName} ${lastName}`)
// }
// greet('Boomer', 'Sooner');