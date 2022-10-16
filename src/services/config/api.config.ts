const isProduction = true;
const port = 4000;

const productionUrl = " http://127.94.0.1"
const urlTail = `:${port}/api/v1`

export const baseUrl = isProduction ? productionUrl + urlTail : "http://localhost" + urlTail

console.log("URL: " + baseUrl)
