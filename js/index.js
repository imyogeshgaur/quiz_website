const quizDB = [
  {
    question: "Q1: What is the Full Form of HTML ?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "HyperText Makeup Language",
    d: "HyperText Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2: What is the Full Form of CSS ?",
    a: "Cascading Style Sheet",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheet",
    d: "Cascading Super Sheet",
    ans: "ans1",
  },
  {
    question: "Q3: What is the Full Form of HTTP ?",
    a: "HyperText Transfer Product",
    b: "HyperText Test Protocol",
    c: "HyperText Transfer Protocol",
    d: "High Test Protocol",
    ans: "ans3",
  },
  {
    question: "Q4: What is the Full Form of JS ?",
    a: "JavaSuper",
    b: "JavaScript",
    c: "JustScript",
    d: "JordernShoes",
    ans: "ans2",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0;

const loadQuestions = () => {
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestions();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((currentAnsElem) => {
    if (currentAnsElem.checked) {
      answer = currentAnsElem.id;
    }
    
  });
  return answer;
};

const deselectAll = () =>{
    answers.forEach(currentAnsElem=>{currentAnsElem.checked = false })
}

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();

  if(checkedAnswer === quizDB[questionCount].ans){
      score++;
  }

  questionCount++;
  deselectAll();

  if(questionCount < quizDB.length){
      loadQuestions();
  }else{

     showScore.innerHTML = `<h3>You Scored ${score}/${quizDB.length}</h3>`;

     showScore.classList.remove('scoreArea');
  }
});
