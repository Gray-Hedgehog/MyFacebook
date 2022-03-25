const tab = document.querySelector('.tab')
export const menuButton = document.querySelectorAll('.menu-button')

export function targetTab(event) {
    tab.style.transform = `translateX(${event.target.offsetLeft}px)`
    tab.style.width = `${event.target.offsetWidth}px`
    if (event.target.classList.contains('menu-button')) {
        document.querySelectorAll('._text-blue').forEach(n => n.classList.remove('_text-blue'))
        event.target.classList.add('_text-blue')
    }
}