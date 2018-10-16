var mainNav = document.querySelector('.main-nav');
var toggle = document.querySelector('.main-nav__toggle');

toggle.addEventListener('click',function(e){
  e.preventDefault();
  if(mainNav.classList.contains('main-nav--opened')){
    mainNav.classList.remove('main-nav--opened')
    mainNav.classList.add('main-nav--closed')
  }else{
    mainNav.classList.remove('main-nav--closed')
    mainNav.classList.add('main-nav--opened')
  }
});
