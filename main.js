//Opening/closing menu

function togglerMenuStatus() {
    const menuButton = document.querySelector('.header__menu-icon');
    const headerMenu = document.querySelector('.header');

    menuButton.onclick = () => headerMenu.classList.toggle('header--open');
}
togglerMenuStatus();

//Changing donut
const donatData = {
    1: {
        class: 'bluberry',
        title: 'Blueberry Donut',
        text: 'Soft, cake-style donut infused with the&nbsp;sweet, tangy flavor of&nbsp;blueberries and&nbsp;finished with a&nbsp;light, sugary glaze that adds the&nbsp;perfect amount of&nbsp;sweetness',
        imgUrl: '/img/bluberry-donut.webp'
    },
    2: {
        class: 'strawberry',
        title: 'Strawberry Donut',
        text: 'Bursting with fruity flavor, this donut features vibrant pink strawberry frosting and is&nbsp;generously adorned with rainbow sprinkles for&nbsp;a&nbsp;fun, sugary delight',
        imgUrl: '/img/strawberry-donut.webp'
    },
    3: {
        class: 'chocolate',
        title: 'Chocolate Donut',
        text: 'Rich chocolate-flavored donut topped with a&nbsp;sweet glaze and&nbsp;colorful sprinkles, offering the&nbsp;perfect blend of&nbsp;softness and crunch in&nbsp;every bite',
        imgUrl: '/img/chocolate-donut.webp'
    },
    4: {
        class: 'blue-sky',
        title: 'Blue sky Donut',
        text: 'Donut coated with a&nbsp;blueberry-flavoured blue compound coating, decorated withstrings of&nbsp;white compound coating and&nbsp;with&nbsp;multicoloured sugar pearls',
        imgUrl: '/img/blue-sky-donut.webp'
    }
}

function changeDonut(n) {
    const donutTitle = document.querySelector('.main__title');
    const donutText = document.querySelector('.main__text');
    const donutImage = document.querySelector('.slider__image');
    const body = document.querySelector('.body');

    donutTitle.innerHTML = donatData[n].title;
    donutText.innerHTML = donatData[n].text;
    donutImage.setAttribute('src', donatData[n].imgUrl);
}
