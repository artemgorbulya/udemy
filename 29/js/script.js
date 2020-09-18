'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const heart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');

div.classList.add('black');

wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// wrapper.removeChild(hearts[1]);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = '<h1>Hello world</h1>';

// div.textContent = 'hello';

div.insertAdjacentHTML("beforeend", '<h2>hello</h2>');


