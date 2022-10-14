const minSpan = document.querySelector('#min');
const maxSpan = document.querySelector('#max');
const name_input = document.querySelector('#player_name');
const Btn = document.querySelector('#submit_btn');
const gameArea = document.querySelector('.game_area');
const optionArea = document.querySelector('.option_area');
const stageSpan = document.querySelector('.stage');
const scoreSpan = document.querySelector('.score');

const range = [1, 2];
let stage = 1;
let score = 0;
let randomPick

Btn.addEventListener('click', authorize);

function authorize(){
    minSpan.textContent = Math.min.apply(null, range);
    maxSpan.textContent = Math.max.apply(null, range);
    stageSpan.textContent = stage;
    scoreSpan.textContent = score;

    const player = name_input.value;

    if(player){
        gameArea.classList.add('show');
        displayOptions(range);
    } else {
        gameArea.classList.remove('show');
    }
}

function displayOptions(range){
    range.forEach(option => {
        let optionBtn  = document.createElement('button');
        optionBtn.setAttribute('class', 'option_btn');
        optionBtn.setAttribute('id', option);
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', validate)
        optionArea.appendChild(optionBtn);
    })
    randomPick = range[Math.floor(Math.random() * range.length)];
}

function validate(e){

    if(e.target.id !== randomPick){
        e.target.classList.add('error');
    }

    if(e.target.id == randomPick){
        e.target.classList.add('success');
        stage += 1;
        score += 1;
        range.push(range.length + 1);
        setTimeout(() => {
            removePrevOptions();
            authorize();
        }, 800);
    }
}

function removePrevOptions() {
    while (optionArea.firstChild) {
        optionArea.removeChild(optionArea.firstChild);
    }
}