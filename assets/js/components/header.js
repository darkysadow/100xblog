export function initHeader() {
    const minimize = document.querySelector('.minimize')
    minimize.addEventListener('click', function(e) {
        if(minimize.classList.contains('minimize-active') && !e.target.closest('.header__burger')) {
            minimize.classList.remove('minimize-active')

        }
    })
    document.querySelector('.header__burger').addEventListener('click', function() {
        minimize.classList.add('minimize-active')
    })
    document.querySelector('.modal-menu__close').addEventListener('click', function() {
        minimize.classList.remove('minimize-active')
    })
    document.querySelectorAll('.modal-menu__body ul li a').forEach(link => {
        link.addEventListener('click', function() {
            minimize.classList.remove('minimize-active')
        })
    })
    document.querySelector('.scroll').addEventListener('scroll', function() {
        
        lazyLoad()
        initAnimation()
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