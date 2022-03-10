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

// like button
// const like = document.querySelector('#likeButton')
// like.textContent = 'Like'
//
// like.addEventListener('click',  () => {
//     console.log('Click')
//     if (like.textContent === 'Like'){
//         console.log(like.textContent)
//         like.textContent = 'Liked'
//         like.style.color = 'red'
//         like.style.backgroundColor = 'blue'
//     } else {
//         like.textContent = 'Like'
//         like.style.color = '#080808'
//         like.style.backgroundColor = '#E5E6EB'
//     }
// })


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
const tabColor = document.querySelector('button .tab-color')
const fbBlue = '#0572EF'
const fbGray = '#66676B'

function targetTab(event) {
    tab.style.left = `${event.target.offsetLeft - row3Section1.offsetLeft}px`
    tab.style.width = `${event.target.offsetWidth}px`
    event.target.classList.contains('text-color-gray' || 'text-color-blue') ? event.target.classList.toggle('text-color-blue') : event.target.classList.remove('text-color-blue')
}

row3Section1.addEventListener('click', targetTab)





















