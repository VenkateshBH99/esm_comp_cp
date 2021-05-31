


const getDateFormat = (date) => {
    let d = new Date(date);
    return d.toDateString() + " | " + formatAMPM(d);
};

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
}
const getCustomerAddress = (data) => {
    let resData;
    try {
        resData = data.pretty_address;
    }
    catch {
        resData = null;
    }

    return resData
};
const getDeliveryAgentName = (data) => {
    let resData;
    try {
        resData = data.profile_name + "-" + data.user_profile.phone;
    }
    catch {
        resData = null;
    }

    return resData
};

export { getCustomerAddress, getDateFormat, getDeliveryAgentName };

