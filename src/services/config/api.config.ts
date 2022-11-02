const isProduction = true;
const port = 4000;


const productionUrl = getHost();
const urlTail = `:${port}/api/v1`

export const baseUrl = isProduction ? productionUrl + urlTail : "http://localhost" + urlTail

function getHost() {
   const host = window.location.hostname;
   console.log("host")
   console.log(host)
   return host;
}
