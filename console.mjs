import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
	stdout: file,
	stderr: file,
});

log.info("Hello ini akan ke kirim pada file application.log");
log.error("Error ini juga akan ke kirim pada file application.log");

const mahasiswa = {
	firstname: "andrian",
	lastname: "soedjadi",
	nim: "1234567890",
};

log.table(mahasiswa);
