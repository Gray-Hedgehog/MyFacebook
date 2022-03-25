const modalImg = document.querySelector('.modal-img')
const modal = {
    photos: document.querySelectorAll('.photos-img'),
    close: document.querySelector('.modal-close'),
    modalOverlay: document.querySelector('.modal-overlay'),
    modalWindow: document.querySelector('.modal-window'),
    modalOpen: function (event) {
        modalOverlay.classList.add('open')
        modalImg.src = `${event.target.src}`
    },
    modalClose: function () {
        modalOverlay.classList.remove('open')
    }
}

export const photos = modal.photos
export const close = modal.close
export const modalOverlay = modal.modalOverlay
export const modalWindow = modal.modalWindow
export const modalOpen = modal.modalOpen
export const modalClose = modal.modalClose


