const getQuestions = async() =>{
try {
    const fetchedPromise = await fetch("https://quizapi.io/api/v1/questions?apiKey=VBZr00tzasss60F2bSDvgBUEQd8UXzRiHtk4mxuw&limit=1&tags=JavaScript")
    const responsePromise = fetchedPromise.json()
    const data = await responsePromise
    console.log(data[0].correct_answer);
    const question = document.getElementById('question')
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');
    const option4 = document.getElementById('option4');
    const input4 = document.getElementById('input4');

    question.innerText = data[0].question;
    option1.innerText = data[0].answers.answer_a;
    option2.innerText = data[0].answers.answer_b;
    option3.innerText = data[0].answers.answer_c;
    option4.innerText = data[0].answers.answer_d;
    
    if (data[0].answers.answer_c==null) {
        option3.innerText="None of The Above"
    }
    if (data[0].answers.answer_d==null) {
        option3.innerText="None of The Above"
        input4.remove();
    }
} catch (error) {
    console.log(error);
}

}
getQuestions()