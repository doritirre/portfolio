const modal_overlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoID = card.getAttribute('id')
        modal_overlay.classList.add('active')
        modal_overlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoID}`
    })
}

document.querySelector('.close_modal').addEventListener("click", function() {
    modal_overlay.classList.remove('active')   
    modal_overlay.querySelector('iframe').src = ""     
} )
