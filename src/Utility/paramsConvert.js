


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
    try {
        return data.pretty_address;
    }
    catch {
        return null;
    }
};
const getDeliveryAgentName = (data) => {
    try {
        return data.profile_name + "-" + data.user_profile.phone;
    }
    catch {
        return null;
    }
};

const getDateEpoch = (date) => {
    return Date.parse(date)
}



export { getCustomerAddress, getDateFormat, getDeliveryAgentName, getDateEpoch };

