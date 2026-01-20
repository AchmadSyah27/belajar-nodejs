import { URL } from "url";

const hostname = new URL("https://achmadsyahtest.com/belajar?kelas=nodejs");

//Melakukan update informasi pada URL
hostname.host = "www.achmadsyahtest.com";
hostname.searchParams.append("status", "premium");

console.info("Bentuk dalam to string " + hostname.toString());
console.info("Bentuk dalam href " + hostname.href);
console.info("Bentuk dalam protocol " + hostname.protocol);
console.info("Bentuk dalam host " + hostname.host);
console.info("Bentuk dalam pathname " + hostname.pathname);
console.info("Bentuk dalam searchParams " + hostname.searchParams);
