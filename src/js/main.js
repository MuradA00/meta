import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

const lang = document.querySelector('.lang__eng')
const dropdownLang = document.querySelector('.lang__select')
const burger = document.querySelector('.burger')
const mobMenu = document.querySelector('.menu')
const body = document.querySelector('.html');
const closeIcon = document.querySelector('.close')

lang.addEventListener('click', () => {
  dropdownLang.classList.toggle('_select-active');
})

burger.addEventListener('click', () => {
  mobMenu.classList.add('_active-menu')
  body.classList.add('_body-locked');
})

closeIcon.addEventListener('click', () => {
  mobMenu.classList.remove('_active-menu')
  body.classList.remove('_body-locked')
})
