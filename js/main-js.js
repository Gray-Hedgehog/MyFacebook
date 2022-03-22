/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

// import styled from 'variables.css'
function myFunction() {
    document.getElementById("myClose").classList.toggle("close");
    document.getElementById("myDropdown").classList.toggle("show");
}


var dropdowns = document.getElementsByClassName("down-icons");
var i = 1;
myClose.onfocus = function () {
    myClose.classList.contains('close');
}

myClose.onblur = function () {
    if (myClose.classList.contains('close')) {
        myClose.classList.remove('close');
    }

    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

const menuIcon = document.querySelector('.menu-icon')
if (menuIcon) {
    const menuBody = document.querySelector('.menu');
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
    });
}

// handle like

const likeButton = document.querySelector('.like-button')

function handleLike(event) {
    event.target.classList.toggle('liked')
    if (event.target.classList.contains('liked')) {
        event.target.innerText = 'Liked'
    } else {
        event.target.innerText = 'Like'
    }
}

likeButton.addEventListener('click', handleLike)

// Blue Tab

import {targetTab} from "./modules/tab.js";

const menuButtons = document.querySelector('.buttons')

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




















