import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { getDateEpoch } from '../Utility/paramsConvert';

export default function DatePicker(props) {
    // The first commit of Material-UI
    const [fromDate, setFromDate] = React.useState(new Date());
    const [toDate, setToDate] = React.useState(new Date());
    const clickedRefFrom = React.useRef(false);
    const clickedRefTo= React.useRef(false);
    

    const handleDateFromChange = (date) => {
        clickedRefFrom.current = true;
        setFromDate(date);
        props.handleDateChange(String(getDateEpoch(date)).slice(0, 10), "ChangeFrom")



    };
    const handleDateToChange = (date) => {
        clickedRefTo.current = true;
        setToDate(date);
        props.handleDateChange(String(getDateEpoch(date)).slice(0, 10), "ChangeTo")



    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Orders From"
                    value={clickedRefFrom.current? fromDate:null}
                    onChange={handleDateFromChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Orders To"
                    format="dd/MM/yyyy"
                    value={clickedRefTo.current? toDate:null}
                    onChange={handleDateToChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />

            </Grid>
        </MuiPickersUtilsProvider>
    );
}