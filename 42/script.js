'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

const width = box.offsetWidth;
const height = box.offsetHeight;

console.log(width, height);

btn.addEventListener('click', ()=> {
    box.style.height = box.scrollHeight + 'px';
});