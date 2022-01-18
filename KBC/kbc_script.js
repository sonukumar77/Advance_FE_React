let ques_title = document.getElementById("question-title");
let ques_op1 = document.getElementById("option-name1");
let ques_op2 = document.getElementById("option-name2");
let ques_op3 = document.getElementById("option-name3");
let ques_op4 = document.getElementById("option-name4");

let timerDiv = document.getElementById("timer");

let timerSecond = 5;
const countDown = setInterval(function (){
    --timerSecond;
    if(timerSecond < 0  )
    {
        clearInterval(countDown)
    }
    else
    {
        timerDiv.innerHTML = timerSecond;
    }
   

},1000)

let url = ("kbc_ques.json");
let f = fetch(url);
let t = f.then(function(response){
    return response.json();
})
t.then(function(data){
    let questions = data.Questions;
    for(let i=0;i<1;i++)
    {
        
        ques_title.innerText = questions[0].question_name;
        ques_op1.innerText = "A "+questions[0].option_1;
        ques_op2.innerText = questions[0].option_2;
        ques_op3.innerText = questions[0].option_3;
        ques_op4.innerText = questions[0].option_4;
        // console.log()
        // console.log(questions[0].option_2)
        // console.log(questions[0].option_3)
        // console.log(questions[0].option_4)
    }
    // console.log(questions)
})

