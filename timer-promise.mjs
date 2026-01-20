//pada file ini adalah versi promise-nya dari file timer.mjs
import timers from "timers/promises";

// console.info(new Date());
// await timers.setTimeout(5000);
// console.info(new Date());
//code diatas ini untuk menampilkan waktu setelah 5 detik berjalan

//dibawah ini function untuk menampilkan waktu setiap 1 detik menggunakan for await versi timer
for await (const startTime of timers.setInterval(1000, "ignored")) {
	console.info(`Start time at: ${new Date()}`);
}
