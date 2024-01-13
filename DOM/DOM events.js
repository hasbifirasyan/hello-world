// //event handler
// const p3 = document.querySelector('.p3');
// function ubahWarna(){
//     p3.style.backgroundColor = 'lightblue';
// }

// const p2 =document.querySelector('.p2');
// p2.onclick = ubahWarna;

// //addEventListener
// const p4 =document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul =document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru gaes!')
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

//kalau pake eventhandler jadinya ketimpa
// const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function (){
//     p3.style.color = 'red';
// }

//kalau pake addEventListener, jadi nambah
const p3 = document.querySelector('.p3');
p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function(){
    p3.style.color = 'red';
});