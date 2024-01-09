// //method pada array
// // var arr = ['sandika','bobi','iskak'];
// 1.join -> mengubah array jadi string


// //2. push (nambah element pada array di belakang, bisa lebih dari satu ) & pop (ilangin elemen terakhir)
// arr.push('ilham','ikhsan');
// arr.pop();

// //3. unshift(nambah elemen pertama di depan) & shift(ilangin elemen pertama di depan)
// arr.unshift('hasbi');
// arr.shift()

// //4.splice(indexAwal, mauDihapusBerapa,elemenbaru1,elemenbaru2,...)
// arr.splice(1,0,'ridwan','ajeng');

// //5.slice(mengiris nilai di tengah tengah array ke array baru, tanpa mengubah array lama)
// var arr2=arr.slice(1,4);
// console.log(arr2.join());

// //6. forEach
// var angka = [1,2,3,4,5,6,7,8];
// for( var i = 0; i<angka.length;i++){
//     console.log(angka[i]);
// }
// // for each dibawah ini sama dengan for di atas.
// // untuk tiap array dalam variabel angka, jalankan fungsi tersebut
// // yaitu console.log
// // ini bentuk 1 
// angka.forEach(function(e){console.log(e);})

// //ini bentuk 2
// var cetak = function(e){console.log(e);}
// angka.forEach(cetak);

// //7. map (sama seperti forEach, tapi mengembalikan array)
// var angka = [1,2,6,4,8,3];
// // angka.map(function(e){
// //     return e;
// // });
// var angka2 = angka.map(function(e) {
//     return e*2;
// // });
// console.log(angka2.join());

// //8.sort
// var angka = [1,2,10,50,6,4,8,3];
// angka.sort(function(a,b){
//     return b-a; //ascending
// });
// console.log(angka.join());

// //9.filter (mencari elemen pada array) , find (mencari satu elemen pada array)
// var angka = [1,2,10,50,6,4,8,3];
// var angka2 = angka.filter(function(x){
//     return x>5;
// })
// console.log(angka2);

// var angka2 = angka.find(function(x){
//     return x>5;
// })
// console.log(angka2);