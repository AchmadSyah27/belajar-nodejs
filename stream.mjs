import fs, { write } from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Andrian");
writer.write(" Soedjadi");
writer.end();

//ketika di run, akan menghasilkan file bernama target.log sesuai namanya pada line no.3

//selain itu,dengan kita menambahkan function dibawah ini, kita bisa juga melihat langsung isi dari
// file target.log tersebut
const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
	console.info(data.toString());
});
