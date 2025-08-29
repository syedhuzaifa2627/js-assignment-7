// Chapter 21 to 25

// Question 1

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")

// var fullName = firstName + " " + lastName

// alert("HELLO!" + " " + fullName.toUpperCase())

// Question 2

// var favouriteMobileModel = prompt("Enter your favourite mobile phone model")
// var lengthOfModel = favouriteMobileModel.length

// document.writeln("My Favourite Phone is:" + " " + favouriteMobileModel + "<br>")
// document.writeln(" Length of String:" + " " + lengthOfModel)

// Question 3

// var word = "Pakistani"
// var index = word.indexOf("n")

//  document.writeln("String:" + " " + word + "<br>")
//  document.writeln("Index of 'n':" + " " + index)

// Question 4

// let greetings = "Hello World"
// let newIndex = greetings.lastIndexOf("l")

// document.writeln("String:" + " " + greetings + "<br>")
// document.writeln("Last Index of 'l':" + " " + newIndex)

// Question 5

// let country = "Pakistan"
// let character = country.charAt(5)

// document.writeln("String:" + " " + country + "<br>")
// document.writeln("Character at Index 5:" + " " + character)

// Question 6

// var yourFirstName = prompt("Enter your first name")
// var yourLastName = prompt("Enter your last name")

// var yourFullName = yourFirstName.concat(" " , yourLastName).toUpperCase()

// alert("WELCOME!" + " " + yourFullName)

// Question 7

// let city = "Hyderabad"
// let replacement = city.replace("Hyder" , "Islam")

// document.writeln("City:" + " " + city + "<br>")
// document.writeln("After replacement:" + " " + replacement)

// Question 8

// var text = "Ali and Sami are best friends. They play cricket and football together."
// var replacementToText = text.replaceAll("and" , "&")

// document.writeln("Text:" + " " + text + "<br>")
// document.writeln("After replacement in the text:" + " " + replacementToText)

// Question 9

// var num = "678"
// var newNum = Number("678")

// document.writeln("Value:" + " " + num  + "<br>")
// document.writeln("Type:" + " " + typeof(num) + "<br>")
// document.writeln("Value:" + " " + newNum  + "<br>")
// document.writeln("Type:" + " " + typeof(newNum)  + "<br>")

// Question 10

// let sweet = prompt("Enter your favourite sweet.")

// document.writeln("Favourite Sweet:" + " " + sweet + "<br>")
// document.writeln("Updated Favourite Sweet:" + " " + sweet.toUpperCase())

// Question 11

// let language = prompt("Enter your favourite language.")

// document.writeln("User Language:" + " " + language + "<br>")
// document.writeln("Updated User Language:" + " " + language.charAt(0).toUpperCase() + language.slice(1))

// Question 12

// var num1 = 367.89
// var num2 = num1.toString()

// document.writeln("Number:" + " " + num1 + "<br>")
// document.writeln("Result:" + " " + num2.replace("." , ""))

// Question 13

// var userName = prompt("Enter your user name.?")
// var answer = false;

// for (var i = 0; i < userName.length; i++) {
//     var invalid = userName.charCodeAt(i)


//     if (invalid === 44 || invalid === 33 || invalid === 46 || invalid === 64) {
//         answer = true;
//     }
// }


// if (answer) {
//     alert("Please! Enter a valid username.")
// }
// else (alert("Username is valid"))

// Question 14

// var items = ["cake", "apple pie", "cookie", "chips", "patties"]

// var userChoice = prompt("Welcome to My Bakery. What you wanna order here?")
// var inSensitiveUserChoice = userChoice.toLowerCase()

// if (items.indexOf(inSensitiveUserChoice) !== -1) {
//     alert(inSensitiveUserChoice + " is available at index " + items.indexOf(inSensitiveUserChoice) + " in our bakery.")
// }
// else {
//     alert("We are sorry. " + inSensitiveUserChoice + " is not available in our bakery.")
// }

// Question 15

// let password = prompt("Enter your password:");
// let valid = true;

// // a
// for (let i = 0; i < password.length; i++) {
//     let code = password.charCodeAt(i);

//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) && (code >= 48 && code <= 57)) {
//         //hasLetter = true;
//         valid = false;
//     }
// }

// // b
// let firstCharCode = password.charCodeAt(0);
// if (firstCharCode >= 48 && firstCharCode <= 57) {
//     valid = false;
// }

// // c
// if (password.length < 6) {
//     valid = false;
// }

// if (valid) {
//     alert("Password accepted!");

// } else {
//     alert("Invalid password! \n Please Enter a Valid Password")
// }

// Question 16

// var line = "University of Karachi"
// var elements = line.split("")

// for (i = 0; i < elements.length; i++) {

//     document.writeln(elements[i] + "<br>")
// }

// Question 17

// let userGuess = prompt("Guess a word.")
// let charOfUserGuess = userGuess.charAt(userGuess.length -1)

// document.writeln("User Input:" + " " + userGuess + "<br>")
// document.writeln("Last Character of Input:" + " " + charOfUserGuess)

// Question 18

// let sentence = "The quick brown fox jumps over the lazy dog."
// sentence = sentence.toLowerCase()
// //   console.log(sentence)
// var count = 0

// for (i = 0; i < sentence.length; i++) {
//     //   console.log(i)
//     if (sentence.slice(i, i + 3) == "the") {
//         count++
//     }
// }
// document.writeln("Sentence:" + " " + sentence + "<br>")
// document.writeln("There are" + " " + count + " " + "occurence(s) of the word 'the'.")
