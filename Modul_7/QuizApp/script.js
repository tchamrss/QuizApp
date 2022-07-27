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
        "question": "wann begann der erste Weltkrieg?",
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
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('sound/success.mp3');
let AUDIO_FAIL = new Audio('sound/wrong.mp3');

function init(){
    document.getElementById('all-questions').innerHTML=questions.length;
    showQuestion();

}

function showQuestion(){
    if (gameIsOver()){
        showEndscreen();
    } else{ // show question
        updateProgressBar();
        updateTonextQuestion();
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success')
        rightQuestions++;
        AUDIO_SUCCESS.play();

    }
    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
        AUDIO_FAIL.play();
        
    }
   document.getElementById('next-button').disabled = false;

}


function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    showQuestion();   

}

function resetAnswerButton(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');


}

function newStart(){
    document.getElementById('header-img').src = 'img/mind-g384b93894_640.png';
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    rightQuestions = 0;
    currentQuestion = 0;
    init();

}

function showEndscreen(){
    
    document.getElementById('endscreen').style='';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('amount-questions').innerHTML = questions.length;
    document.getElementById('right-questions').innerHTML = rightQuestions;
    document.getElementById('header-img').src = 'img/cup-gd7911d78b_640.png';
}

function updateTonextQuestion(){ 

    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion+1;
    document.getElementById('questionText').innerHTML= question["question"];
    document.getElementById('answer_1').innerHTML= question["answer_1"];
    document.getElementById('answer_2').innerHTML= question["answer_2"];
    document.getElementById('answer_3').innerHTML= question["answer_3"];
    document.getElementById('answer_4').innerHTML= question["answer_4"];
}

function updateProgressBar(){

    let percent = (currentQuestion +1) / questions.length;
    percent = Math.round(percent *100) ;
    document.getElementById('progress-bar').innerHTML = `${percent} %`
    document.getElementById('progress-bar').style = `width: ${percent}%;`;

}