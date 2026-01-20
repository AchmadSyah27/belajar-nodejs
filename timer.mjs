//timer tidak perlu melakukan import karena sudah built-in module di node js pada global scope

//dibawah ini adalah code untuk memperlihatkan waktu dan di generat log-nya setiap 1 detik
setInterval(() => {
	console.info(`Strat time at: ${new Date()}`);
}, 1000);
