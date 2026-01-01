import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "report.json";

function sampleError() {
	// This function will throw an uncaught exception
	throw new Error("Ups...!");
}

sampleError();
