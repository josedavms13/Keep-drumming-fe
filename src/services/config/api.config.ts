const isProduction = true;
const port = 4000;


const productionUrl = window.location.hostname
const urlTail = `:${port}/api/v1`

export const baseUrl = isProduction ? productionUrl + urlTail : "http://localhost" + urlTail
