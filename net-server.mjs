import net from "net";

const server = net.createServer((client) => {
	console.log("Client connected");

	client.addListener("data", (data) => {
		console.info(`NET-SERVER: Received data from client: ${data.toString()}`);
		client.write(`Hello: ${data.toString()}\r\n`);
	});
});

server.listen(4545, "localhost");
//baris code diatas untuk server dan menunggu adanya respon dari client
