const selectQuiz = document.getElementById("choose_quiz");
const container = document.querySelector('.container');
let quizzes = document.querySelector('.quiz-board');
let createdQuiz = false;
let score = 0;
let tagAlong = [];
let mainIndex = 0;
let questionIn = false;
let questionlength = 10;
let mainQuizname = "";
let ansQuestion = 0;
let correctAnswer;
let questionState = [];
let skillLevel = "select level";
let questions = [];
let quizState;
let logicalQuizType = "Prepositional";
let logicalQuestions = [];
let unitScore;
let correctInput = 0;






let jsBeginner = {
    name: "JavaScript",
    level: "Beginner",
    description: "JavaScript is a programming language that allows you to add interactivity and dynamic content to web pages.",
    questions: [
        {
            question: "What is the result of the following expression: 10 % 3?",
            answers: [
                "1",
                "0",
                "3",
                "10"
            ],
            correctAns: 0
        },
        {
            question: "Which keyword is used to exit a loop in JavaScript?",
            answers: [
                "continue",
                "break",
                "exit",
                "return"
            ],
            correctAns: 1
        },
        {
            question: "What does the `typeof` operator return when applied to a function?",
            answers: [
                "function",
                "object",
                "undefined",
                "string"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `concat()` method in JavaScript arrays?",
            answers: [
                "To join two or more arrays",
                "To sort the elements of an array",
                "To add an element to the beginning of an array",
                "To reverse the order of an array"
            ],
            correctAns: 0
        },
        {
            question: "Which built-in method can be used to convert a number to a string in JavaScript?",
            answers: [
                "toString()",
                "convertToString()",
                "numberToString()",
                "toNumber()"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log(4 + '4' + 4);",
            answers: [
                "12",
                "444",
                "8",
                "44"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `parseFloat()` function in JavaScript?",
            answers: [
                "To convert a string to an integer",
                "To convert a string to a floating-point number",
                "To round a number to the nearest integer",
                "To determine if a value is NaN"
            ],
            correctAns: 1
        },
        {
            question: "Which operator is used for exponentiation in JavaScript?",
            answers: [
                "**",
                "^",
                "^^",
                "ex"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('2' + 2 * 3);",
            answers: [
                "8",
                "12",
                "26",
                "23"
            ],
            correctAns: 3
        },
        {
            question: "Which method is used to add elements to the beginning of an array in JavaScript?",
            answers: [
                "unshift()",
                "push()",
                "addFirst()",
                "prepend()"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Math.random()` function in JavaScript?",
            answers: [
                "To generate a random number between 0 and 1",
                "To round a number to the nearest integer",
                "To calculate the square root of a number",
                "To convert a number to a string"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: '10' == 10?",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `slice()` method in JavaScript arrays?",
            answers: [
                "To remove elements from an array",
                "To add elements to an array",
                "To extract a portion of an array",
                "To sort the elements of an array"
            ],
            correctAns: 2
        },
        {
            question: "What does the `isNaN()` function return when applied to a string?",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 1
        },
        {
            question: "What is the output of the following code? console.log(typeof NaN);",
            answers: [
                "number",
                "string",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "Which method is used to convert a string to a number in JavaScript?",
            answers: [
                "parseNumber()",
                "toInt()",
                "numberParse()",
                "parseInt()"
            ],
            correctAns: 3
        },
        {
            question: "What is the purpose of the `toUpperCase()` method in JavaScript?",
            answers: [
                "To convert a string to lowercase",
                "To convert a string to uppercase",
                "To trim leading and trailing spaces from a string",
                "To check if a string contains a substring"
            ],
            correctAns: 1
        },
        {
            question: "What is the output of the following code? console.log(typeof [1, 2, 3]);",
            answers: [
                "array",
                "object",
                "undefined",
                "NaN"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `decodeURI()` function in JavaScript?",
            answers: [
                "To encode a URI component",
                "To decode a URI component",
                "To encode a complete URI",
                "To decode a complete URI"
            ],
            correctAns: 1
        },
        {
            question: "Which method is used to convert a number to an integer in JavaScript?",
            answers: [
                "toInteger()",
                "toInt()",
                "convertToInt()",
                "parseInt()"
            ],
            correctAns: 3
        },
        {
            question: "What is the output of the following code? console.log(2 + '3' - 1);",
            answers: [
                "22",
                "4",
                "1",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `substring()` method in JavaScript?",
            answers: [
                "To remove characters from a string",
                "To add characters to a string",
                "To extract a portion of a string",
                "To split a string into an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the result of the following expression: 2 * '3' - '2'?",
            answers: [
                "1",
                "3",
                "4",
                "6"
            ],
            correctAns: 2
        },
        {
            question: "What does the `Array.isArray()` function return when applied to an array?",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `encodeURI()` function in JavaScript?",
            answers: [
                "To encode a URI component",
                "To decode a URI component",
                "To encode a complete URI",
                "To decode a complete URI"
            ],
            correctAns: 2
        },
        {
            question: "What is the output of the following code? console.log(5 > '3');",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `join()` method in JavaScript arrays?",
            answers: [
                "To add elements to an array",
                "To convert an array to a string",
                "To reverse the order of an array",
                "To sort the elements of an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the result of the following expression: 5 + '5' * 2?",
            answers: [
                "30",
                "55",
                "15",
                "525"
            ],
            correctAns: 3
        },
        {
            question: "Which method is used to remove the first element from an array in JavaScript?",
            answers: [
                "removeFirst()",
                "shift()",
                "deleteFirst()",
                "slice()"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `encodeURIComponent()` function in JavaScript?",
            answers: [
                "To encode a URI component",
                "To decode a URI component",
                "To encode a complete URI",
                "To decode a complete URI"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log(10 < '5');",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `map()` method in JavaScript arrays?",
            answers: [
                "To add elements to an array",
                "To convert an array to a string",
                "To modify each element of an array",
                "To reverse the order of an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the result of the following expression: '2' + '2' - 1?",
            answers: [
                "21",
                "3",
                "22",
                "NaN"
            ],
            correctAns: 2
        },
        {
            question: "Which operator is used for greater than or equal to comparison in JavaScript?",
            answers: [
                ">",
                "<=",
                ">=",
                "==="
            ],
            correctAns: 2
        },
        {
            question: "What is the output of the following code? console.log(Math.floor(3.8));",
            answers: [
                "3",
                "4",
                "3.8",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `toLowerCase()` method in JavaScript?",
            answers: [
                "To convert a string to lowercase",
                "To convert a string to uppercase",
                "To trim leading and trailing spaces from a string",
                "To check if a string contains a substring"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log(typeof Infinity);",
            answers: [
                "number",
                "string",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `parseInt()` function in JavaScript?",
            answers: [
                "To convert a string to an integer",
                "To convert a string to a floating-point number",
                "To round a number to the nearest integer",
                "To determine if a value is NaN"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: 2 + '3' + 4?",
            answers: [
                "27",
                "234",
                "9",
                "23"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Math.round()` function in JavaScript?",
            answers: [
                "To convert a number to a string",
                "To round a number to the nearest integer",
                "To calculate the square root of a number",
                "To determine if a value is NaN"
            ],
            correctAns: 1
        },
        {
            question: "Which method is used to check if a string ends with a specific substring in JavaScript?",
            answers: [
                "endsWith()",
                "startsWith()",
                "contains()",
                "includes()"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log(5 == '5');",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `toFixed()` method in JavaScript?",
            answers: [
                "To convert a number to a fixed-point representation",
                "To round a number to the nearest integer",
                "To calculate the square root of a number",
                "To determine if a value is NaN"
            ],
            correctAns: 0
        },
        {
            question: "Which operator is used for less than or equal to comparison in JavaScript?",
            answers: [
                "<",
                "<=",
                ">=",
                "==="
            ],
            correctAns: 1
        },
        {
            question: "What is the output of the following code? console.log(Number('10.5'));",
            answers: [
                "10.5",
                "10",
                "NaN",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `String.fromCharCode()` method in JavaScript?",
            answers: [
                "To convert a string to an array",
                "To create a new string from a sequence of Unicode values",
                "To convert a string to a number",
                "To check if a string contains a substring"
            ],
            correctAns: 1
        },
        {
            question: "What is the output of the following code? console.log(typeof null);",
            answers: [
                "null",
                "object",
                "undefined",
                "NaN"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `reverse()` method in JavaScript arrays?",
            answers: [
                "To remove elements from an array",
                "To add elements to an array",
                "To extract a portion of an array",
                "To reverse the order of an array"
            ],
            correctAns: 3
        },
        {
            question: "What is the result of the following expression: 3 + 2 * 4?",
            answers: [
                "20",
                "14",
                "11",
                "9"
            ],
            correctAns: 2
        },
        {
            question: "What does the `Array.prototype.length` property return for an empty array?",
            answers: [
                "0",
                "null",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Math.ceil()` function in JavaScript?",
            answers: [
                "To convert a number to a string",
                "To round a number to the nearest integer",
                "To calculate the square root of a number",
                "To determine if a value is NaN"
            ],
            correctAns: 1
        },
        {
            question: "Which method is used to check if a string contains a specific substring in JavaScript?",
            answers: [
                "endsWith()",
                "startsWith()",
                "contains()",
                "includes()"
            ],
            correctAns: 3
        },
        {
            question: "What is the output of the following code? console.log(Boolean('false'));",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        }
    ]
}
let jsIntermediate = {
    name: "JavaScript Intermediate",
    level: "Intermediate",
    description: "This quiz tests your intermediate-level knowledge of JavaScript.",
    questions: [
        {
            question: "What is the result of the following code? console.log(2 + '2');",
            answers: [
                "22",
                "4",
                "NaN",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `typeof` operator in JavaScript?",
            answers: [
                "To check if a value is null",
                "To determine the type of a value",
                "To convert a value to a string",
                "To check if a value is undefined"
            ],
            correctAns: 1
        },
        {
            question: "What does the `Array.prototype.push()` method do?",
            answers: [
                "Removes the last element from an array",
                "Adds one or more elements to the end of an array",
                "Sorts the elements of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the output of the following code? console.log(10 === '10');",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.pop()` method?",
            answers: [
                "Removes the first element from an array",
                "Adds one or more elements to the end of an array",
                "Removes the last element from an array",
                "Sorts the elements of an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the result of the following expression: 10 % 3?",
            answers: [
                "0",
                "1",
                "3",
                "10"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Math.random()` function in JavaScript?",
            answers: [
                "To generate a random number",
                "To round a number to the nearest integer",
                "To calculate the square root of a number",
                "To determine if a value is NaN"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('Hello, ' + 'World!');",
            answers: [
                "Hello, World!",
                "Hello,",
                "World!",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.splice()` method in JavaScript?",
            answers: [
                "To remove elements from an array",
                "To add elements to an array",
                "To extract a portion of an array",
                "To sort the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: '10' - 5?",
            answers: [
                "15",
                "10",
                "5",
                "NaN"
            ],
            correctAns: 1
        },
        {
            question: "What does the `Array.prototype.concat()` method do?",
            answers: [
                "Removes the first element from an array",
                "Adds one or more elements to the end of an array",
                "Combines two or more arrays into a new array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the output of the following code? console.log(2 * '3');",
            answers: [
                "6",
                "32",
                "NaN",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.slice()` method in JavaScript?",
            answers: [
                "To remove elements from an array",
                "To add elements to an array",
                "To extract a portion of an array",
                "To reverse the order of an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the result of the following expression: 10 / 0?",
            answers: [
                "0",
                "Infinity",
                "-Infinity",
                "NaN"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Math.pow()` function in JavaScript?",
            answers: [
                "To convert a number to a string",
                "To round a number to the nearest integer",
                "To calculate the power of a number",
                "To determine if a value is NaN"
            ],
            correctAns: 2
        },
        {
            question: "Which method is used to convert a string to lowercase in JavaScript?",
            answers: [
                "toUpperCase()",
                "toLowerCase()",
                "trim()",
                "charAt()"
            ],
            correctAns: 1
        },
        {
            question: "What is the output of the following code? console.log(Boolean(''));",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.reverse()` method in JavaScript?",
            answers: [
                "To remove elements from an array",
                "To add elements to an array",
                "To extract a portion of an array",
                "To reverse the order of the elements in an array"
            ],
            correctAns: 3
        },
        {
            question: "What is the result of the following expression: 2 ** 3?",
            answers: [
                "2",
                "6",
                "8",
                "16"
            ],
            correctAns: 2
        },
        {
            question: "What does the `Array.prototype.shift()` method do?",
            answers: [
                "Removes the last element from an array",
                "Adds one or more elements to the beginning of an array",
                "Removes the first element from an array",
                "Sorts the elements of an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the output of the following code? console.log(Math.max(10, 5, 8));",
            answers: [
                "10",
                "5",
                "8",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.unshift()` method in JavaScript?",
            answers: [
                "Removes the first element from an array",
                "Adds one or more elements to the beginning of an array",
                "Removes the last element from an array",
                "Sorts the elements of an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the result of the following expression: 10 / 'two'?",
            answers: [
                "5",
                "10",
                "NaN",
                "undefined"
            ],
            correctAns: 2
        },
        {
            question: "What is the purpose of the `Math.floor()` function in JavaScript?",
            answers: [
                "To convert a number to a string",
                "To round a number to the nearest integer",
                "To calculate the square root of a number",
                "To determine if a value is NaN"
            ],
            correctAns: 1
        },
        {
            question: "Which method is used to convert a string to uppercase in JavaScript?",
            answers: [
                "toUpperCase()",
                "toLowerCase()",
                "trim()",
                "charAt()"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('Hello'.charAt(0));",
            answers: [
                "Hello",
                "H",
                "e",
                "undefined"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.join()` method in JavaScript?",
            answers: [
                "To remove elements from an array",
                "To add elements to an array",
                "To combine the elements of an array into a string",
                "To reverse the order of the elements in an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the result of the following expression: '10' + 5?",
            answers: [
                "105",
                "15",
                "NaN",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What does the `Array.prototype.map()` method do?",
            answers: [
                "Removes elements from an array based on a condition",
                "Creates a new array with the results of calling a function on every element in the array",
                "Sorts the elements of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the output of the following code? console.log(parseFloat('10.5'));",
            answers: [
                "10.5",
                "10",
                "NaN",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.filter()` method in JavaScript?",
            answers: [
                "Removes elements from an array based on a condition",
                "Adds elements to an array",
                "Extracts a portion of an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: Math.sqrt(16);",
            answers: [
                "4",
                "16",
                "NaN",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `parseFloat()` function in JavaScript?",
            answers: [
                "To convert a number to a string",
                "To round a number to the nearest integer",
                "To convert a string to a floating-point number",
                "To determine if a value is NaN"
            ],
            correctAns: 2
        },
        {
            question: "Which method is used to check if a string starts with a specific substring in JavaScript?",
            answers: [
                "endsWith()",
                "startsWith()",
                "contains()",
                "includes()"
            ],
            correctAns: 1
        },
        {
            question: "What is the output of the following code? console.log(Number('10'));",
            answers: [
                "10",
                "NaN",
                "undefined",
                "TypeError"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.reduce()` method in JavaScript?",
            answers: [
                "Removes elements from an array based on a condition",
                "Adds elements to an array",
                "Reduces the elements of an array to a single value",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the result of the following expression: 'Hello'.length?",
            answers: [
                "Hello",
                "5",
                "undefined",
                "NaN"
            ],
            correctAns: 1
        },
        {
            question: "What does the `Array.prototype.some()` method do?",
            answers: [
                "Checks if all elements in an array pass a test",
                "Checks if at least one element in an array passes a test",
                "Sorts the elements of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the output of the following code? console.log(10.toString());",
            answers: [
                "10",
                "NaN",
                "undefined",
                "SyntaxError"
            ],
            correctAns: 3
        },
        {
            question: "What is the purpose of the `Array.prototype.every()` method in JavaScript?",
            answers: [
                "Checks if all elements in an array pass a test",
                "Checks if at least one element in an array passes a test",
                "Adds elements to an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: Math.abs(-10)?",
            answers: [
                "-10",
                "10",
                "-1",
                "1"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `parseInt()` function in JavaScript?",
            answers: [
                "To convert a number to a string",
                "To round a number to the nearest integer",
                "To convert a string to an integer",
                "To determine if a value is NaN"
            ],
            correctAns: 2
        },
        {
            question: "Which method is used to check if a string contains a specific substring in JavaScript?",
            answers: [
                "endsWith()",
                "startsWith()",
                "contains()",
                "includes()"
            ],
            correctAns: 3
        },
        {
            question: "What is the output of the following code? console.log(Boolean('false'));",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.indexOf()` method in JavaScript?",
            answers: [
                "Removes elements from an array",
                "Adds elements to an array",
                "Finds the index of the first occurrence of an element in an array",
                "Sorts the elements of an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the result of the following expression: Math.log(1)?",
            answers: [
                "0",
                "1",
                "NaN",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What does the `Array.prototype.find()` method do?",
            answers: [
                "Finds the first element in an array that passes a test",
                "Finds the index of the first occurrence of an element in an array",
                "Sorts the elements of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log(typeof null);",
            answers: [
                "null",
                "object",
                "undefined",
                "NaN"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.findIndex()` method in JavaScript?",
            answers: [
                "Finds the index of the first occurrence of an element in an array",
                "Finds the index of the last occurrence of an element in an array",
                "Finds the index of an element in an array based on a test",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the result of the following expression: Math.ceil(4.2)?",
            answers: [
                "4",
                "5",
                "4.2",
                "undefined"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.includes()` method in JavaScript?",
            answers: [
                "Checks if all elements in an array pass a test",
                "Checks if at least one element in an array passes a test",
                "Checks if an array contains a specific element",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the output of the following code? console.log(typeof NaN);",
            answers: [
                "number",
                "NaN",
                "undefined",
                "TypeError"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.lastIndexOf()` method in JavaScript?",
            answers: [
                "Finds the index of the first occurrence of an element in an array",
                "Finds the index of the last occurrence of an element in an array",
                "Finds the index of an element in an array based on a test",
                "Sorts the elements of an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the result of the following expression: Math.round(4.5)?",
            answers: [
                "4",
                "5",
                "4.5",
                "undefined"
            ],
            correctAns: 1
        },
        {
            question: "What does the `Array.prototype.reduceRight()` method do?",
            answers: [
                "Reduces the elements of an array from right to left",
                "Reduces the elements of an array from left to right",
                "Adds elements to an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log(parseInt('10', 2));",
            answers: [
                "10",
                "2",
                "NaN",
                "undefined"
            ],
            correctAns: 2
        },
        {
            question: "What is the purpose of the `Array.prototype.forEach()` method in JavaScript?",
            answers: [
                "Loops over the elements of an array and performs a function on each element",
                "Creates a new array with the results of calling a function on every element in the array",
                "Checks if all elements in an array pass a test",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: Math.random()?",
            answers: [
                "0",
                "1",
                "A random number between 0 and 1",
                "undefined"
            ],
            correctAns: 2
        },
        {
            question: "What is the purpose of the `Array.prototype.sort()` method in JavaScript?",
            answers: [
                "Removes elements from an array",
                "Adds elements to an array",
                "Sorts the elements of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the output of the following code? console.log(typeof undefined);",
            answers: [
                "null",
                "undefined",
                "object",
                "TypeError"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.splice()` method in JavaScript?",
            answers: [
                "To remove elements from an array",
                "To add elements to an array",
                "To extract a portion of an array",
                "To reverse the order of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: typeof 42?",
            answers: [
                "number",
                "NaN",
                "undefined",
                "TypeError"
            ],
            correctAns: 0
        },
        {
            question: "What does the `Array.prototype.concat()` method do?",
            answers: [
                "Concatenates two or more arrays",
                "Removes elements from an array",
                "Extracts a portion of an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('Hello'.toUpperCase());",
            answers: [
                "Hello",
                "hello",
                "HELLO",
                "undefined"
            ],
            correctAns: 2
        },
        {
            question: "What is the purpose of the `Array.prototype.slice()` method in JavaScript?",
            answers: [
                "To remove elements from an array",
                "To add elements to an array",
                "To extract a portion of an array",
                "To reverse the order of an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the result of the following expression: Math.pow(2, 3)?",
            answers: [
                "2",
                "6",
                "8",
                "16"
            ],
            correctAns: 2
        },
        {
            question: "What does the `Array.prototype.shift()` method do?",
            answers: [
                "Removes the last element from an array",
                "Adds one or more elements to the beginning of an array",
                "Removes the first element from an array",
                "Sorts the elements of an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the output of the following code? console.log(Math.max(10, 5, 8));",
            answers: [
                "10",
                "5",
                "8",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.unshift()` method in JavaScript?",
            answers: [
                "Removes the last element from an array",
                "Adds one or more elements to the beginning of an array",
                "Removes the first element from an array",
                "Sorts the elements of an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the result of the following expression: Math.min(10, 5, 8)?",
            answers: [
                "10",
                "5",
                "8",
                "undefined"
            ],
            correctAns: 1
        },
        {
            question: "What does the `Array.prototype.reverse()` method do?",
            answers: [
                "Reverses the order of the elements in an array",
                "Adds one or more elements to the beginning of an array",
                "Removes the first element from an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log(typeof NaN);",
            answers: [
                "number",
                "NaN",
                "undefined",
                "TypeError"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.pop()` method in JavaScript?",
            answers: [
                "Removes the last element from an array",
                "Adds one or more elements to the beginning of an array",
                "Removes the first element from an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: 'Hello, World!'.split(', ')?",
            answers: [
                "['Hello', 'World!']",
                "['Hello,', 'World!']",
                "['Hello', 'World']",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What does the `Array.prototype.join()` method do?",
            answers: [
                "Combines the elements of an array into a string",
                "Removes elements from an array",
                "Adds elements to an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('Hello'.charAt(0));",
            answers: [
                "Hello",
                "H",
                "e",
                "undefined"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.filter()` method in JavaScript?",
            answers: [
                "Removes elements from an array based on a condition",
                "Adds elements to an array",
                "Extracts a portion of an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: Math.sqrt(16);",
            answers: [
                "4",
                "16",
                "NaN",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `parseFloat()` function in JavaScript?",
            answers: [
                "To convert a number to a string",
                "To round a number to the nearest integer",
                "To convert a string to a floating-point number",
                "To determine if a value is NaN"
            ],
            correctAns: 2
        },
        {
            question: "What does the `Array.prototype.map()` method do?",
            answers: [
                "Creates a new array with the results of calling a function on every element in the array",
                "Checks if all elements in an array pass a test",
                "Extracts a portion of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('Hello'.substring(1, 3));",
            answers: [
                "H",
                "e",
                "el",
                "undefined"
            ],
            correctAns: 2
        },
        {
            question: "What is the purpose of the `Array.prototype.fill()` method in JavaScript?",
            answers: [
                "Fills an array with a static value",
                "Removes elements from an array",
                "Adds elements to an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: Math.floor(4.8)?",
            answers: [
                "4",
                "5",
                "4.8",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `parseInt()` function in JavaScript?",
            answers: [
                "To convert a number to a string",
                "To round a number to the nearest integer",
                "To convert a string to an integer",
                "To determine if a value is NaN"
            ],
            correctAns: 2
        },
        {
            question: "What does the `Array.prototype.indexOf()` method do?",
            answers: [
                "Finds the index of the first occurrence of an element in an array",
                "Finds the index of the last occurrence of an element in an array",
                "Finds the index of an element in an array based on a test",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: Math.abs(-10)?",
            answers: [
                "-10",
                "10",
                "-1",
                "1"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.concat()` method in JavaScript?",
            answers: [
                "Concatenates two or more arrays",
                "Removes elements from an array",
                "Extracts a portion of an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log(Boolean('false'));",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "What does the `Array.prototype.some()` method do?",
            answers: [
                "Checks if all elements in an array pass a test",
                "Checks if at least one element in an array passes a test",
                "Sorts the elements of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.every()` method in JavaScript?",
            answers: [
                "Checks if all elements in an array pass a test",
                "Checks if at least one element in an array passes a test",
                "Sorts the elements of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: Math.log(1)?",
            answers: [
                "0",
                "1",
                "Infinity",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.reduce()` method in JavaScript?",
            answers: [
                "Reduces the elements of an array to a single value",
                "Reduces the elements of an array from right to left",
                "Adds elements to an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('Hello'.length);",
            answers: [
                "Hello",
                "5",
                "undefined",
                "NaN"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.join()` method in JavaScript?",
            answers: [
                "Combines the elements of an array into a string",
                "Removes elements from an array",
                "Adds elements to an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: 'Hello, World!'.indexOf('o')?",
            answers: [
                "0",
                "4",
                "7",
                "-1"
            ],
            correctAns: 1
        },
        {
            question: "What does the `Array.prototype.includes()` method do?",
            answers: [
                "Checks if all elements in an array pass a test",
                "Checks if at least one element in an array passes a test",
                "Checks if an array contains a specific element",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the purpose of the `Array.prototype.lastIndexOf()` method in JavaScript?",
            answers: [
                "Finds the index of the first occurrence of an element in an array",
                "Finds the index of the last occurrence of an element in an array",
                "Finds the index of an element in an array based on a test",
                "Sorts the elements of an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the result of the following expression: Math.round(4.5)?",
            answers: [
                "4",
                "5",
                "4.5",
                "undefined"
            ],
            correctAns: 1
        },
        {
            question: "What does the `Array.prototype.reduceRight()` method do?",
            answers: [
                "Reduces the elements of an array from right to left",
                "Reduces the elements of an array from left to right",
                "Adds elements to an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log(parseInt('10', 2));",
            answers: [
                "10",
                "2",
                "NaN",
                "undefined"
            ],
            correctAns: 2
        },
        {
            question: "What is the purpose of the `Array.prototype.forEach()` method in JavaScript?",
            answers: [
                "Loops over the elements of an array and performs a function on each element",
                "Creates a new array with the results of calling a function on every element in the array",
                "Checks if all elements in an array pass a test",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: Math.random()?",
            answers: [
                "0",
                "1",
                "A random number between 0 and 1",
                "undefined"
            ],
            correctAns: 2
        },
        {
            question: "What is the purpose of the `Array.prototype.sort()` method in JavaScript?",
            answers: [
                "Removes elements from an array",
                "Adds elements to an array",
                "Sorts the elements of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the output of the following code? console.log(typeof undefined);",
            answers: [
                "null",
                "undefined",
                "object",
                "TypeError"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.splice()` method in JavaScript?",
            answers: [
                "To remove elements from an array",
                "To add elements to an array",
                "To extract a portion of an array",
                "To reverse the order of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: typeof 42?",
            answers: [
                "number",
                "NaN",
                "undefined",
                "TypeError"
            ],
            correctAns: 0
        },
        {
            question: "What does the `Array.prototype.concat()` method do?",
            answers: [
                "Concatenates two or more arrays",
                "Removes elements from an array",
                "Extracts a portion of an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('Hello'.toUpperCase());",
            answers: [
                "Hello",
                "hello",
                "HELLO",
                "undefined"
            ],
            correctAns: 2
        },
        {
            question: "What is the purpose of the `Array.prototype.slice()` method in JavaScript?",
            answers: [
                "To remove elements from an array",
                "To add elements to an array",
                "To extract a portion of an array",
                "To reverse the order of an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the result of the following expression: Math.pow(2, 3)?",
            answers: [
                "2",
                "6",
                "8",
                "16"
            ],
            correctAns: 2
        },
        {
            question: "What does the `Array.prototype.shift()` method do?",
            answers: [
                "Removes the last element from an array",
                "Adds one or more elements to the beginning of an array",
                "Removes the first element from an array",
                "Sorts the elements of an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the output of the following code? console.log(Math.max(10, 5, 8));",
            answers: [
                "10",
                "5",
                "8",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.unshift()` method in JavaScript?",
            answers: [
                "Removes the last element from an array",
                "Adds one or more elements to the beginning of an array",
                "Removes the first element from an array",
                "Sorts the elements of an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the result of the following expression: Math.min(10, 5, 8)?",
            answers: [
                "10",
                "5",
                "8",
                "undefined"
            ],
            correctAns: 1
        },
        {
            question: "What does the `Array.prototype.reverse()` method do?",
            answers: [
                "Reverses the order of the elements in an array",
                "Adds one or more elements to the beginning of an array",
                "Removes the first element from an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log(typeof NaN);",
            answers: [
                "number",
                "NaN",
                "undefined",
                "TypeError"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `Array.prototype.pop()` method in JavaScript?",
            answers: [
                "Removes the last element from an array",
                "Adds one or more elements to the beginning of an array",
                "Removes the first element from an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: 'Hello, World!'.split(', ')?",
            answers: [
                "['Hello', 'World!']",
                "['Hello,', 'World!']",
                "['Hello', 'World']",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What does the `Array.prototype.join()` method do?",
            answers: [
                "Combines the elements of an array into a string",
                "Removes elements from an array",
                "Adds elements to an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('Hello'.charAt(0));",
            answers: [
                "Hello",
                "H",
                "e",
                "undefined"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.filter()` method in JavaScript?",
            answers: [
                "Removes elements from an array based on a condition",
                "Adds elements to an array",
                "Extracts a portion of an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: Math.sqrt(16);",
            answers: [
                "4",
                "16",
                "NaN",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `parseFloat()` function in JavaScript?",
            answers: [
                "To convert a number to a string",
                "To round a number to the nearest integer",
                "To convert a string to a floating-point number",
                "To determine if a value is NaN"
            ],
            correctAns: 2
        },
        {
            question: "What does the `Array.prototype.map()` method do?",
            answers: [
                "Creates a new array with the results of calling a function on every element in the array",
                "Checks if all elements in an array pass a test",
                "Extracts a portion of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('Hello'.substring(1, 3));",
            answers: [
                "H",
                "e",
                "el",
                "undefined"
            ],
            correctAns: 2
        },
        {
            question: "What is the purpose of the `Array.prototype.fill()` method in JavaScript?",
            answers: [
                "Fills an array with a static value",
                "Removes elements from an array",
                "Adds elements to an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: Math.floor(4.8)?",
            answers: [
                "4",
                "5",
                "4.8",
                "undefined"
            ],
            correctAns: 0
        },
        {
            question: "What is the purpose of the `parseInt()` function in JavaScript?",
            answers: [
                "To convert a number to a string",
                "To round a number to the nearest integer",
                "To convert a string to an integer",
                "To determine if a value is NaN"
            ],
            correctAns: 2
        },
        {
            question: "What does the `Array.prototype.indexOf()` method do?",
            answers: [
                "Finds the index of the first occurrence of an element in an array",
                "Finds the index of the last occurrence of an element in an array",
                "Finds the index of an element in an array based on a test",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: Math.abs(-10)?",
            answers: [
                "-10",
                "10",
                "-1",
                "1"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.concat()` method in JavaScript?",
            answers: [
                "Concatenates two or more arrays",
                "Removes elements from an array",
                "Extracts a portion of an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log(Boolean('false'));",
            answers: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAns: 0
        },
        {
            question: "What does the `Array.prototype.some()` method do?",
            answers: [
                "Checks if all elements in an array pass a test",
                "Checks if at least one element in an array passes a test",
                "Sorts the elements of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.every()` method in JavaScript?",
            answers: [
                "Checks if all elements in an array pass a test",
                "Checks if at least one element in an array passes a test",
                "Sorts the elements of an array",
                "Reverses the order of the elements in an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('Hello'.toLowerCase());",
            answers: [
                "Hello",
                "hello",
                "HELLO",
                "undefined"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.findIndex()` method in JavaScript?",
            answers: [
                "Finds the index of the first occurrence of an element in an array",
                "Finds the index of the last occurrence of an element in an array",
                "Finds the index of an element in an array based on a test",
                "Sorts the elements of an array"
            ],
            correctAns: 2
        },
        {
            question: "What is the result of the following expression: Math.ceil(4.2)?",
            answers: [
                "4",
                "5",
                "4.2",
                "undefined"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.lastIndexOf()` method in JavaScript?",
            answers: [
                "Finds the index of the first occurrence of an element in an array",
                "Finds the index of the last occurrence of an element in an array",
                "Finds the index of an element in an array based on a test",
                "Sorts the elements of an array"
            ],
            correctAns: 1
        },
        {
            question: "What is the output of the following code? console.log('Hello'.substring(1));",
            answers: [
                "H",
                "e",
                "ello",
                "undefined"
            ],
            correctAns: 2
        },
        {
            question: "What does the `Array.prototype.reduce()` method do?",
            answers: [
                "Reduces the elements of an array to a single value",
                "Reduces the elements of an array from right to left",
                "Adds elements to an array",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the result of the following expression: 'Hello, World!'.indexOf('o')?",
            answers: [
                "0",
                "4",
                "7",
                "-1"
            ],
            correctAns: 1
        },
        {
            question: "What is the purpose of the `Array.prototype.forEach()` method in JavaScript?",
            answers: [
                "Loops over the elements of an array and performs a function on each element",
                "Creates a new array with the results of calling a function on every element in the array",
                "Checks if all elements in an array pass a test",
                "Sorts the elements of an array"
            ],
            correctAns: 0
        },
        {
            question: "What is the output of the following code? console.log('Hello'.length);",
            answers: [
                "Hello",
                "5",
                "undefined",
                "NaN"
            ],
            correctAns: 1
        }
    ]
}
let jsExpert = {
    name: "JavaScript",
    level: "Expert",
    description: "Test your advanced JavaScript knowledge.",
    questions: [
        {
            question: "What is the result of the following code: typeof null;",
            answers: [
                "object",
                "null",
                "undefined",
                "string"
            ],
            correctIndex: 0
        },
        {
            question: "What is the difference between 'undefined' and 'null'?",
            answers: [
                "Undefined means a variable has been declared but has not yet been assigned a value, while null is an assignment value that represents no value or an empty value.",
                "Undefined is a type in JavaScript, while null is not a type.",
                "Undefined is a string, while null is a number.",
                "Undefined means a variable has not been declared, while null means a variable has been declared but has no value."
            ],
            correctIndex: 0
        },
        {
            question: "What is the output of the following code: console.log(1 + '1' - 1);",
            answers: [
                "10",
                "11",
                "01",
                "NaN"
            ],
            correctIndex: 1
        },
        // Add more questions here...
    ]
}



endQuiz = () => {
    container.innerHTML = "";
    container.innerHTML = `
        <div class="endBoard">
            <div class="endScreen">
            <span class="data"> <span class="ratingsMaker">Correct Answers:</span> ${correctInput}</span>
            <span class="data"> <span class="ratingsMaker">Score:</span> ${score}</span>
            <span class="data"> <span class="ratingsMaker">Wrong Answers:</span> ${questionlength - correctInput}</span>
            <button class="retry">Retry</button>
            </div>
        </div>
    `;
}
getQuizes = () => {
    // console.log('Morning Charlie');

    if (mainQuizname == 'Javascript') {

        if (skillLevel === 'Beginner') {
            quizState = jsBeginner;
            startQuiz(quizState, questionlength);
        }
        else if (skillLevel === 'Intermediate') {
            quizState = jsIntermediate;
            startQuiz(quizState, questionlength);

        }
        else if (skillLevel === 'Expert') {
            quizState = jsExpert;
            startQuiz(quizState, questionlength);

        }

    } else if (mainQuizname === 'Logic') {
        if(logicalQuizType === 'Prepositional'){
            prepositionalLogic();
        }
        else if(logicalQuizType === 'Predicate'){
            predicateLogic();
        }
        predicateLogic();
        logicalAlter(quizState)
        // quizState = questions;

        startQuiz();
    }
};
updateStats = () => {
    let questionDisplay = document.querySelector('.questionCount');
    questionDisplay.innerHTML = `Question: ${ansQuestion} / ${questionlength}`;
    calculateScore();
};

validateAnswer = (answer, target) => {
    if (questionIn === true) return;

    if (answer === correctAnswer) {
        target.classList.add('correctAnswer');
        score = score + 10;
        correctInput++;
    }
    else {
        target.classList.add('wrongAnswer');
        score = score;
    }
    questionIn = true;
    ansQuestion = ansQuestion + 1;

    if(ansQuestion === 10){
        endQuiz();
    }

    updateStats();
};
createQuizPage = () => {
    createdQuiz = false;
    container.innerHTML = "";
    let quizBoard = document.createElement('div');
    quizBoard.setAttribute('class', 'quiz-board');
    quizBoard.innerHTML = `
    <div class="quiz">Javascript</div>
    <div class="quiz">Logic</div>
    <div class="quiz">HTML</div>
    <div class="quiz">C Programming</div>
    <button class="switchQuiz retry">Home</button>
    `
    container.append(quizBoard);

};
logicalQuestion = () => {
    
    let ansDisplay = document.querySelector('.answerDisplay');
    let questionDisplay = document.querySelector('.questionDisplay');
    questionDisplay.innerHTML = "";
    ansDisplay.innerHTML = "";

    let length;
    let correctIndex;

        correctIndex = questionState[mainIndex].correctAnswerIndex;
        length = questionState[mainIndex].answer.length;
        correctAnswer = questionState[mainIndex].answer[correctIndex];

        for (let index = 0; index < length; index++) {
            let answer = document.createElement('div');
            answer.setAttribute('class', 'answer');
            answer.innerHTML = `${questionState[mainIndex].answer[index]}`;
            ansDisplay.appendChild(answer);
        }
    

    
    questionDisplay.innerHTML = `${questionState[mainIndex].question}`;
    let nextButton = document.createElement('button');
    nextButton.setAttribute('class', 'next');
    nextButton.textContent = 'Next';
    ansDisplay.appendChild(nextButton);

    questionIn = false;
    mainIndex++;

}
startQuiz = (quizname, totalQuestion) => {
    // let randomIndex = Math.floor(Math.random() * quizname.questions.length);
    // for (let i = 0; i < totalQuestion.length; i++){
    //     // if(indexOf(randomIndex === -1)) return;
    //     tagAlong.push(randomIndex);
    //     questionState.push(quizname[randomIndex]);
    // }
    // mainQuizname = quizname;
    // console.log('Let start Quiz');
    container.innerHTML = `
        <div class="quizPage">
        <header class="hud">
        <div class="score">Score: 0</div>
        <div class="questionCount">Question: 0/0</div>
        </header>
        <div class="quizBody">
        <p class="questionDisplay"></p>
        <div class="answerDisplay">
        </div>
        </div>
        </div>
        <button class="switchQuiz">Back</button>
    `;
    updateStats();

    if(mainQuizname === 'Javascript') {
    updateQuestion(quizState);
    } else if (mainQuizname === 'Logic') {
        logicalQuestion();
    }

}
updateQuestion = (quizname) => {
    let ansDisplay = document.querySelector('.answerDisplay');
    let questionDisplay = document.querySelector('.questionDisplay');
    let length;
    questionDisplay.innerHTML = "";
    ansDisplay.innerHTML = "";

    let correctIndex;

        correctIndex = quizname.questions[mainIndex].correctAns;
        length = quizname.questions[mainIndex].answers.length;
        correctAnswer = quizname.questions[mainIndex].answers[correctIndex];

        for (let index = 0; index < length; index++) {
            let answer = document.createElement('div');
            answer.setAttribute('class', 'answer');
            answer.innerHTML = `${quizname.questions[mainIndex].answers[index]}`;
            ansDisplay.appendChild(answer);
        }
    

    
    questionDisplay.innerHTML = `${quizname.questions[mainIndex].question}`;
    let nextButton = document.createElement('button');
    nextButton.setAttribute('class', 'next');
    nextButton.textContent = 'Next';
    ansDisplay.appendChild(nextButton);

    questionIn = false;
    mainIndex++;
}

calculateScore = () => {
    let displayScore = document.querySelector('.score');

    let points = ansQuestion * 10;
    unitScore = (((questionlength * 10) / points) * 100);
    // unitScore = unitScore / 100;
    displayScore.innerHTML = `Score: ${score}`;

    // console.log(unitScore);
};

levelSelector = () => {

    container.innerHTML = `<div class="quizLogo logoBack">${mainQuizname}</div>
    <div class="close" onclick="createQuizPage()">Close Quiz</div>  
    <div class="info">
    <div class="levels">
            
    
        <div class="skillLevel"><span class="marker">Level: </span> ${skillLevel}
        <div class="lDropdown">
            <span class="level">Beginner</span>
            <span class="level">Intermediate</span>
            <span class="level">Expert</span>
        </div>
        </div>
    
    
        <div class="totalquestion"><span class="marker">Total Question:</span>  ${questionlength}
        <div class="qDropdown">
            <span class="questionlength">10</span>
            <span class="questionlength">25</span>
            <span class="questionlength">50</span>
            <span class="questionlength">100</span>
        </div>
        </div>
    </div>
    
    
        
        <div class="description">${jsBeginner.description}</div>
        <button id="start" class="start">Start Quiz</button>
    </div>
    `
    createdQuiz = true;

};

logicalAlter = () => {

    container.innerHTML = `<div class="quizLogo logoBack">${mainQuizname}</div>
    <div class="close" onclick="createQuizPage()">Close Quiz</div>  
    <div class="info">
    <div class="levels">
            
    
        <div class="skillLevel"><span class="marker">Type: </span> ${logicalQuizType}
        <div class="lDropdown">
            <span class="level">Prepositional</span>
            <span class="level">Predicate</span>
        </div>
        
        </div>
    
    
        <div class="totalquestion"><span class="marker">Total Question:</span>  ${questionlength}
        <div class="qDropdown">
            <span class="questionlength">10</span>
            <span class="questionlength">25</span>
            <span class="questionlength">50</span>
            <span class="questionlength">100</span>
        </div>
        </div>
    </div>
    
    
        
        // <div class="description">Description</div>
        <button id="start" class="start">Start Quiz</button>
    </div>
    `
}
selectQuiz.addEventListener('click', (e) => {
    getQuizes();
    container.innerHTML = '';
    createQuizPage();
})

container.addEventListener('click', (e) => {
    let qDropDown = document.querySelector('.qDropdown');
    let lDropDown = document.querySelector('.lDropdown');
    let QuizEle = e.target;
    let quizName = e.target.textContent;



    if (QuizEle.classList.contains('level')) {
        skillLevel = quizName;

        lDropDown.classList.toggle('chooseQuestion');
        if(mainQuizname == 'Logic'){
            logicalQuizType = quizName;
            logicalAlter();
        }else {
        levelSelector();
        }
    } else if (QuizEle.classList.contains('questionlength')) {
        questionlength = QuizEle.textContent;
        qDropDown.classList.toggle('chooseQuestion');
        if(mainQuizname == 'Logic'){
            logicalAlter();
        }else {
        levelSelector();
        }
    } else if (QuizEle.classList.contains('totalquestion')) {
        qDropDown.classList.toggle('chooseQuestion');
    } else if (QuizEle.classList.contains('skillLevel')) {
        lDropDown.classList.toggle('chooseQuestion');
    } else if (e.target.classList.contains('answer')) {
        validateAnswer(quizName, QuizEle);
    } else if (e.target.classList.contains('start')) {
        getQuizes(quizName, QuizEle);
    }else if (QuizEle.classList.contains('retry')){
        location.reload();
    } else if (e.target.classList.contains('next')){
    if (questionIn === false && createdQuiz === true) return;

        if(mainQuizname == 'Logic'){
            logicalQuestion();
        }else {
        updateQuestion(quizState);
        
        }
    }else if (QuizEle.classList.contains('switchQuiz')){
    createQuizPage();        
    }
    

    if (createdQuiz === true) return;

    if (!e.target.classList.contains('quiz')) return;

    if(e.target.innerHTML === 'Logic') {
        logicalAlter();
    } else {
    levelSelector();
    }
    mainQuizname = quizName;

})

updateChoices = () => {
    let level = document.querySelector('.')
};

// Logically Creating Logical Quiz

// Prepositional Logic
prepositionalRandomExpression = () => {
    // Define the variables to be used in the expression
    let variables = ["P", "Q", "R", "S", "T"];

    // Randomly select the number of variables to include in the expression
    let numVariables = Math.floor(Math.random() * (variables.length - 1)) + 2;

    // Randomly select variables to include in the expression
    let selectedVariables = variables.sort(() => Math.random() - 0.5).slice(0, numVariables);

    // Generate the expression using the selected variables and logical operators
    let expression = selectedVariables[0];
    for (let i = 1; i < numVariables; i++) {
        let operator = Math.random() < 0.5 ? "∧" : "∨";
        expression += ` ${operator} ${selectedVariables[i]}`;
    }

    return expression;
}

prepositionalAnswerOptions = () => {
    let options = ["True", "False", "Cannot be determined", "None of the above"];
    return options;
}

prepositionalLogic = () => {

    for (let i = 0; i < questionlength; i++) {
        let question = {
            question: prepositionalRandomExpression(),
            answer: prepositionalAnswerOptions(),
            correctAnswerIndex: Math.floor(Math.random() * 4)
        };

        questionState.push(question);
    }
};

// Predicate Logic


// Function to generate a random predicate logic statement
function predicateRandomStatement() {
  let predicates = ["P(x)", "Q(x)", "R(x)", "S(x)", "T(x)"];
  let quantifiers = ["∀", "∃"];
  let connectors = ["∧", "∨", "→", "↔"];
  let statement = "";

  let numPredicates = Math.floor(Math.random() * (predicates.length - 1)) + 2;
  let selectedPredicates = predicates.sort(() => Math.random() - 0.5).slice(0, numPredicates);

  for (let i = 0; i < numPredicates; i++) {
    let quantifier = quantifiers[Math.floor(Math.random() * quantifiers.length)];
    let predicate = selectedPredicates[i];
    let connector = connectors[Math.floor(Math.random() * connectors.length)];

    if (i > 0) {
      statement += ` ${connector} `;
    }

    statement += `${quantifier}${predicate}`;
  }

  return statement;
}

// Function to generate predicate statement answer options
function predicateAnswerOptions() {
  let options = ["True", "False", "Cannot be determined", "None of the above"];
  return options.sort(() => Math.random() - 0.5);
}

predicateLogic = () => {

    for (let i = 0; i < questionlength; i++) {
        let question = {
            question: predicateRandomStatement(),
            answer: predicateAnswerOptions(),
            correctAnswerIndex: Math.floor(Math.random() * 4)
        };

        questionState.push(question);
    }
};








