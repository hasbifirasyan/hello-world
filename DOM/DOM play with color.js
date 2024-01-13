//tangkap tombol
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor= 'lightgreen';
    // document.body.setAttribute('class','hijau-muda');
    document.body.classList.toggle('hijau-muda')
};

//tambah button di sebelah button html ubah warna
const tRandom = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tRandom.appendChild(teksTombol);
tRandom.setAttribute('type','button');
tUbahWarna.after(tRandom);

//ubah warna random
tRandom.addEventListener('mouseenter', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor= 'rgb('+r+' ,'+g+','+b+')'
});

//sliderrgb
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const r =sMerah.value;
    const g =sHijau.value;
    const b =sBiru.value;

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sHijau.addEventListener('input', function(){
    const r =sMerah.value;
    const g =sHijau.value;
    const b =sBiru.value;

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sBiru.addEventListener('input', function(){
    const r =sMerah.value;
    const g =sHijau.value;
    const b =sBiru.value;

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});