import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs");
const result = zlib.gzipSync(source);

// Simpan hasil kompresi ke file baru sesuai nama file sumber dengan ekstensi .txt
fs.writeFileSync("zlib-compress.mjs.txt", result);
