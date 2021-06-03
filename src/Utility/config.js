const IS_STAGING = true;
const IS_LOCAL = false;
const IS_PROD = false;
let apiUrl = null;
if (IS_STAGING) {
    apiUrl = 'https://api.test.esamudaay.com/api/v1/orders/';
}
else if (IS_PROD) {
    apiUrl = 'https://api.prod.esamudaay.com/api/v1/orders/';
}



const config = {
    apiUrl,
};

export default config;



