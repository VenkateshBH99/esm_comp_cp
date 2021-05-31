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
import { orderFilters, paymentFilters } from '../Utility/filterList';
const getDateFormat = require('../Utility/datetime')
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
        payment_status: activePaymentFilter.join()
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
    console.log(activePaymentFilter)
  }, [filterCompleted, page])



  const rows = (tableData.map((item, key) => {


    return {
      id: item.order.order_id,
      Order_created_date: getDateFormat(item.order.created),
      last_update: getDateFormat(item.order.modified),
      Status: item.order.order_status,
      Order_amt: item.order.order_total,
      Item_Total: item.order.item_total,
      Delivery_Agent: item.order.da_info.name,
      Payment_Status: item.order.payment_info.status,
      Payment_mode: item.order.payment_info.via,
      Customer_name: item.order.customer_name,
      Customer_number: item.order.customer_phones,
      Customer_address: item.order.delivery_address

    }
  }))





  const columns = [
    { id: "id", label: "OrderId", minWidth: 50, align: 'left' },
    { id: "Order_created_date", label: "Order Created Date", minWidth: 100, align: 'left' },
    { id: "last_update", label: "Order Last Update Date", minWidth: 100, align: 'left' },
    { id: "Status", label: "Status", minWidth: 50, align: 'left' },
    { id: "Order_amt", label: "Order Amt", minWidth: 50, align: 'left' },
    { id: "Item_Total", label: "Item Total", minWidth: 50, align: 'left' },
    { id: "Delivery_Agent", label: "Delivery Agent", minWidth: 50, align: 'left' },
    { id: "Payment_Status", label: "Payment Status", minWidth: 50, align: 'left' },
    { id: "Payment_mode", label: "Payment Mode", minWidth: 50, align: 'left' },
    { id: "Customer_name", label: "Customer Name", minWidth: 50, align: 'left' },
    { id: "Customer_number", label: "Customer Number", minWidth: 50, align: 'left' },
    { id: "Customer_address", label: "Customer Address", minWidth: 50, align: 'left' },
  ];


  return (


    <div className={classes.root}>
      <Counter orderCount={orderCount} />
      <Button onClick={() => { setFilterCompleted(!filterCompleted) }}>
        <RefreshIcon >
          <h1 onClick={() => { setFilterCompleted(!filterCompleted) }}><i></i></h1>
        </RefreshIcon>
      </Button>
      <div style={{ marginTop: "2em" }}>
        <Grid container spacing={3}>
          <Filters handleOrderChange={onOrderFilterChange} handlePaymentChange={onPaymentFilterChange} activeOrderFilter={activeOrderFilter} activePaymentFilter={activePaymentFilter}></Filters>
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
                          <TableCell align="left">{row.Order_amt}</TableCell>
                          <TableCell align="left">{row.Item_Total}</TableCell>
                          <TableCell align="left">{row.Delivery_Agent}</TableCell>
                          <TableCell align="left">{row.Payment_Status}</TableCell>
                          <TableCell align="left">{row.Payment_mode}</TableCell>
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