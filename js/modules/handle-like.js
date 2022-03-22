const like = {
    likeButton: document.querySelector('.like-button'),
    handleLike: function (event) {
        event.target.classList.toggle('liked')
        event.target.classList.contains('liked') ? event.target.innerText = 'Liked' : event.target.innerText = 'Like'
    }
}

export const likeButton = like.likeButton
export const handleLike = like.handleLike