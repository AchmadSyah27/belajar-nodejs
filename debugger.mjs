//membuat sebuat function untuk aktifitas debugging
function sayHello(name) {
	debugger;
	return `Hello, ${name}!`;
}

//ini untuk melakukan inputan nama
const name = "Achmad Syah";
console.info(sayHello(name));

//untuk menjalankan debugger, lakukan dengan command di terminal node inspect debugger.mjs
//ketik c untuk continue
//ketik .exit untuk keluar dari mode debugger
