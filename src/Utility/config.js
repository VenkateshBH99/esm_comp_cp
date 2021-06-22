const IS_STAGING = true;
const IS_LOCAL = false;
const IS_PROD = false;
let apiUrl = null;
let downloadUrl=null;
if (IS_STAGING) {
    apiUrl = 'https://api.test.esamudaay.com/api/v1/orders/';
    downloadUrl= 'https://api.test.esamudaay.com/api/v1/orders/download?';
}
else if (IS_PROD) {
    apiUrl = 'https://api.prod.esamudaay.com/api/v1/orders/';
    downloadUrl= 'https://api.prod.esamudaay.com/api/v1/orders/download?';
    
}



const config = {
    apiUrl,
    downloadUrl,
};

export default config;
