import util from "util";

const firstname = "andrian";
const lastname = "soedjadi";

console.info(`Hello ${firstname} ${lastname}`);
console.info(
	util.format("Nama lengkap saya adalah %s %s", firstname, lastname)
);

//contoh penggunaan pada json
const mahasiswa = {
	firstname: "andrian",
	lastname: "soedjadi",
	nim: "1234567890",
};

//untuk menampilkan data json menggunakan stringify
console.info(`Data mahasiswa: ${JSON.stringify(mahasiswa)}`);

//untuk menampilkan data json menggunakan util.format dengan %j
console.info("Data mahasiswa: %j", mahasiswa);
