// burger

import {menuIcon, burger} from "./modules/burger.js";

menuIcon.addEventListener('click', burger)

// оставил для сравнения старый бургер

// function myFunction() {
//     document.getElementById("myClose").classList.toggle("close");
//     document.getElementById("myDropdown").classList.toggle("show");
// }
//
//
// var dropdowns = document.getElementsByClassName("down-icons");
// var i = 1;
// myClose.onfocus = function () {
//     myClose.classList.contains('close');
// }
//
// myClose.onblur = function () {
//     if (myClose.classList.contains('close')) {
//         myClose.classList.remove('close');
//     }
//
//     for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//         }
//     }
// }
//
// const menuIcon = document.querySelector('.menu-icon')
// if (menuIcon) {
//     const menuBody = document.querySelector('.menu');
//     menuIcon.addEventListener("click", function (e) {
//         document.body.classList.toggle('_lock');
//         menuBody.classList.toggle('_active');
//     });
// }

// handle like

import {likeButton, handleLike} from "./modules/handle-like.js";

likeButton.addEventListener('click', handleLike)

// Blue Tab

// import {targetTab, menuButtons} from "./modules/tab.js";

const menuButtons = document.querySelector('.buttons')
const tab = menuButtons.querySelector('.tab')
const menuButton123 = document.querySelector('.menu-button')

function targetTab(event) {
    console.log('tab')
    // tab.style.transform = `translateX(${event.target.offsetLeft}px)`
    // tab.style.width = `${event.target.offsetWidth}px`
    // if (event.target.classList.contains('menu-button')) {
    //     document.querySelectorAll('._text-blue').forEach(n => n.classList.remove('_text-blue'))
    //     event.target.classList.add('_text-blue')
    // }
}

menuButton123.forEach((elem) => {
    elem.addEventListener('click', targetTab)
})
menuButton.forEach((element) => {
    element.addEventListener('click', modalOpen)
})
// more

import {more, dropMore, downMore} from "./modules/more.js";

more.addEventListener('click', downMore)
more.addEventListener('blur', dropMore)

// Modal

import {photos, close, modalOverlay, modalWindow, modalOpen, modalClose} from "./modules/modal.js";

photos.forEach((element) => {
    element.addEventListener('click', modalOpen)
})
modalOverlay.addEventListener('click', modalClose)
close.addEventListener('click', modalClose)


















