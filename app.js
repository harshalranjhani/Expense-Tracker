const input = document.querySelector('.name-input');
// console.dir(input);
const begin = document.querySelector('#begin')
// const form = document.querySelector('.input-form');
const button = document.querySelector('.btn')
const span = document.querySelector('.name-output');
const hidden = document.querySelector('#hide');

const savingInp = document.querySelector('#savings-input')
const spendingInp = document.querySelector('#spending-input')

const workButton = document.querySelector('.work-btn')

const displayWeek = document.querySelector('#display-div')
const displayWeekRes = document.querySelector('.display-div-hidden')
const weekButton = document.querySelector('.week-btn')

let trackGoal = document.querySelector('#goal')

let dispGoal = document.querySelector('.h-goal')

button.addEventListener('click', () => {
    begin.remove();
    span.innerText = input.value;
    hidden.classList.remove('v-class');
})

let trackOver = false;
let goal = 100;

console.dir(trackGoal);

trackGoal.addEventListener('change', () => {
    goal = parseInt(trackGoal.value);
    dispGoal.innerText = `Goal : $${goal}`;
    reset();
})

const weeks = 5;
let currentWeek = 1;

let savingSpan = document.querySelector('.savings-amount')
let totalSavings = 0;
console.dir(savingSpan)
savingSpan.innerText = totalSavings;

let savingsValue = 0;
let spendingValue = 0;

workButton.addEventListener('click', () => {
    if (!trackOver) {
        currentWeek++;
        if (currentWeek === weeks) {
            trackOver = true;
        }
        displayWeek.innerText = `WEEK : ${currentWeek}`;
        displayWeekRes.innerText = `WEEK : ${currentWeek}`;
    }
    savingsValue = parseInt(savingInp.value);
    spendingValue = parseInt(spendingInp.value);

    // console.dir(spendingInp);

    switch (currentWeek) {
        case 1:
            let weekOne = weekSavings(savingsValue, spendingValue);
            totalSavings += weekOne;
            savingSpan.innerText = totalSavings;
            break;
        case 2:
            let weekTwo = weekSavings(savingsValue, spendingValue);
            totalSavings += weekTwo;
            savingSpan.innerText = totalSavings;
            break;
        case 3:
            let weekThree = weekSavings(savingsValue, spendingValue);
            totalSavings += weekThree;
            savingSpan.innerText = totalSavings;
            break;
        case 4:
            let weekFour = weekSavings(savingsValue, spendingValue);
            totalSavings += weekFour;
            savingSpan.innerText = totalSavings;
            break;
        case 5:
            let weekFive = weekSavings(savingsValue, spendingValue);
            totalSavings += weekFive;
            savingSpan.innerText = totalSavings;
            break;
    }

    spendingInp.value = "";
    savingInp.value = "";
    if ((currentWeek === 5 && totalSavings < goal && totalSavings !== NaN)) {
        hidden.remove();
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        h1.classList.add('h-primary');
        h2.classList.add('h-secondary-1')
        h1.innerText = `Good Work ${input.value}! Unfortunately your goal was not reached :(`;
        h2.innerText = `Saved $${totalSavings} out of the $${goal} goal`
        div.appendChild(h1);
        div.appendChild(h2);
        document.body.appendChild(div);
    }
    else if ((currentWeek === 5 && totalSavings > goal && totalSavings !== NaN)) {
        hidden.remove();
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        h1.classList.add('h-primary');
        h2.classList.add('h-secondary-1')
        h1.innerText = `Good Work ${input.value}! YOU COMPLETED YOUR GOAL`;
        h2.innerText = `Saved $${totalSavings} out of the $${goal} goal`
        div.appendChild(h1);
        div.appendChild(h2);
        document.body.appendChild(div);
    }
    else if (currentWeek === 5) {
        hidden.remove();
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.classList.add('h-secondary-1')
        h2.innerText = `Inputs must be in an integer format`;
        div.appendChild(h2);
        document.body.appendChild(div);
    }
    if (currentWeek === 5) {
        workButton.innerText = 'Save';
    }
})

weekButton.addEventListener('click', () => {
    if (!trackOver) {
        currentWeek++;
        if (currentWeek === weeks) {
            trackOver = true;
        }
        displayWeek.innerText = `WEEK : ${currentWeek}`;
        displayWeekRes.innerText = `WEEK : ${currentWeek}`;
    }
    if (currentWeek === 5) {
        workButton.innerText = 'Save';
    }
})

function weekSavings(save, spend) {
    return save - spend;
}

function reset(){
    currentWeek = 1;
    displayWeek.innerText = `WEEK : ${currentWeek}`;
    displayWeekRes.innerText = `WEEK : ${currentWeek}`;
    workButton.innerText = 'Add';
}