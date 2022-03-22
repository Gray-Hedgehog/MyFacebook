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

import {targetTab, menuButtons} from "./modules/tab.js";

menuButtons.addEventListener('click', targetTab)

// more

import {more, dropMore, downMore} from "./modules/more.js";

more.addEventListener('click', downMore)
more.addEventListener('blur', dropMore)

// Modal

import {photos, close, modalOverlay, modalOpen, modalClose} from "./modules/modal.js";

photos.forEach((element) => {
    element.addEventListener('click', modalOpen)
})
close.addEventListener('click', modalClose)
modalOverlay.addEventListener('click', modalClose)




















