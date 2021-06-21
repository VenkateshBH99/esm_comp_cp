import React from 'react';


import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import blockStyle from "../Utility/Style"

const useStyles = makeStyles(blockStyle);


const Counter = (props) => {
    const classes = useStyles();
    return (
        <div>

            <div className={classes.flexDiv1}>
                <Card raised={true} className={classes.card}>
                    <CardContent>
                        <Typography>Orders Count</Typography>
                        <Typography>{props.orderCount}</Typography>
                    </CardContent>
                </Card>
                {/* <Card raised={true} className={classes.card}>
                    <CardContent>
                        <Typography>Orders Sum</Typography>
                        <Typography>{0}</Typography>
                    </CardContent>
                </Card>
                <Card raised={true} className={classes.card}>
                    <CardContent>
                        <Typography>Orders Seller</Typography>
                        <Typography>{0}</Typography>
                    </CardContent>
                </Card>
                <Card raised={true} className={classes.card}>
                    <CardContent>
                        <Typography>Customer</Typography>
                        <Typography>{0}</Typography>
                    </CardContent>
                </Card> */}
            </div>
        </div>
    );

};
export default Counter;