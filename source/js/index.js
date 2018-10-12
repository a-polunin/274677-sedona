var mainNav = document.querySelector('.main-nav');
var openNav = document.querySelector('.page-header__toggle');
var closeNav = document.querySelector('.main-nav__btn-close');

openNav.addEventListener('click',function(e){
  e.preventDefault();
  if(mainNav.classList.contains('show-on')) return false;

  mainNav.classList.add('show-on');
  mainNav.classList.remove('show-off');
});

closeNav.addEventListener('click', function(e){
  e.preventDefault();

  mainNav.classList.add('show-off');
  mainNav.classList.remove('show-on');
})
