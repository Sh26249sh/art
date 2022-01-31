// ОбЪявление переменных //
const closeBt=document.querySelector('.popup__close');
const popup=document.querySelector('.popup');
const menuBt=document.querySelector('.header__menu-icon');
const aboutMenu=document.querySelector('.menu-about');
const looksMenu=document.querySelector('.menu-looks');
const subscribeMenu=document.querySelector('.menu-subscribe');

function openMenu(a){
  a.classList.add('popup_opened');
}
function closeMenu(a){
  a.classList.remove('popup_opened');
}

menuBt.addEventListener('click', function(){
  openMenu(popup);
  console.log('открыть меню');
});
closeBt.addEventListener('click', function(){
  closeMenu(popup);
  console.log('закрыть меню');
});

aboutMenu.addEventListener('click', function(){
  closeMenu(popup);
  console.log('закрыть меню');
});

looksMenu.addEventListener('click', function(){
  closeMenu(popup);
  console.log('закрыть меню');
});

subscribeMenu.addEventListener('click', function(){
  closeMenu(popup);
  console.log('закрыть меню');
});

menuBt.addEventListener('click', function(){
  console.log('nfnfnf');
})

