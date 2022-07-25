let questions = [
    {
        "question": "wer hat HTML erfunden?",
        "answer_1":"Robbie Williams",
        "answer_2":"Lady Gaga",
        "answer_3":"Tim Berners-Lee",
        "answer_4":" Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "wer hat HTML erfunden?",
        "answer_1":"Robbie Williams",
        "answer_2":"Lady Gaga",
        "answer_3":"Tim Berners-Lee",
        "answer_4":" Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "wer hat HTML erfunden?",
        "answer_1":"Robbie Williams",
        "answer_2":"Lady Gaga",
        "answer_3":"Tim Berners-Lee",
        "answer_4":" Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "wer hat HTML erfunden?",
        "answer_1":"Robbie Williams",
        "answer_2":"Lady Gaga",
        "answer_3":"Tim Berners-Lee",
        "answer_4":" Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "wer hat HTML erfunden?",
        "answer_1":"Robbie Williams",
        "answer_2":"Lady Gaga",
        "answer_3":"Tim Berners-Lee",
        "answer_4":" Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "wer hat HTML erfunden?",
        "answer_1":"Robbie Williams",
        "answer_2":"Lady Gaga",
        "answer_3":"Tim Berners-Lee",
        "answer_4":" Justin Bieber",
        "right_answer": 3
    }


];

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML=questions.length;
    showQuestion();

}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML= question["question"];
    document.getElementById('answer_1').innerHTML= question["answer_1"];
    document.getElementById('answer_2').innerHTML= question["answer_2"];
    document.getElementById('answer_3').innerHTML= question["answer_3"];
    document.getElementById('answer_4').innerHTML= question["answer_4"];

}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success')

    }
    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
        console.log('falsche Antwort')
    }
   document.getElementById('next-button').disabled = false;

}
