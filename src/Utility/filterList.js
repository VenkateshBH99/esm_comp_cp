const orderFilters = [{
    id: 11,
    label: "Created",
    value: "CREATED"
},
{
    id: 12,
    label: "Completed",
    value: "COMPLETED"
},
{
    id: 13,
    label: "Assigned_to_DA",
    value: "ASSIGNED_TO_DA"
},
{
    id: 14,
    label: "Merchant Updated",
    value: "MERCHANT_UPDATED"
},
{
    id: 15,
    label: "Customer Pending",
    value: "CUSTOMER_PENDING"
},
{
    id: 16,
    label: "Provider Cancelled ",
    value: "PROVIDER_CANCELLED"
},
{
    id: 17,
    label: "Ready for Pickup ",
    value: "READY_FOR_PICKUP"
},
{
    id: 18,
    label: "Merchant Accepted",
    value: "MERCHANT_ACCEPTED"
},
{
    id: 19,
    label: "Requesting_to_DA",
    value: "REQUESTING_TO_DA"
},

{
    id: 20,
    label: "Picked Up By DA",
    value: "PICKED_UP_BY_DA"
}];

const paymentFilters = [


    {
        id: 12,
        label: "Initiated",
        value: "INITIATED"
    },
    {
        id: 13,
        label: "Approved",
        value: "APPROVED"
    },
    {
        id: 14,
        label: "Rejected",
        value: "REJECTED"
    },
    {
        id: 15,
        label: "Success",
        value: "SUCCESS"
    },
    {
        id: 16,
        label: "Fail ",
        value: "FAIL"
    },
    {
        id: 17,
        label: "Refund Success ",
        value: "REFUND_SUCCESS"
    },
    {
        id: 18,
        label: "Refund Fail",
        value: "REFUND_FAIL"
    },
    {
        id: 19,
        label: "Pending",
        value: "PENDING"
    }];

const deliveryFilters = [
    {
        id: 12,
        label: "Self Pickup",
        value: "SELF_PICK_UP"
    },
    {
        id: 13,
        label: "DA Delivery",
        value: "DA_DELIVERY"
    }];

const paymentModeFilters = [
    {
        id: 12,
        label: "Cash On Delivery",
        value: "COD"
    },
    {
        id: 14,
        label: "UPI",
        value: "UPI"
    },
    {
        id: 15,
        label: "NetBanking",
        value: "NETBANKING"
    },
    {
        id: 16,
        label: "Wallet",
        value: "WALLET"
    },
    {
        id: 17,
        label: "Card",
        value: "CARD"
    },
];    


export { orderFilters, paymentFilters, deliveryFilters, paymentModeFilters};