import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';



import blockStyle from '../Utility/Style';



const Filters = (props) => {
    return (
        <Grid item xs={2} style={{ padding: "0px" }}>
            <h3>Filters</h3>
            <div style={{ textAlign: "left", paddingLeft: "30px", paddingLeft: "30px" }}>
                <Checkbox
                    onChange={props.handleChange}
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
    );
}

export default Filters;