import { EventEmitter } from "events";

const emitter = new EventEmitter();

//melakukan trigger pada event emitter
emitter.addListener("hello", (name) => {
	console.log(`Hello, ${name}!`);
});
emitter.addListener("hello", (name) => {
	console.log(`Halo, ${name}!`);
});

emitter.emit("hello", "Achmad Syah");
