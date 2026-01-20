//code dibawah ini berfungsi untuk client mengirim response ke net-server.mjs
//net-server.mjs dibiarkan running dan nanti net-client.mjs run di terminal yang berbeda
import net from "net";

const client = net.createConnection({
	port: 4545,
	host: "localhost",
});

//lalu tambahkan untuk client ketika menerima data, kita tambahkan callback
client.addListener("data", (data) => {
	console.info(`NET-CLIENT: Receive data from server: ${data.toString()}`);
});
//lalu kita setInterval untuk kirim datanya ke server setiap 2 detik
setInterval(() => {
	//client.write("Andrian\r\n"); //line ini untuk mengirim data ke server hanya satu data nama user
	//dibawah ini misal mensimulasikan jika ada user lainnya dengan mengirim melalui process.argv[2]
	client.write(`${process.argv[2]}\r\n`);
}, 2000);
