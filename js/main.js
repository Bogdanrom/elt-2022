
// ----скрипт для сховування верхнього headerTop--------

const headerTop = document.querySelector('.header__top');
let scrolPos = 0;
window.addEventListener('scroll', function(){
   let st = this.scrollY;
   if (st > scrolPos){
      headerTop.classList.add('header__top--hide');
   } else {
      headerTop.classList.remove('header__top--hide');
   }
   scrolPos = st;
})

// ----------------------------------------------------

// ----скрипт для натискання кнопок меню для моб--------

let burgerIcon = document.querySelector('.header__adaptive-burger');
let userIcon = document.querySelector('.header__adaptive-user');
let phoneIcon = document.querySelector('.header__adaptive-phone');

let burgerWrap = document.querySelector('.burger-mobile__wrap');
let userWrap = document.querySelector('.user-mobile');
let phoneWrap = document.querySelector('.phone-mobile__wrap');

function removeActiveClass() {
   document.querySelectorAll('.adaptive-wrap').forEach((adaptive) => adaptive.classList.remove('_active'));
 }

burgerIcon.addEventListener('click', function() {
  
   if(burgerWrap.classList.contains("_active")) {
      burgerWrap.classList.remove("_active");
      document.body.style.overflow = "visible";
     removeActiveClass();
  } else {
    removeActiveClass();
    burgerWrap.classList.add("_active");
    document.body.style.overflow = "hidden";
  }
});

userIcon.addEventListener('click', function() {
   
   if(userWrap.classList.contains("_active")) {
      userWrap.classList.remove("_active");
      document.body.style.overflow = "visible";
     removeActiveClass();
  } else {
    removeActiveClass();
    userWrap.classList.add("_active");
    document.body.style.overflow = "hidden";
  }
});

phoneIcon.addEventListener('click', function() {
   
   if(phoneWrap.classList.contains("_active")) {
      phoneWrap.classList.remove("_active");
      document.body.style.overflow = "visible";
     removeActiveClass();
  } else {
    removeActiveClass();
   phoneWrap.classList.add("_active");
   document.body.style.overflow = "hidden";
  }
});

// popup-connection------------------------------------
addEventListener
const popup = document.querySelector('.popup-connection');
const popupBg = document.querySelector('.popup-connection__inner');
const openPopup = document.querySelector('.connection__link');
const closePopup = document.querySelector('.popup-connection__btn-close');

openPopup.addEventListener('click', function (e) {
   e.preventDefault();
   popup.classList.add('active');
   document.body.style.overflow = "hidden";
})

closePopup.addEventListener('click', function (e) {
   e.preventDefault();
   popup.classList.remove('active');
   document.body.style.overflow = "visible";
})

addEventListener('click', function (e) {
   if (e.target == popupBg) {
      popup.classList.remove('active');
      document.body.style.overflow = "visible";
   }
})

// ----------------------------------------------------




