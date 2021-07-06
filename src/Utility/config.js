const IS_STAGING = process.env.REACT_APP_IS_STAGING; // false if is_staging not present
const IS_LOCAL = process.env.REACT_APP_IS_LOCAL;
const IS_PROD = process.env.REACT_APP_IS_PROD;


const eSamudaayBaseUrl=process.env.REACT_APP_ESAMUDAAY_URL;
const getOrderListUrl=eSamudaayBaseUrl+"api/v1/orders/";
const downloadOrderListUrl=eSamudaayBaseUrl+"api/v1/orders/download?";



const config = {
    getOrderListUrl,
    downloadOrderListUrl,
};

export default config;
