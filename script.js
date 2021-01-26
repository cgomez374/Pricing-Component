//Grab HTML elements 
//Cards
const leftCard = document.querySelector('.left-card');
const rightCard = document.querySelector('.right-card');
const middleCard = document.querySelector('.middle-card');

const cards = document.querySelectorAll('.cards');
const highlightCard = document.querySelector('.highlighted');

//btn
const button = document.querySelectorAll('.btn');

//Toggle switch
const btnSwitch = document.querySelector('#toggleSwitch');
const priceP = document.querySelectorAll('#price');

//Add event listener
leftCard.addEventListener('mouseover', () => {
    if(document.querySelector('.left-card p').textContent == '$19.99') {
        middleCard.classList.add('cards');
        middleCard.classList.remove('highlighted');

        leftCard.classList.remove('cards');
        leftCard.classList.add('highlighted');
    }
    else {
        middleCard.classList.add('alternative');
        middleCard.classList.remove('alternativeHighlight');

        leftCard.classList.remove('alternative');
        leftCard.classList.add('alternativeHighlight');
    }
   
});
leftCard.addEventListener('mouseleave', () => {
    if(document.querySelector('.left-card p').textContent == '$19.99') {
        middleCard.classList.remove('cards');
        middleCard.classList.add('highlighted');

        leftCard.classList.add('cards');
        leftCard.classList.remove('highlighted');
    }   
    else {
        middleCard.classList.add('alternativeHighlight');
        middleCard.classList.remove('alternative');

        leftCard.classList.remove('alternativeHighlight');
        leftCard.classList.add('alternative');
    }
});

rightCard.addEventListener('mouseover', () => {
    if(document.querySelector('.left-card p').textContent == '$19.99') {
        middleCard.classList.add('cards');
        middleCard.classList.remove('highlighted');

        rightCard.classList.remove('cards');
        rightCard.classList.add('highlighted');
    }
    else {
        middleCard.classList.add('alternative');
        middleCard.classList.remove('alternativeHighlight');

        rightCard.classList.remove('alternative');
        rightCard.classList.add('alternativeHighlight');
    }
});

rightCard.addEventListener('mouseleave', () => {
    if(document.querySelector('.left-card p').textContent == '$19.99') {
        middleCard.classList.remove('cards');
        middleCard.classList.add('highlighted');

        rightCard.classList.add('cards');
        rightCard.classList.remove('highlighted');
    }
    else {
        middleCard.classList.add('alternativeHighlight');
        middleCard.classList.remove('alternative');

        rightCard.classList.remove('alternativeHighlight');
        rightCard.classList.add('alternative');
    }
});

//Event listener for toggle switch
btnSwitch.addEventListener('click', () => {
    priceP.forEach(price => {
        if(price.textContent == '$19.99') {
            price.textContent = '$239.88';
            applyAlternativeStyles();
        }
        else if(price.textContent == '$24.99')
            price.textContent = '$299.88';
        else if(price.textContent == '$39.99')
            price.textContent = '$479.88';
        else if(price.textContent == '$239.88') {
            price.textContent = '$19.99';
            removeAltStyles();
        }
        else if(price.textContent == '$299.88')
            price.textContent = '$24.99';
        else if(price.textContent == '$479.88')
            price.textContent = '$39.99';
    });
});

function applyAlternativeStyles() {
    //change background color and header color
    document.querySelector('body').style.backgroundColor = '#262626';
    document.querySelector('.header').style.color = '#fff';


    //changes cards style
    cards.forEach(card => {
        card.classList.remove('cards');
        card.classList.add('alternative');

        highlightCard.classList.remove('highlighted');
        highlightCard.classList.add('alternativeHighlight');
    });

    //change btn style
    button.forEach(btn => {
       btn.style.backgroundColor = '#262626';
        btn.style.color = '#fff';
    })

    //change toggle color
    document.querySelector('.slider').style.backgroundColor = '#c5321f';
}

function removeAltStyles() {
    //revert background color and header color
    
    document.querySelector('body').style.backgroundColor = '#D7DEFF';
    document.querySelector('.header').style.color = '#262626';

    //Revert card styles
    cards.forEach(card => {
        card.classList.remove('alternative');
        card.classList.add('cards');

        highlightCard.classList.remove('alternativeHighlight');
        highlightCard.classList.add('highlighted');
    });

    //change btn style
    button.forEach(btn => {
        btn.style.backgroundColor = '#7C00FF';
         btn.style.color = '#fff';
     })

    //change toggle color
    document.querySelector('.slider').style.backgroundColor = 'purple';
}









