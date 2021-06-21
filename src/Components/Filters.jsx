import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import MultiSelect from "react-multi-select-component";
// import { orderFilters, paymentFilters } from '../Utility/filterList';
import DatePicker from '../Components/DatePicker';


const Filters = (props) => {
    

  

  const [selected, setSelected] = useState([]);
  
  const handleChange = (e) => {

    setSelected(Array.isArray(e) ? e.map( x => (x.value)) : []);
    props.handleFilterChange(e);
    
  }


    return (
        <div>
             
      <MultiSelect
        options={props.filterUtility}
        value={props.filterUtility.filter(obj => selected.includes(obj.value))}
        onChange={handleChange}
        labelledBy="Select"
      />

        </div>

    );
}

export default Filters;