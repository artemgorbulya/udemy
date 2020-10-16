const btn = document.querySelector('button');

// btn.onclick = function(){
//     alert('123213');
// }

let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    i++;
};

btn.addEventListener('click', deleteElement);
btn.removeEventListener('click', deleteElement);