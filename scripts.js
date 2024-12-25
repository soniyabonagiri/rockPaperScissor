// document.write('hello')
let allimg = document.querySelectorAll('.imgdiv img');
console.log(allimg);
let userchoice;
let compchoice;
let userscore = 0;
let compscore= 0;


function replay(){
    document.getElementById('userscore').innerHTML="0"
    
    document.getElementById('compscore').innerHTML="0"
    // userscore=0;
    // compscore=0;

}

function compchoicefun() {
    let arr = ['rock', 'paper', 'scissor'];
    let var1 = Math.floor(Math.random() * 3);
    compchoice = arr[var1];
    return compchoice;
}
compchoicefun();
function gameImp(u) {

    compchoice = compchoicefun();
    if (compchoice === 'rock' && userchoice === 'rock' || compchoice === 'paper' && userchoice === 'paper' || compchoice === 'scissor' && userchoice === 'scissor'){
        btn.innerHTML="game Draw"
        document.getElementById('user1').innerHTML=userchoice;
        document.getElementById('comp1').innerHTML=compchoice;
       
    }
    else if(compchoice==='rock'&&userchoice==='paper'||compchoice==='scissor'&&userchoice==='rock'||compchoice==='paper'&&userchoice==='scissor'){
        btn.innerHTML="User Won";
        userscore++;
        document.getElementById('userscore').innerHTML=userscore
        document.getElementById('user1').innerHTML=userchoice; 
        document.getElementById('comp1').innerHTML=compchoice;
       
    }
    else if( compchoice==='paper'&&userchoice==='rock'||compchoice==='rock'&&userchoice==='scissor'||compchoice==='scissor'&&userchoice==='paper'){
        btn.innerHTML="computer won";
        compscore++
        document.getElementById('compscore').innerHTML=compscore
        document.getElementById('user1').innerHTML=userchoice;
        document.getElementById('comp1').innerHTML=compchoice;
        
        // compscore.innerHTML=compscore

    }

    }

allimg.forEach((i) => {
    i.addEventListener('click', () => {
        userchoice = i.id;
        gameImp(userchoice);
        
    })
})



