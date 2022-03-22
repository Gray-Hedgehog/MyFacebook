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


const menuButtons = document.querySelector('.buttons')
const tab = menuButtons.querySelector('.tab')


function targetTab(event) {
    tab.style.transform = `translateX(${event.target.offsetLeft}px)`
    tab.style.width = `${event.target.offsetWidth}px`
    if (event.target.classList.contains('menu-button')) {
        document.querySelectorAll('._text-blue').forEach(n => n.classList.remove('_text-blue'))
        event.target.classList.add('_text-blue')
    }
}

menuButtons.addEventListener('click', targetTab)


// more

const more = document.querySelector('.more')
const menuMore = document.querySelector('.menu-more')

function downMore(event) {
    !menuMore.classList.contains('_active-menu') ? menuMore.classList.add('_active-menu') : menuMore.classList.remove('_active-menu');
}

function dropMore(event) {
    menuMore.classList.contains('_active-menu') ? menuMore.classList.remove('_active-menu') : false;
}

more.addEventListener('click', downMore)
more.addEventListener('blur', dropMore)

// Modal
import {photos, close, modalOverlay, modalOpen, modalClose} from "./modules/modal.js";

photos.forEach((element) => {
    element.addEventListener('click', modalOpen)
})
close.addEventListener('click', modalClose)
modalOverlay.addEventListener('click', modalClose)




















