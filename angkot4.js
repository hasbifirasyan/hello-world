var noAngkot =1;
var jmlAngkot=10;
var Angkotlembur = [5,8,10];
var Angkotberoperasi=6;
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= Angkotberoperasi && noAngkot !==5) {
        console.log('Angkot No. '+ noAngkot + ' beroperasi dengan baik');
    } else if(Angkotlembur.includes(noAngkot) ){
        console.log('Angkot No. '+ noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. '+ noAngkot + ' tidak beroperasi dengan baik');
    }
}