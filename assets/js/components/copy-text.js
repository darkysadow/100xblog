export function copyText(){
    if (document.querySelector(".copy")) {
        const copy = document.querySelector(".copy");
        copy.addEventListener("click", function (e) {
            e.preventDefault()
          navigator.clipboard.writeText(window.location);
          copy.classList.add('copied');
          setTimeout(() => {
            copy.classList.remove('copied');
          }, 2000);
        });
      }
}