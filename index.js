let isAutoplay=false;
let intervalId;
function autoPlay(){
    if(!isAutoplay){
        intervalId=setInterval(()=>{
            const param=computerMove();
            result(param);
        },1000)
        document.querySelector('.btn-5').innerHTML='Stop Auto Play';
        isAutoplay=true;
    }
    else{
        clearInterval(intervalId);
        isAutoplay=false;
        document.querySelector('.btn-5').innerHTML='Auto Play';

    }

}
const auto=document.querySelector('.btn-5');
auto.addEventListener('click',()=>{
    autoPlay();
})
let random;
function computerMove(){
    const myArray=['rock','paper','scissor'];
    random=myArray[Math.floor(Math.random() * Number(myArray.length))];
    return random;
}   
let score={
    win:0,
    loss:0,
    tie:0
}; 

let gameresult;
function result(param){
    computerMove();
    score=JSON.parse(localStorage.getItem('score')) || {
        win:0,
        loss:0,
        tie:0
    };
    if(param==='rock'){
        if(random==='rock'){
            gameresult='Tie'
        }
        else if(random==='scissor'){
            gameresult='You win'
        }
        else{
            gameresult='You lose'
        }
    }
    else if(param==='scissor'){
        if(random==='rock'){
            gameresult='You lose'
        }
        else if(random==='scissor'){
            gameresult='Tie'
        }
        else{
            gameresult='You win'
        }
    }
    else{
        if(random==='rock'){
            gameresult='You win'
        }
        else if(random==='scissor'){
            gameresult='You lose'
        }
        else{
            gameresult='Tie'
        }
    }
    if(gameresult=='You win'){
        score.win += 1;
    }
    else if(gameresult=='You lose'){
        score.loss += 1;
    }
    else if(gameresult=='Tie'){
        score.tie+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.result1').innerHTML=gameresult;
    document.querySelector('.summary').innerHTML=`You picked `;
    document.querySelector('.img-sum').innerHTML=`<img src="./${param}-emoji.png" class="img1"></img>`;
    document.querySelector('.summary1').innerHTML=`Computer picked `;
    document.querySelector('.img-sum1').innerHTML=`<img src="./${random}-emoji.png" class="img1">`;
    
    document.querySelector('.score2').innerHTML=`Wins:${score.win} , Loss:${score.loss} , Tie:${score.tie}`;
}    


