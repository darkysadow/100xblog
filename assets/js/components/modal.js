export function initModal() {
    if(document.querySelector('[data-modal]')) {
        document.querySelectorAll('[data-modal]').forEach(btn => {
            btn.addEventListener('click', function(e) {
                
                e.preventDefault()
                const modal = btn.getAttribute('data-modal');
                document.querySelector(`.${modal}`).classList.add('modal--opened')
                if(modal === 'image-modal') {
                    initImageModal(btn.getAttribute('data-image'))
                }
            })
        })
        document.querySelectorAll('.modal-close').forEach(close => {
            close.addEventListener('click', function() {
                document.querySelector('.modal--opened').classList.remove('modal--opened')
                document.querySelector('.modal__image').innerHTML = ''

            })
        })
    }
}
function initImageModal(img) {
    document.querySelector('.modal__image').innerHTML = `<img src="${img}" alt="image">`
}