let choices =['paper','rock','scissors','spock','lizard'];
let buttons=document.querySelectorAll('.pick');
let scoreEl=document.getElementById('Score');
let main=document.getElementById('main');
let selection=document.getElementById('selection');
let reset=document.getElementById('reset');
let score=0;
let winner=document.getElementById('win');
let computer_select=document.getElementById('computer_select');
let user_select=document.getElementById('user_select');

let closeBtn= document.getElementById('close');
let openBtn=document.getElementById('open');
let rules=document.getElementById('modal');

let userChoice=undefined;

buttons.forEach(button=>{

    button.addEventListener('click',()=>{
    userChoice=button.getAttribute('data-choice');

    
    checkwinner();
});

});

reset.addEventListener('click',()=>{

    main.style.display='flex';
    selection.style.display='none';
}
);

openBtn.addEventListener('click',()=>{
    rules.style.display='flex';
}
);

closeBtn.addEventListener('click',()=>{
    rules.style.display='none';
}
);

function updateScore(value){
    score+=value;
    scoreEl.innerText=score;
};

function checkwinner(){

    let computerchoice=pickRandomChoice();

    updatdeSelection(user_select,userChoice);
    updatdeSelection(computer_select,computerchoice);

    if(userChoice==computerchoice){
        
        winner.innerText="draw";
    }

    
    else if(
        (userChoice=='paper'&&(computerchoice=='rock'|| computerchoice=='spock'))||

        (userChoice=='rock'&&(computerchoice=='scissors'||computerchoice=='lizard'))||

        (userChoice=='scissors'&&(computerchoice=='paper'||computerchoice=='lizard'))||
        (userChoice=='lizard'&&(computerchoice=='paper'||computerchoice=='spock'))||
        (userChoice=='spock'&&(computerchoice=='scissors'||computerchoice=='rock'))
    ){
        updateScore(1);
        winner.innerText="win";


    }
    else{

        winner.innerText="lost";
        updateScore(-1);
    }

    main.style.display='none';
    selection.style.display='flex'
};

function pickRandomChoice(){
    return choices[Math.floor(Math.random()*choices.length)]; 
}
function updatdeSelection(selectionEL,choice){    
    selectionEL.classList.remove('btn-paper');
    selectionEL.classList.remove('btn-rock');
    selectionEL.classList.remove('btn-lizard');
    selectionEL.classList.remove('btn-scissors');
    selectionEL.classList.remove('btn-spock');

    let img=selectionEL.querySelector('img');
    selectionEL.classList.add(`btn-${choice}`);
    img.src=`images/icon-${choice}.svg`;
    img.alt=choice;
}