let first = document.querySelector('.hole1');
let second = document.querySelector('.hole2');
let third = document.querySelector('.hole3');
let starting = document.querySelector('.start');
let stopping = document.querySelector('.stop');
let scores = document.querySelector('.score')

randomInt = 0;
scoring = 0;



starting.addEventListener('click', ()=>{


    let randomInt = Math.floor(Math.random() * 3);
    if(randomInt===0){
        first.textContent = "❌"
        second.textContent = " "
        third.textContent = " "
    }else if(randomInt===1){
        first.textContent = " "
        second.textContent = "❌"
        third.textContent = " "

    }else if(randomInt===2){
        first.textContent = " "
        second.textContent = " "
        third.textContent = "❌"
        
    }
    console.log(randomInt)

})



first.addEventListener('click', ()=>{
    if (first.textContent==='❌'){
        scoring = scoring+1;
        scores.innerHTML = scoring;
    }else{
        scores = scores
    }

    let randomInt = Math.floor(Math.random() * 3);
    if(randomInt===0){
        first.textContent = "❌"
        second.textContent = " "
        third.textContent = " "
    }else if(randomInt===1){
        first.textContent = " "
        second.textContent = "❌"
        third.textContent = " "

    }else if(randomInt===2){
        first.textContent = " "
        second.textContent = " "
        third.textContent = "❌"    
    }


})

second.addEventListener('click', ()=>{

    if (second.textContent==='❌'){
        scoring = scoring+1;
        scores.innerHTML = scoring;
    }else{
        scores = scores
    }

    let randomInt = Math.floor(Math.random() * 3);
    if(randomInt===0){
        first.textContent = "❌"
        second.textContent = " "
        third.textContent = " "
    }else if(randomInt===1){
        first.textContent = " "
        second.textContent = "❌"
        third.textContent = " "

    }else if(randomInt===2){
        first.textContent = " "
        second.textContent = " "
        third.textContent = "❌"    
    }



})

third.addEventListener('click', ()=>{
    if (third.textContent==='❌'){
        scoring = scoring+1;
        scores.innerHTML = scoring;
    }else{
        scores = scores
    }

    let randomInt = Math.floor(Math.random() * 3);
    if(randomInt===0){
        first.textContent = "❌"
        second.textContent = " "
        third.textContent = " "
    }else if(randomInt===1){
        first.textContent = " "
        second.textContent = "❌"
        third.textContent = " "

    }else if(randomInt===2){
        first.textContent = " "
        second.textContent = " "
        third.textContent = "❌"    
    }



})

stopping.addEventListener('click', ()=>{
    alert(`Game Ended, Score: ${scores.innerHTML}`);

})


