AOS.init();

const menuLinks = document.querySelectorAll('.nav__linkk[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
    });
    
    function onMenuLinkClick(e) {
      const menuLink = e.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        if (iconMenu.classList.contains('_active')) {
          document.body.classList.remove('_lock');
          iconMenu.classList.remove('_active');
          navList.classList.remove('_active');
        }


        window.scrollTo ({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
    }
  }
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



  // --------------------- Бурер меню ------------------------ //

  const iconMenu = document.querySelector('.menu__icon');
  const navList = document.querySelector('.nav-list');
  if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      navList.classList.toggle('_active');
    });
  }
