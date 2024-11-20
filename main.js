//Opening/closing menu

function togglerMenuStatus() {
    const menuButton = document.querySelector('.header__menu-icon');
    const headerMenu = document.querySelector('.header');

    menuButton.onclick = () => headerMenu.classList.toggle('header--open');
}
togglerMenuStatus();

//Slider scripts

const donatData = {
    1: {
        class: 'blueberry',
        title: 'Blueberry Donut',
        text: 'Soft, cake-style donut infused with the&nbsp;sweet, tangy flavor of&nbsp;blueberries and&nbsp;finished with a&nbsp;light, sugary glaze that adds the&nbsp;perfect amount of&nbsp;sweetness',
        imgUrl: 'img/bluberry-donut.webp'
    },
    2: {
        class: 'strawberry',
        title: 'Strawberry Donut',
        text: 'Bursting with fruity flavor, this donut features vibrant pink strawberry frosting and is&nbsp;generously adorned with rainbow sprinkles for&nbsp;a&nbsp;fun, sugary delight',
        imgUrl: 'img/strawberry-donut.webp'
    },
    3: {
        class: 'chocolate',
        title: 'Chocolate Donut',
        text: 'Rich chocolate-flavored donut topped with a&nbsp;sweet glaze and&nbsp;colorful sprinkles, offering the&nbsp;perfect blend of&nbsp;softness and crunch in&nbsp;every bite',
        imgUrl: 'img/chocolate-donut.webp'
    },
    4: {
        class: 'blue-sky',
        title: 'Blue sky Donut',
        text: 'Donut coated with a&nbsp;blueberry-flavoured blue compound coating, decorated withstrings of&nbsp;white compound coating and&nbsp;with&nbsp;multicoloured sugar pearls',
        imgUrl: 'img/blue-sky-donut.webp'
    }
}

const sliderContainer = document.querySelector('.slider__container');
const slides = document.querySelectorAll('.slider__image-block');
const sliderBtnPrev = document.querySelector('.slider__button--prev');
const sliderBtnNext = document.querySelector('.slider__button--next');
const donutTitlePrev = document.querySelector('.main__title--prev');
const donutTitleNext = document.querySelector('.main__title--next');
const donutTitle = document.querySelectorAll('.main__title');
const donutText = document.querySelector('.main__text');
const donutImage = document.querySelector('.slider__image');
const body = document.querySelector('.body');
const menuLinks = document.querySelectorAll('.header__menu-link');


let numOfSlides = 4;
let numIndex = 1;
let prevNumIndex = 1;

donutTitlePrev.innerHTML = donatData[numOfSlides].title;
donutTitleNext.innerHTML = donatData[numIndex + 1].title;

//Changing slides' main function
function changeSlides(index, direction) {

    setTimeout(() => {  
        donutTitle[0].innerHTML = donatData[index].title;
        if (index == 1) {
            donutTitlePrev.innerHTML = donatData[numOfSlides].title;
            donutTitleNext.innerHTML = donatData[index + 1].title;
        } else if (index == numOfSlides) {
            donutTitlePrev.innerHTML = donatData[index - 1].title;
            donutTitleNext.innerHTML = donatData[1].title;
        } else {
            donutTitlePrev.innerHTML = donatData[index - 1].title;
            donutTitleNext.innerHTML = donatData[index + 1].title;
        }
        donutTitle.forEach(title => {
            title.classList.remove('down');
            title.classList.remove('up');
        });
    }, 800);


    donutText.style.opacity = '0';
    setTimeout(() => {
        donutText.innerHTML = donatData[index].text;
        donutText.style.opacity = '1';
    }, 600);

    if (direction === 'up') {
        donutImage.style.animationName = 'donutAnimationReverse';
        donutTitle.forEach(title => title.classList.add('up'));
    } else {
        donutImage.style.animationName = 'donutAnimation';
        donutTitle.forEach(title => title.classList.add('down'));
    }
    
    setTimeout(() => {
        donutImage.setAttribute('src', donatData[index].imgUrl);
    }, 700);
    setTimeout(() => {
        donutImage.style.animationName = '';        
    }, 1050);

    body.classList.remove(`body--${donatData[prevNumIndex].class}`);
    body.classList.add(`body--${donatData[index].class}`)
}

menuLinks.forEach((link, i) => {
    link.onclick = (e) => {
        e.preventDefault;
        let status;
        const headerMenu = document.querySelector('.header');
        headerMenu.classList.toggle('header--open');
        prevNumIndex = numIndex;
        numIndex = i + 1;
        if (numIndex < prevNumIndex) {
            status = 'up';
        } else {
            status = 'down';
        }
        changeSlides(numIndex, status);
    }
});

//Changing slides by button prev
sliderBtnPrev.onclick = () => {
    prevNumIndex = numIndex;
    if (numIndex !== 1) {
        numIndex--;
    } else {
        numIndex = numOfSlides;
    }
    
    changeSlides(numIndex, 'down');
}

//Changing slides by button next
sliderBtnNext.onclick = () => {
    prevNumIndex = numIndex;
    if (numIndex !== numOfSlides) {
        numIndex++;
    } else {
        numIndex = 1;
    }

    changeSlides(numIndex, 'up');
}

//Changing slides by swipe

sliderContainer.addEventListener("touchstart", touchStart, false);
sliderContainer.addEventListener("touchmove", touchMove, false);

let xDown, 
    yDown;

function touchStart(evt) {
    const { clientX, clientY } = evt.touches[0];
    xDown = clientX; yDown = clientY;
}

function touchMove(evt) {
    if (!xDown || !yDown) {
        return; 
    }

    const { clientX, clientY } = evt.touches[0];

    const xDiff = xDown - clientX;
    const yDiff = yDown - clientY;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        xDiff > 0 ? sliderBtnNext.click() : sliderBtnPrev.click();
    }
    
    xDown = yDown = null;
}