let IS_STAGING = true;
let IS_LOCAL = false;
let IS_PROD = false;

if (IS_STAGING) {
    const apiUrl = 'https://api.test.esamudaay.com/api/v1/orders/';
}
else if (IS_PROD) {
    const apiUrl = 'https://api.prod.esamudaay.com/api/v1/orders/';
}



const config = {
    apiUrl,
};

export default config;



