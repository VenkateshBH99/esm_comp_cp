import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';
import axios from 'axios';

const getDateFormat = require('../Utility/datetime')
const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
  flexDiv1: {
    display: "flex",
    justifyContent: "space-around"
  },
  card: {
    width: "20%",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



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


  const handleChange = (e, value) => {


    if (value) {

      let x = orderStatus;
      x['COMPLETED'] = true;
      setorderStatus(x)

    }
    else {
      let x = orderStatus;
      delete x.COMPLETED;
      setorderStatus(x);
    }
    setFilterCompleted(!filterCompleted)
  }
  const changePage = (e, value) => {

    setPage(value)


  }

  useEffect(() => {
    const token = localStorage.getItem("authenticationToken");
    const circleID = localStorage.getItem("circle_id");

    axios.get('http://127.0.0.1:8000/api/v1/orders/', {
      headers: {
        'Authorization': "JWT " + token
      },
      params: {
        circle_id: circleID,
        order_status: Object.keys(orderStatus).join(','),
        page: page,

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
  const rows = tableData.map((item, key) => {

    return {
      id: item.order.order_id,
      Order_created_date: getDateFormat(item.order.created),
      last_update: getDateFormat(item.order.modified),
      Status: item.order.order_status,
      Order_amt: item.order.order_total,
      Item_Total: item.order.item_total,
      Payment_Status: item.order.payment_info.status,
      Payment_mode: item.order.payment_info.via,
      Customer_name: item.order.customer_name,
      Customer_number: item.order.customer_phones,
      Customer_address: item.order.delivery_address
    }
  })



  return (
    <div className={classes.root}>
      <div className={classes.flexDiv1}>
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography>Orders Count</Typography>
            <Typography>{orderCount}</Typography>
          </CardContent>
        </Card>
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography>Orders Sum</Typography>
            <Typography>{orderSum}</Typography>
          </CardContent>
        </Card>
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography>Orders Seller</Typography>
            <Typography>{orderSeller}</Typography>
          </CardContent>
        </Card>
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography>Customer</Typography>
            <Typography>{customer}</Typography>
          </CardContent>
        </Card>
      </div>
      <div style={{ marginTop: "2em" }}>
        <Grid container spacing={3}>
          <Grid item xs={2} style={{ padding: "0px" }}>
            <h3>Filters</h3>
            <div style={{ textAlign: "left", paddingLeft: "30px", paddingLeft: "30px" }}>
              <Checkbox
                onChange={handleChange}
              />
              <Typography style={{ display: "inline" }}>Completed</Typography>
            </div>
            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
              <Checkbox
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <Typography style={{ display: "inline", align: "left" }}>Created</Typography>
            </div>
            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
              <Checkbox
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <Typography style={{ display: "inline", align: "left" }}>Merchant Updated</Typography>
            </div>
            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
              <Checkbox
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <Typography style={{ display: "inline", align: "left" }}>Merchant Cancelled</Typography>
            </div>
            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
              <Checkbox
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <Typography style={{ display: "inline", align: "left" }}>Created</Typography>
            </div>

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
                          <TableCell align="left">{row.Order_amt}</TableCell>
                          <TableCell align="left">{row.Item_Total}</TableCell>
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
    </div>
  );
};

export default Content;