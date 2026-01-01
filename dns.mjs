import dns from "dns/promises";

const address = await dns.lookup("buildwithangga.com");
console.info(address.address);
console.info(address.family);
