export function initHeader() {
    const header = document.querySelector('.header')
    const burgerBtn = document.querySelector('.header__burger')
    const menuWhitespace = document.querySelector('.header__whitespace')

    window.addEventListener('scroll', () => {
        if(window.scrollY > 108) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })

    burgerBtn.addEventListener('click', () => {
        header.classList.toggle('opened')
    })
    menuWhitespace.addEventListener('click', function() {
        header.classList.remove('opened')
    })
}
lazyLoad()
initAnimation()
function lazyLoad() {
    if(document.querySelector('img[data-src]')) {
        document.querySelectorAll('img[data-src]').forEach(img => {
            
            if(img.getBoundingClientRect().top < window.innerHeight + 200) {
                img.src = img.dataset.src
                img.classList.remove('lazy')
            }
        })
    }
}
function initAnimation() {
    if(document.querySelector('[data-animation]')) {
        document.querySelectorAll('[data-animation]').forEach(animation => {
            if(animation.getBoundingClientRect().top < window.innerHeight && !animation.classList.contains('animated')) {
                animation.classList.add('animated')
            } else if(animation.getBoundingClientRect().top >= window.innerHeight && animation.classList.contains('animated')){
                animation.classList.remove('animated')

            }

        })
    }
}