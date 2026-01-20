import zlib from "zlib";
import fs from "fs";

//pertama perlu jalankan zlib-compress.mjs untuk membuat file hasil kompresi
const source = fs.readFileSync("zlib-compress.mjs.txt");
//sebelum di compress
console.info(source.toString());

const result = zlib.unzipSync(source);
//sesudah di decompress
console.info(result.toString());
