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


const row3Section1 = document.querySelector('.row3-section1')
const tab = document.querySelector('.tab')
const textColorBlue = document.querySelector('.text-color-blue')

function targetTab(event) {
    tab.style.transform = `translateX(${event.target.offsetLeft - row3Section1.offsetLeft}px)`
    tab.style.width = `${event.target.offsetWidth}px`
    console.log(event.target.classList)
    textColorBlue.forEach
    if (event.target.classList.contains('text-color-blue')) {
        event.target.classList.remove('text-color-blue')
    } else {
        event.target.classList.add('text-color-blue')
    }
}

row3Section1.addEventListener('click', targetTab)












































