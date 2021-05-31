import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

import { orderFilters, paymentFilters } from '../Utility/filterList';
import DatePicker from '../Components/DatePicker';


const Filters = (props) => {
    return (
        <div>

            <h3>Order Filters</h3>
            <div style={{ textAlign: "left", paddingLeft: "30px", paddingLeft: "30px" }}>
                <Checkbox
                    onChange={() => props.handleOrderChange('ALL_ORDER')
                    }
                    checked={props.activeOrderFilter.length === orderFilters.length}
                />
                <Typography style={{ display: "inline" }}>All</Typography>
            </div>

            {
                orderFilters.map(filter => (
                    <React.Fragment>
                        <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                            <Checkbox
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                onChange={() => props.handleOrderChange(filter.value)
                                }
                                checked={props.activeOrderFilter.includes(filter.value)}
                            />
                            <Typography style={{ display: "inline", align: "left" }}>{filter.name}</Typography>
                        </div>
                    </React.Fragment>
                ))
            }
            <h3>Payment Filters</h3>
            <div style={{ textAlign: "left", paddingLeft: "30px", paddingLeft: "30px" }}>
                <Checkbox
                    onChange={() => props.handlePaymentChange('ALL_PAYMENT')
                    }
                    checked={props.activePaymentFilter.length === paymentFilters.length}
                />
                <Typography style={{ display: "inline" }}>All</Typography>
            </div>

            {
                paymentFilters.map(filter => (
                    <React.Fragment>
                        <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                            <Checkbox
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                onChange={() => props.handlePaymentChange(filter.value)
                                }
                                checked={props.activePaymentFilter.includes(filter.value)}
                            />
                            <Typography style={{ display: "inline", align: "left" }}>{filter.name}</Typography>
                        </div>
                    </React.Fragment>
                ))
            }


        </div>

    );
}

export default Filters;