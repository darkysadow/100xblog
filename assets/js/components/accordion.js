export function initAccordion() {
    if(document.querySelector('.our-data__item-head')) {
        document.querySelectorAll('.our-data__item-head').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.our-data__item-head').forEach(el => {
                   if(el===item) {
                    el.classList.toggle('opened')
                   } else {
                    el.classList.remove('opened')

                   }
                })

            })
        })

    }
    if(document.querySelector('.single-blog__accordion-item')) {
        document.querySelector('.single-blog__accordion-head').classList.toggle('opened')
        document.querySelectorAll('.single-blog__accordion-head').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.single-blog__accordion-head').forEach(el => {
                   if(el===item) {
                    el.classList.toggle('opened')
                   } else {
                    el.classList.remove('opened')

                   }
                })

            })
        })

    }
}