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

function handleLike(node, token, name, textActive, textInactive) {
    likeButton.classList.toggle(token)
    if (likeButton.className === name) {
        likeButton.innerText = textActive
        console.log('liked')
    } else {
        likeButton.innerText = textInactive
    }
    console.log(likeButton.className)
}

likeButton.addEventListener('click', function (event){
    console.log('Click')
    if (event.target.closest('.like-button')) {
        handleLike(likeButton, 'liked', 'like-button liked', 'Liked', 'Like')
    }
})
//likeButton.removeEventListener('click', handleLike)
























