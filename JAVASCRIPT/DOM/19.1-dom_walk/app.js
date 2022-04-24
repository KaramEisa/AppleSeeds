// intro
const myList = document.querySelector('li.start-here');
//todo 1:
// myList.innerHTML = 'main title'; //
myList.textContent = 'main title';

//todo 2:
const li3 = myList.nextElementSibling;
const myListSiblingChild_Ul = li3.firstElementChild;

const newSubTitle = document.createElement('li');
const textList = document.createTextNode('sub title 4');
newSubTitle.appendChild(textList);

myListSiblingChild_Ul.appendChild(newSubTitle);

//todo 3:

// const lastLi = myList.nextElementSibling.nextElementSibling;

// const lastLi = li3.nextElementSibling;
// lastLi.remove();

const parent = myList.parentElement;
parent.lastElementChild.remove();

//todo 4:

const body = parent.parentElement;
const head = body.previousElementSibling;
const title = head.lastElementChild;
title.textContent = 'Master Of The Dom';
console.dir(title);

//todo 5:
// ...

//todo 6: why not to use innerHTML?
