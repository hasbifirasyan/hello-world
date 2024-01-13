//DOM Selection
//document.getElementById() ->element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor ='black';
judul.innerHTML = 'hasbi kasep';

// //document.getElementsByTagName() ->HTMLCollection
// const p = document.getElementsByTagName('p');
// for ( let i = 0; i<p.length;i++){
//     p[i].style.backgroundColor = 'lightyellow';
// }

// const h1 = document.getElementsByTagName('h1') [0];
// h1.style.fontsize = '50 px';

// // document.getElementsByClassName() --> HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1.innerHTML = 'Ini diubah';

//querySelector()
// const p4 = document.querySelector('#b p')
// p4.style.color ='blue';
// p4. style.fontSize = '20px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'yellow';

// //ubah element yang pertama muncul tagnya, (p)
// // const p =document.querySelector('p');
// // p.innerHTML = 'Ini diubah dari JS'

// //querySelectorAll()
// const p =document.querySelectorAll('p');
// for (let i = 0;i < p.length;i++){
//     p[i].style.backgroundColor = 'lightblue';
// }
// 
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'black';