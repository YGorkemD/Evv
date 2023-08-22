// heyy
// TODO js çalış
//! buraya bak


document.write("Merhaba Dünya <br>");
document.write("Merhabalar <br>");
document.write("Taniştigima memnun oldum <br> ");
console.log("heyyo konsol");

// console.warn("Hata Oluştu");
// debugger;
//alert("Sonucu gormeden once kodları kaydet");
console.log(location.port);
// var : function scope
// let/const block scope özelliğine sahiptir
// const sabittir değişmez

// function metod1(){
//     var a=23;
//     var b=17;
//     console.log(a+b);
// }

// const user={
//     username: "ahahs",
//     password:"acavav"
// }
// console.log(user)

// metod1();
// console.log(b);
// let stringDegisken="Yasiniz : ";
// let yas=23;
// console.log(stringDegisken+yas);
// console.log(5>8);
// let z ="ahmet";
// let x= 35;
// let y=25;
// let insan={
//     isim: "yunus",
//     soyisim: "özyavuz",
//     yas: 47
// }

// let rakamlar=[1,2,3,4,5,6,7,8,9];
// let func=function(){
//     console.log("Selam");
// }

// console.log(typeof z);
// console.log(x+y==60)
// console.log(typeof insan);
// console.log(typeof rakamlar);
// console.log(typeof func);
// func();

// let yass=25;
// let para=3500;
// let saglikliMi=false;
// console.log(yass>18 && para>3000 && saglikliMi==true);
// let isimm= prompt("isminizi giriniz")
// console.log(isimm)
// confirm("Silmek istediğinize emin misiniz"); // kullanıcıdan tamam veya iptal sonuçlu evet hayır sorusu true veya false döner

// Koşul Yapıları

// let not=70
// if (not>50) {
//     console.log("gectiniz notunuz   " +not);
// } else {
//     console.log("kaldiniz");
// }

// let yasss=Number(prompt("Yasiniz"));
// let butce=Number(prompt("Butceniz"));
// if (yas>18 && butce>3000) {
//     alert("Sinava Girebilirsiniz");
// } else {
//     alert("Sinava Giremezsiniz");
// }

// let ad=prompt("İsminizi giriniz    :");
// let tckn=prompt("Tckn giriniz   :");

// kontrol(ad,tckn);

// function kontrol(ad, tckn){
//     if (ad!="") {
//         if (tckn.length ==11) { 
//             alert("isim ve tckn sorunsuz girildi");
//         } else {
//             alert("Lutfen tc nizi 11 hane olarak girin");
//         }
//     } else {
//         alert("lutfen isim alanini bos birakma");
//     }

// }

// let boy=Number(prompt("Boyunuzu giriniz"));
// let kilo =Number(prompt("kilonuzu giriniz"));
// let x= kilo/(boy*boy)
// if (x<=18,5) {
//     alert("ideal kilonun altindasiniz kilo almaniz lazim");
// }
// else if(x>=18,5 && x<=24,9){
//     alert("Ideal kilodasiniz OK")
// }

// alt+shift+f kod düzenleme

// let sayi=Number(prompt("1 den 5e kadar bir rakam giriniz"));
// switch (sayi) {
//     case 1:
//         alert("girdigin sayi 1");
//         break;
//     case 2:
//         alert("girdigin sayi 2");
//         break;
//     case 3:
//             alert("girdigin sayi 3");
//             break;
//     case 4:
//         alert("Girdiginiz sayi 4");
//         break;
//     case 5:
//         alert("girdiginiz sayi 5");
//     default:
//         alert("lutfen belirtilen degerde bir sayi giriniz" )
//         break;
// }

for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}
for (let j=1;j<=3;j++){
    if(j%3==1){
        console.log("Y");
    }
    if(j%3==2){
        console.log("G");
    }
    if(j%3==0){
        console.log("D")
    }
}
// let x=0;
// for (let a = 50; a>=1; a--) {
//     x+=a;
// }
// console.log(x);

// let sayacc=1;
// while(true){
//     console.log(sayacc);
//     if(sayacc==7){
//         break;
//     }
//     sayacc++
// }
let sayac=0;
while(sayac<=10){
    sayac++;
    if (sayac>10) {
        break;
    }
    if(sayac==8){
        continue;
    }
    console.log(sayac);
}
for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(i + "X"+ j + "=" + (i*j));
    }
    console.log("-------------------------------")
    
}


// Asal Bulucu


// let sayi=Number(prompt("Lütfen kontrol edeceğiniz sayiyi giriniz : ")) ;
// let sonuc=true;
// for (let i = 2; i <= Math.floor(sayi/2); i++) {
//     if (sayi%i==0) {
//         // asal değildir
//         sonuc=false;
//         break;
//     }
    
// }
// if(sonuc){
//     alert(sayi + "asaldir");
// }
// else{
//     alert(sayi+"Asal degildir");
// }

// Faktoriyel Hesaplayıcı

let sayyi=Number(prompt("Lütfen faktoriyelini hesaplamak istediginiz sayiyi giriniz"));
let d=1
for(let i=sayyi; i>0 ;i--){
    d*=i
}
alert(d);

let donenDeger=cube(3);
console.log(donenDeger);
function cube(sayi){
    let sonuc=sayi*sayi*sayi;
    // Return ile bir degeri methodun dışarısına çıkarıp kullanabiliyoruz
    return sonuc;
    console.log("heyyoo") // Return den sonra fonksiyon içinde kod çalışmaz
}

let metin="Şuanda Bir Evimde stajdayim ve youtube dan JavaScript egitimi aliyorum";
let harf=prompt("Harf giriniz");
let sonuc=bul(harf);
alert("Harf sayisi"+ sonuc);
function bul(harf){
    let toplam=0;
    for(let i=0; i<metin.length;i++){
        if(metin.charAt(i).toLowerCase===harf.toLowerCase){
            toplam+=1;
        }

    }
    return toplam;
}





