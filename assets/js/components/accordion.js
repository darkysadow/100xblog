export function initAccordion() {
    if(document.querySelector('.accordion__item')) {
        document.querySelector('.accordion__head').classList.toggle('opened')
        document.querySelectorAll('.accordion__head').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.accordion__head').forEach(el => {
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