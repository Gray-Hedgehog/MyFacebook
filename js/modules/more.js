const menuMore = document.querySelector('.menu-more')

export const more = document.querySelector('.more')

export function downMore(event) {
    !menuMore.classList.contains('_active-menu') ? menuMore.classList.add('_active-menu') : menuMore.classList.remove('_active-menu');
    !more.classList.contains('open-more') ? more.classList.add('open-more') : more.classList.remove('open-more');
}

export function dropMore(event) {
    menuMore.classList.contains('_active-menu') ? menuMore.classList.remove('_active-menu') : false;
    more.classList.contains('open-more') ? more.classList.remove('open-more') : false;
}