import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import config from '../Utility/config';
import blockStyle from '../Utility/Style';
import Counter from '../Components/Counter';
import Filters from '../Components/Filters';
import DatePicker from '../Components/DatePicker'
import { orderFilters, paymentFilters } from '../Utility/filterList';
import { getCustomerAddress, getDateFormat, getDeliveryAgentName } from "../Utility/paramsConvert";

const useStyles = makeStyles(blockStyle);



const Content = (props) => {
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);
  const [orderCount, setorderCount] = useState(0);
  const [orderSum, setorderSum] = useState(0);
  const [orderSeller, setorderSeller] = useState(0);
  const [customer, setcustomer] = useState(0);
  const [orderStatus, setorderStatus] = useState({});
  const [filterCompleted, setFilterCompleted] = useState(true)
  const [page, setPage] = useState(1);
  const { circleId, authToken } = useParams();
  const [activeOrderFilter, setActiveOrderFilter] = useState([]);
  const [activePaymentFilter, setActivePaymentFilter] = useState([]);
  const [fromEpochDate, setFromEpochDate] = useState();
  const [toEpochDate, setToEpochDate] = useState();

  const onOrderFilterChange = (filter) => {


    if (filter === "ALL_ORDER") {
      if (activeOrderFilter.length === orderFilters.length) {
        setActiveOrderFilter([]);
      } else {
        setActiveOrderFilter(orderFilters.map(filter => filter.value));
      }
    } else {
      if (activeOrderFilter.includes(filter)) {
        const filterIndex = activeOrderFilter.indexOf(filter);
        const newFilter = [...activeOrderFilter];
        newFilter.splice(filterIndex, 1);
        setActiveOrderFilter(newFilter);
      } else {
        setActiveOrderFilter([...activeOrderFilter, filter]);
      }
    }
    setFilterCompleted(!filterCompleted)
  }

  const onPaymentFilterChange = (filter) => {


    if (filter === "ALL_PAYMENT") {
      if (activePaymentFilter.length === paymentFilters.length) {
        setActivePaymentFilter([]);
      } else {
        setActivePaymentFilter(paymentFilters.map(filter => filter.value));
      }
    } else {
      if (activePaymentFilter.includes(filter)) {
        const filterIndex = activePaymentFilter.indexOf(filter);
        const newFilter = [...activePaymentFilter];
        newFilter.splice(filterIndex, 1);
        setActivePaymentFilter(newFilter);
      } else {
        setActivePaymentFilter([...activePaymentFilter, filter]);
      }
    }

    setFilterCompleted(!filterCompleted)
  }




  const changePage = (e, value) => {

    setPage(value)


  }

  const onDateEpochChange = (val, check) => {
    if (check === "ChangeFrom") {
      setFromEpochDate(val)

    }
    else if (check === "ChangeTo") {
      setToEpochDate(val)
    }
    setFilterCompleted(!filterCompleted)

  }


  useEffect(() => {

    const token = localStorage.getItem("authenticationToken");
    const circleID = localStorage.getItem("circle_id");

    //Making API call to backend
    axios.get(config.apiUrl, {
      headers: {
        'Authorization': "JWT " + { authToken }.authToken
      },
      params: {
        circle_id: { circleId }.circleId,
        order_status: activeOrderFilter.join(),
        page: page,
        payment_status: activePaymentFilter.join(),
        dt_from: fromEpochDate,
        dt_to: toEpochDate
      }
    })
      .then(response => {
        // alert("success")
        setTableData(response.data.results)
        setorderCount(response.data.count)
      })
      .catch(function (error) {
        alert("Unauthorize or slow internet")
      })

  }, [filterCompleted, page])



  const rows = (tableData.map((item, key) => {


    return {
      id: item.order.order_short_number,
      Order_created_date: getDateFormat(item.order.created),
      last_update: getDateFormat(item.order.modified),
      Status: item.order.order_status,
      Seller: item.order.business_name,
      Order_amt: item.order.order_total,
      Delivery_type: item.order.delivery_type,
      Delivery_charges: item.order.delivery_charges,
      Other_charges: item.order.other_charges,
      Item_Total: item.order.item_total,
      Delivery_Agent: getDeliveryAgentName(item.order.da_info),
      Payment_Status: item.order.payment_info.status,
      Payment_mode: item.order.payment_info.via,
      Payment_id: item.order.payment_info.payment_id,
      Customer_name: item.order.customer_name,
      Customer_number: item.order.customer_phones,
      Customer_address: getCustomerAddress(item.order.delivery_address)

    }
  }))





  const columns = [
    { id: "id", label: "OrderId", minWidth: 50, align: 'left' },
    { id: "Order_created_date", label: "Order Created Date", minWidth: 100, align: 'left' },
    { id: "last_update", label: "Order Last Update Date", minWidth: 100, align: 'left' },
    { id: "Status", label: "Status", minWidth: 50, align: 'left' },
    { id: "Seller", label: "Seller", minWidth: 50, align: 'left' },
    { id: "Order_amt", label: "Order Amt", minWidth: 50, align: 'left' },
    { id: "Delivery_Type", label: "Delivery Type", minWidth: 50, align: 'left' },
    { id: "Delivery_Charges", label: "Delivery Charges", minWidth: 50, align: 'left' },
    { id: "Other_charges", label: "Other Charges", minWidth: 50, align: 'left' },
    { id: "Item_Total", label: "Item Total", minWidth: 50, align: 'left' },
    { id: "Delivery_Agent", label: "Delivery Agent", minWidth: 50, align: 'left' },
    { id: "Payment_Status", label: "Payment Status", minWidth: 50, align: 'left' },
    { id: "Payment_mode", label: "Payment Mode", minWidth: 50, align: 'left' },
    { id: "Payment_id", label: "Payment id", minWidth: 50, align: 'left' },
    { id: "Customer_name", label: "Customer Name", minWidth: 50, align: 'left' },
    { id: "Customer_number", label: "Customer Number", minWidth: 50, align: 'left' },
    { id: "Customer_address", label: "Customer Address", minWidth: 50, align: 'left' },
  ];


  return (


    <div className={classes.root}>
      <Counter orderCount={orderCount} />
      <Button onClick={() => {
        setFromEpochDate();
        setToEpochDate();
        setFilterCompleted(!filterCompleted)
      }}>
        <RefreshIcon >
        </RefreshIcon>
      </Button>

      <div style={{ marginTop: "2em" }}>

        <Grid container spacing={3}>
          <Grid item xs={2} style={{ padding: "0px" }}>
            <DatePicker handleDateChange={onDateEpochChange} ></DatePicker>



            <Filters handleOrderChange={onOrderFilterChange} handlePaymentChange={onPaymentFilterChange} activeOrderFilter={activeOrderFilter} activePaymentFilter={activePaymentFilter}></Filters>
          </Grid>
          <Grid item xs={10}>
            <TableContainer component={Paper} style={{ height: "100%", width: "75%", display: "block", overflow: "auto" }}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (<TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,

                      }}
                    >
                      {column.label}
                    </TableCell>))}

                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => {

                    return row ?
                      (
                        <TableRow key={row.id}>
                          <TableCell align="left">{row.id}</ TableCell>
                          <TableCell align="left">{row.Order_created_date}</TableCell>
                          <TableCell align="left">{row.last_update}</TableCell>
                          <TableCell align="left">{row.Status}</TableCell>
                          <TableCell align="left">{row.Seller}</TableCell>
                          <TableCell align="left">{row.Order_amt}</TableCell>
                          <TableCell align="left">{row.Delivery_type}</TableCell>
                          <TableCell align="left">{row.Delivery_charges}</TableCell>
                          <TableCell align="left">{row.Other_charges}</TableCell>
                          <TableCell align="left">{row.Item_Total}</TableCell>
                          <TableCell align="left">{row.Delivery_Agent}</TableCell>
                          <TableCell align="left">{row.Payment_Status}</TableCell>
                          <TableCell align="left">{row.Payment_mode}</TableCell>
                          <TableCell align="left">{row.Payment_id}</TableCell>
                          <TableCell align="left">{row.Customer_name}</TableCell>
                          <TableCell align="left">{row.Customer_number}</TableCell>
                          <TableCell align="left">{row.Customer_address}</TableCell>

                        </TableRow>
                      ) : null
                  })}
                </TableBody>
              </Table>
            </TableContainer>

            <Pagination style={{ paddingTop: "20px", scrollPaddingBottom: "20px", alignContent: "center" }} count={Math.ceil(orderCount / 10)} onChange={changePage} showFirstButton showLastButton />
          </Grid>
        </Grid>


      </div>
    </div >
  );
};

export default Content;