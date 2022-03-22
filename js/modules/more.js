const menuMore = document.querySelector('.menu-more')

const modulesMore = {
    more: document.querySelector('.more'),
    downMore: function (event) {
        !menuMore.classList.contains('_active-menu') ? menuMore.classList.add('_active-menu') : menuMore.classList.remove('_active-menu');
    },
    dropMore: function (event) {
        menuMore.classList.contains('_active-menu') ? menuMore.classList.remove('_active-menu') : false;
    }
}

export const more = modulesMore.more
export const downMore = modulesMore.downMore
export const dropMore = modulesMore.dropMore
