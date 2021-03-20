/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
function buildQuiz() {
// we'll need a place to store the HTML output
const output = [];

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for (letter in currentQuestion.answers) {
// ...add an HTML radio button
answers.push(
`<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter} :
${currentQuestion.answers[letter]}
</label>`
);
}

// add this question and its answers to the output
output.push(
`<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>`
);
});

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join("");
}

function showResults() {
// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll(".answers");
answerContainers.forEach(e => e.style.color = "black");

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// if answer is correct
if (userAnswer === currentQuestion.correctAnswer) {
// add to the number of correct answers
numCorrect++;

// color the answers green
//answerContainers[questionNumber].style.color = "lightgreen";
} else {
// if answer is wrong or blank
// color the answers red
answerContainers[questionNumber].style.color = "red";
}
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


const myQuestions = [{
question: "1. Given an array where numbers are in range from 1 to n<sup>6</sup>, which sorting algorithm can be used to sort these numbers in linear time?  ", ///// Write the question inside double quotes
answers: {
a: " Not possible to sort in linear time ", ///// Write the option 1 inside double quotes
b: "Radix Sort  ", ///// Write the option 2 inside double quotes
c: "Bucket Sort ", ///// Write the option 3 inside double quotes
d: "Quick Sort  ", ///// Write the option 4 inside double quotes
},
correctAnswer: "b" ///// Write the correct option inside double quotes
},

{
question: "2. If we use Radix Sort to sort n integers in the range (n<Sup>k/2</sup>,n<sup>k</sup>, for some k>0 which is independent of n, the time taken would be? ",  ///// Write the question inside double quotes
answers: {
a: "Theta(n) ",                  ///// Write the option 1 inside double quotes
b: "Theta(k.n) ",                  ///// Write the option 2 inside double quotes
c: "Theta(n.logn) ", ///// Write the option 3 inside double quotes
d: "Theta(n<Sup>2</sup>) ", ///// Write the option 4 inside double quotes
},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},

{
question: "3. If there are n integers to sort, each integer has d digits, and each digit is in the set {1, 2, ..., k}, radix sort can sort the numbers in: ",  ///// Write the question inside double quotes
answers: {
a: "O(k (n + d)) ",                  ///// Write the option 1 inside double quotes
b: "O(d (n + k)) ",                  ///// Write the option 2 inside double quotes
c: "O((n + k) lg d)  ", ///// Write the option 3 inside double quotes
d: "O((n + d) lg k) ", ///// Write the option 4 inside double quotes
},
correctAnswer: "b"                ///// Write the correct option inside double quotes
},

{
question: "4. Radix Sort uses which of the following as a subroutine? ",  ///// Write the question inside double quotes
answers: {
a: "Merge Sort ",                  ///// Write the option 1 inside double quotes
b: " Quick Sort ",                  ///// Write the option 2 inside double quotes
c: "Counting Sort ", ///// Write the option 3 inside double quotes
d: "Heap Sort ", ///// Write the option 4 inside double quotes

},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},



];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
