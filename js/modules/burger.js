const menu = document.querySelector('.menu')
const body = document.querySelector('body')

export const menuIcon = document.querySelector('.menu-icon')
export function burger(event) {
    menu.classList.toggle('_active')
    body.classList.toggle('_lock')
}

