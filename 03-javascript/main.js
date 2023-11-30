// practice 1

let fname = "Ghifary Adnan Harully"

console.log(fname)

// practice 2

let word = 'JavaScript '; 
let second = 'is'; 
let third = ' awesome'; 

let outputGabunganVariable = word + second + third
console.log(outputGabunganVariable)

// practice 3

let hello = 'Hallo'
let say = 'Javacsript'

let gabung = `${hello} ${say}`
console.log(gabung)

// practice 4

let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let kelilingPersegiPanjang = 2 * ( parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang) );

console.log(kelilingPersegiPanjang)


//practice 5

let sentences= 'wah javascript itu keren sekali'; 

let firstWords= sentences.substring(0, 3); 
let secondWords= sentences.substring(3, 14)
let thirdWords = sentences.substring(14, 18) 
let fourthWords = sentences.substring(18, 25)
let fifthWords = sentences.substring(25, 32)

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);

//practice 6

var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence[5]+ sentence[6] + sentence[7] + sentence [8] + sentence[9]
var fourthWord; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var fifthWord; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var sixthWord; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var seventhWord; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var eighthWord; // lakukan sendiri , wajib mengikuti seperti contoh diatas

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

//practice 7

let txt = "I can eat bananas all day";
let hasil = txt.slice(10,18)

console.log(hasil)

//practice 8

// nilai >= 80 indeksnya A
// nilai >= 70 dan nilai < 80 indeksnya B
// nilai >= 60 dan nilai < 70 indeksnya c
// nilai >= 50 dan nilai < 60 indeksnya D
// nilai < 50 indeksnya 
let nilaiDoe = 59

if (nilaiDoe >= 80){
    console.log("A")
}  else if (nilaiDoe >= 70 && nilaiDoe <= 80){
    console.log("B")
} else if (nilaiDoe >= 60 && nilaiDoe <= 70){
    console.log("C")
} else {
    console.log("Lu GOBLOK")
}

//practice 9 ternary operator

const angka = 2;
const beverage = angka == 2 ? "Angkanya 2" : "bukan Angka 2";
console.log(beverage)


// practice 10 swtich case
const lampu = 'tai';

switch (lampu) {
  case 'Merah':
    console.log('Berhenti');
    break;

  case 'Kuning':
    console.log('Hati Hati');
    break;

   case 'Hijau':
    console.log('Hati Hati');
    break;
  default:
    console.log(`Sorry, we are out of ${lampu}.`);
}
