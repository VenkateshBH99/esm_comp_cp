import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

const Filters = (props) => {
    return (
        <Grid item xs={2} style={{ padding: "0px" }}>
            <h3>Filters</h3>
            <div style={{ textAlign: "left", paddingLeft: "30px", paddingLeft: "30px" }}>
                <Checkbox
                    onChange={() => props.handleChange('ALL')}
                />
                <Typography style={{ display: "inline" }}>All</Typography>
            </div>
            <div style={{ textAlign: "left", paddingLeft: "30px", paddingLeft: "30px" }}>
                <Checkbox
                    onChange={() => props.handleChange('COMPLETED')}
                />
                <Typography style={{ display: "inline" }}>Completed</Typography>
            </div>
            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onChange={() => props.handleChange('CREATED')}
                />
                <Typography style={{ display: "inline", align: "left" }}>Created</Typography>
            </div>
            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onChange={() => props.handleChange('MERCHANT_UPDATED')}
                />
                <Typography style={{ display: "inline", align: "left" }}>Merchant Updated</Typography>
            </div>
            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onChange={() => props.handleChange('MERCHANT_CANCELLED')}
                />
                <Typography style={{ display: "inline", align: "left" }}>Merchant Cancelled</Typography>
            </div>
            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onChange={() => props.handleChange('ASSIGNED_TO_DA')}
                />
                <Typography style={{ display: "inline", align: "left" }}>Assigned to DA</Typography>
            </div>
            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onChange={() => props.handleChange('CUSTOMER_PENDING')}
                />
                <Typography style={{ display: "inline", align: "left" }}>Customer Pending</Typography>
            </div>

            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onChange={() => props.handleChange('PROVIDER_CANCELLED')}
                />
                <Typography style={{ display: "inline", align: "left" }}>Provider Cancelled</Typography>
            </div>

            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onChange={() => props.handleChange('ASSIGNED_TO_DA')}
                />
                <Typography style={{ display: "inline", align: "left" }}>Assigned to DA</Typography>
            </div>

            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onChange={() => props.handleChange('ASSIGNED_TO_DA')}
                />
                <Typography style={{ display: "inline", align: "left" }}>Assigned to DA</Typography>
            </div>

            <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onChange={() => props.handleChange('ASSIGNED_TO_DA')}
                />
                <Typography style={{ display: "inline", align: "left" }}>Assigned to DA</Typography>
            </div>


        </Grid>
    );
}

export default Filters;