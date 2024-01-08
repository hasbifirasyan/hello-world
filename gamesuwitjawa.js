//menangkap pilihan player
var p = prompt('pilih: gajah, semut, orang');

//menangkap pilihan computer
//membangkitkan bilangan random
var comp =Math.random();
if (comp <0.34){
    comp ='gajah';
} else if(comp>=0.34 && comp<=0.67){
    comp ='semut';
} else{
    comp = 'orang';
}
console.log(comp);


//menentukan rules
var hasil ='';
if (p==comp){
    hasil = 'Seri!';
} else if(p=='gajah'){
    if(comp == 'orang'){
        hasil = 'Menang';
    } else{
        hasil = 'Kalah';
    }
    //atau bisa pake ini
    //hasil = (comp =='orang') ? 'Menang!' : 'Kalah!';
} else if(p=='orang'){
    if(comp == 'semut'){
        hasil = 'Menang';
    } else{
        hasil = 'Kalah';
    }
} else if(p=='semut'){
    if(comp == 'gajah'){
        hasil = 'Menang';
    } else{
        hasil = 'Kalah';
    }
} else{
    hasil ='input yang sesuai pilihan!';
    alert(hasil);
    hasil='yang bener aja ajig :(';
}//tampilkan hasilnya
alert(hasil);
