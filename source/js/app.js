var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var orderBtn = document.querySelector('.promo-item__button');
var modalWindow = document.querySelector('.modal');
var addBtn = document.querySelector('.modal__close');

var buyBtn = document.querySelectorAll('.item__add-to-cart');


if (orderBtn) {
  orderBtn.addEventListener('click', function() {
    modalWindow.classList.remove('modal--closed');
    modalWindow.classList.add('modal--showing');
  });
};

if (addBtn) {
  addBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalWindow.classList.remove('modal--showing');
    modalWindow.classList.add('modal--closed');
  });
};

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

for (var i=0; i<buyBtn.length; i++) {
  buyBtn[i].addEventListener('click', function() {
    modalWindow.classList.remove('modal--closed');
    modalWindow.classList.add('modal--showing');
  });
};
