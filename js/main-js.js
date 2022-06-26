// burger

import {menuIcon, burger} from "./modules/burger.js";

menuIcon.addEventListener('click', burger)

// handle like

import {likeButton, handleLike} from "./modules/handle-like.js";

likeButton.addEventListener('click', handleLike)

// Blue Tab

import {targetTab, menuButton} from "./modules/tab.js";

menuButton.forEach((elem) => {
    elem.addEventListener('click', targetTab)
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


















