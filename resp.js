burger = document.querySelector('.burger')
header = document.querySelector('.header')
item = document.querySelector('.item')
btn = document.querySelector('.btn')


burger.addEventListener('click',()=>{
btn.classList.toggle('v-class');
item.classList.toggle('v-class');
header.classList.toggle('h-nav');
})