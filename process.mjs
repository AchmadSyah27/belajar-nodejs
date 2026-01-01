import process from "process";

process.addListener("exit", (ExitCode) => {
	console.info(`Node JS exit with code: ${ExitCode}`);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);

//console.info dibawah ini tidak akan dieksekusi karena proses sudah dihentikan pada baris process.exit(1);
console.info("Ini tidak akan tampil");
