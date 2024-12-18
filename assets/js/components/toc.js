export function initToc() {
  if (document.getElementById('toc')) {
    const TOC = document.getElementById('toc')
    const contentForToc = document.querySelector('[data-toc-builder]')
    let headings = contentForToc.querySelectorAll('h2'),
      parentLevel = 1,
      cursorNode = TOC;

    for (let i = 0, len = headings.length; i < len; ++i) {
      const currentHeading = headings[i];
      const newLevel = parseInt(currentHeading.tagName.substr(1, 1));


      const liNode = document.createElement('LI');
      if (!currentHeading.hasAttribute('id')) {
        currentHeading.id = 'h' + i;
      }
      const link = document.createElement('A');
      link.setAttribute('href', '#' + currentHeading.getAttribute('id'));
      link.appendChild(document.createTextNode(currentHeading.textContent))
      liNode.appendChild(link);
      cursorNode.appendChild(liNode);
    }

    if (TOC.querySelector('li') !== null) {
      TOC.querySelector('li').classList.add('active')
      TOC.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function () {
          TOC.querySelectorAll('li').forEach(item => {
            item.classList.remove('active')

          })
          event.target.closest('li').classList.add('clicked')
          event.target.closest('li').classList.add('active')
          setTimeout(() => {
            document.querySelector('.clicked').classList.remove('clicked')
          }, 1000);
        })
      })
    }

    window.addEventListener('scroll', function (e) {
      TOC.querySelectorAll('a').forEach(item => {
        
        if (item.getAttribute("href") !== '#' && !document.querySelector('.clicked')) {
          const refElement = document.querySelector(`${item.getAttribute("href")}`);

          if (refElement) {
            if (
              refElement.getBoundingClientRect().top - window.innerHeight/1.5  <= 0
            ) {
              
              if(!item.closest('li').classList.contains('active')) {
                item.closest('li').classList.add('active')
              }
              TOC.querySelectorAll('a').forEach(link => {
                if(link !== item && link.closest('li').classList.contains('active')) {
                  
                  
                  link.closest('li').classList.remove('active')
                } 
              })
            }
          }
        }
      })
    })
  }


}