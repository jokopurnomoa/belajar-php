var gelas;

gelas = 12; // Integer
gelas = 3.456;  // Float
gelas = 'A'; // Char
gelas = 'Halo'; // String
gelas = true; // Boolean

document.write(gelas);

var a,b,c;

a = 13;
b = 5;

c = a + b; // Tambah
c = a - b; // Kurang
c = a * b; // Kali
c = a / b; // Bagi
c = a % b; // Mod / Sisa Bagi

document.write('<br>');
document.write(c);

var d,e,f;

d = "ADI";
e = "Adi";

document.write('<br>');

if(d == e){
    document.write('Benar');
} else {
    document.write('Salah');
}

d = 5;
e = 3;
f = 8;

document.write('<br>');

if (d < e || e > f){
    document.write('Benar');
} else if(d > e){
    document.write('d > e');
} else {
    document.write('Salah');
}

Math.PI;
