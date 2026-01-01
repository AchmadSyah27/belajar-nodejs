//buffer tidak perlu import karna sudah ada di global
const buffer = Buffer.from("Andrian Soedjadi");
//menampilkan buffer
console.info(buffer);
//mengubah buffer ke string
console.info(buffer.toString());
//mengubah buffer secara terbalik
buffer.reverse();
console.info(buffer.toString());
