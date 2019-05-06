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

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (modalWindow.classList.contains('modal--showing')) {
			modalWindow.classList.remove('modal--showing');
			modalWindow.classList.add('modal--closed');
		}
	}
});

if (modalWindow) {
  modalWindow.addEventListener("click", function (evt) {
    var target = evt.target;
    if (target.classList.contains('modal')) {
      target.classList.remove('modal--showing');
      target.classList.add('modal--closed');
    };
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
