/* Один */
function scrollTo(elementOne) {
    window.scroll ({
        left: 0,
        top: elementOne.offsetTop,
        behavior: 'smooth'
    })
}
let buttonOne = document.querySelector('.works1');
let workOne = document.querySelector('#works');
buttonOne.addEventListener('click', () => {
   scrollTo(works);
});



function scrollTo(elementTwo) {
    window.scroll ({
        left: 0,
        top: elementTwo.offsetTop,
        behavior: 'smooth'
    })
}
let buttonTwo = document.querySelector('.works1');
let workTwo = document.querySelector('#works');
buttonTwo.addEventListener('click', () => {
   scrollTo(works);
});




function scrollTo(elementTwo) {
    window.scroll ({
        left: 0,
        top: elementTwo.offsetTop,
        behavior: 'smooth'
    })
}

let buttonThree = document.querySelector('.shop1');
let shopTwo = document.querySelector('#shop');
buttonThree.addEventListener('click', () => {
   scrollTo(shop);
});



function scrollTo(elementFour) {
    window.scroll ({
        left: 0,
        top: elementFour.offsetTop,
        behavior: 'smooth'
    })
}

let buttonFour = document.querySelector('.contacts1');
let shopFour = document.querySelector('#contacts');
buttonFour.addEventListener('click', () => {
   scrollTo(contacts);
});



function scrollTo(elementFive) {
  window.scroll ({
      left: 0,
      top: elementFive.offsetTop,
      behavior: 'smooth'
  })
}

let buttonFive = document.querySelector('.dostavkaoplata1');
let shopFive = document.querySelector('#dostavkaoplata');
buttonFive.addEventListener('click', () => {
 scrollTo(dostavkaoplata);
});






AOS.init();


const anchorsOne = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchorsOne) {
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}






const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
      if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
        this.el.classList.remove('btn-up_hide');
        this.el.classList.add('btn-up_hiding');
        window.setTimeout(() => {
          this.el.classList.remove('btn-up_hiding');
        }, 300);
      }
    },
    hide() {
      if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
        this.el.classList.add('btn-up_hiding');
        window.setTimeout(() => {
          this.el.classList.add('btn-up_hide');
          this.el.classList.remove('btn-up_hiding');
        }, 300);
      }
    },
    addEventListener() {
      // при прокрутке окна (window)
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (this.scrolling && scrollY > 0) {
          return;
        }
        this.scrolling = false;
        // если пользователь прокрутил страницу более чем на 200px
        if (scrollY > 150) {
          // сделаем кнопку .btn-up видимой
          this.show();
        } else {
          // иначе скроем кнопку .btn-up
          this.hide();
        }
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        this.scrolling = true;
        this.hide();
        // переместиться в верхнюю часть страницы
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();
