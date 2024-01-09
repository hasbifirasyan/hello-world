//membuat object angkot - cara constructor
function Angkot(sopir,trayek,penumpang,kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    this.penumpangTurun = function(namaPenumpang,bayar){
        if (this.penumpang.length==0){
            alert('angkot masih kosong!');
            return false;
        }
        for (var i =0; i<this.penumpang.length;i++) {
            if(this.penumpang[i]==namaPenumpang){
                this.penumpang[i]=undefined;
                this.kas += bayar;
                return this.penumpang
            }
        }
    }
}

var Angkot1 = new Angkot('bobi',['bhbatu', 
    'kalapa'], [],0);
var Angkot2 = new Angkot('Jirak',['caringin', 
    'dago'], [],0);
