let quiz =
    [
        {
      name: "", // Language Name
      level: "", // Quiz Level
      
      description: "", // Quiz Description
      questions: [
        {
          question: "", // Question
          answers: [
            " ", // Correct Answer
            " ", // False Answer
            " ", // Throwoff Answer
            " "   // Throwoff Answer
          ],
          correctAnswerIndex: 0// Correct Answer Index;
        }
      ]
    }]


// Prepositional Logic
    let questions = [];

for (let i = 0; i < 100; i++) {
  let question = {
    question: generateRandomExpression(),
    answer: generateAnswerOptions(),
    correctAnswerIndex: Math.floor(Math.random() * 4)
  };

  questions.push(question);
}

// Function to generate a random expression
function generateRandomExpression() {
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

// Function to generate answer options
function generateAnswerOptions() {
  let options = ["True", "False", "Cannot be determined", "None of the above"];
  return options;
}

// Accessing and displaying the questions
for (let i = 0; i < questions.length; i++) {
  const currentQuestion = questions[i];
  console.log(`Question ${i + 1}: ${currentQuestion.question}`);
  console.log("Answer options:", currentQuestion.answer.join(", "));
  console.log("Correct answer:", currentQuestion.answer[currentQuestion.correctAnswerIndex]);
  console.log("\n");
}

// Predicate Logic

let puestions = [];

for (let i = 0; i < 100; i++) {
  let question = {
    question: generateRandomStatement(),
    answer: generateAnswerOptions(),
    correctAnswerIndex: Math.floor(Math.random() * 4)
  };

  questions.push(question);
}

// Function to generate a random predicate logic statement
function generateRandomStatement() {
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

// Function to generate answer options
function generateAnswerOptions() {
  let options = ["True", "False", "Cannot be determined", "None of the above"];
  return options.sort(() => Math.random() - 0.5);
}

// Accessing and displaying the questions
for (let i = 0; i < questions.length; i++) {
  const currentQuestion = questions[i];
  console.log(`Question ${i + 1}: ${currentQuestion.question}`);
  console.log("Answer options:", currentQuestion.answer.join(", "));
  console.log("Correct answer:", currentQuestion.answer[currentQuestion.correctAnswerIndex]);
  console.log("\n");
}

  