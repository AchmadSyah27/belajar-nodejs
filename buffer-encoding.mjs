const buffer = Buffer.from("Andrian Soedjadi", "utf-8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("QW5kcmlhbiBTb2VkamFkaQ==", "base64");
console.info(bufferBase64.toString("utf-8"));
