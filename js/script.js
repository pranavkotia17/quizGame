const questions = [
    {
    'que' : 'Which of the following is a Markup Language-',
    'a': 'HTML',
    'b': 'python',
    'c':'java',
    'd': 'none of the above',
    'correct': 'a'
},

{
    'que' : 'What year was Javascript launched',
    'a': '1996',
    'b': '1995',
    'c':'1994',
    'd': 'none of the above',
    'correct': 'b'
},
{
    'que' : 'What does Css stands for?',
    'a': 'Hypertext Markup Language',
    'b': 'Cascading Style Sheet',
    'c':'Correct Shorthand Services',
    'd': 'none of the above',
    'correct': 'b'
}


]

console.log(questions);

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionsInput = document.querySelectorAll('.options');


const loadQuestion = ()=>{

    if(index === total){
        return endQuiz();

    }

    reset()

    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText= data.a;
    optionsInput[1].nextElementSibling.innerText=data.b;
    optionsInput[2].nextElementSibling.innerText=data.c;
    optionsInput[3].nextElementSibling.innerText=data.d;
    
    

}

const submitQuiz = ()=>{
    const data = questions[index];
   const ans =  getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++
    }
    index++;
    loadQuestion();
    return;

}

// check answers 

const getAnswer = ()=>{
    let answer;
    optionsInput.forEach((input)=>{
        if(input.checked){
            answer = input.value;
        }
    })

    return answer;
}

const reset = ()=>{
    optionsInput.forEach((input)=>{
        input.checked = false;
    })
}

const endQuiz = ()=>{
    if(right > 0){
        document.getElementById('box').innerHTML = `

        <div style="text-align:center;"> 
        <h3>Thanks for playing the quiz </h3>
        <h1 style="margin-top:15px;">😍</h1>
        <h2 style="color:green;"> ${right} / ${total} are correct </h2>

        </div>
    
    
    `

    }else{
        document.getElementById('box').innerHTML = `

        <div style="text-align:center;"> 
        <h3>Thanks for playing the quiz </h3>
        <h2 style="color:red;"> ${right} / ${total} are correct </h2>
        <h2>You are Failed try Again 😢</h2>

        </div>
    
    
    `

    }
    
}

loadQuestion();