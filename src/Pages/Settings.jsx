import React, { useState, useEffect, useContext } from 'react';
import '../style/Settings.scss';
import {
    Card, CardActions, CardContent, Button, TextField, InputAdornment, Tooltip  } from '@material-ui/core';
import {WatchListContext} from '../Context/marketWatchList.jsx';
import SaveIcon from '@material-ui/icons/Save';
import CheckIcon from '@material-ui/icons/Check';


function Settings() {

    const {watchList, editCoin}  = useContext(WatchListContext);
    const [fieldValidator, setFieldValidator] = useState([false, false, false, false, false]);
    const [fieldValue, setFieldValue] = useState([]);
    const [inputValue, setInputValue] = useState([]);
    const [uniqueValidator, setUniqueValidator] = useState([false, false, false, false, false]);


    const handleChange = e => {
        if (e.target.value) {
            
            let temp_state = [...fieldValidator];
            let temp_element = { ...temp_state[e.target.id] };
             temp_element = true;
            temp_state[e.target.id] = temp_element;
            setFieldValidator(temp_state);

            let temp_value = [...fieldValue];
            let temp_element_value = { ...temp_value[e.target.id] };
            temp_element_value = e.target.value;
             temp_value[e.target.id] = temp_element_value;
            setFieldValue(temp_value);

            let inputChecker = watchList.includes(e.target.value);
            let temp_uniqueValidator_state = [...uniqueValidator];
            let temp_uniqueValidator_element = { ...temp_uniqueValidator_state[e.target.id] };
            temp_uniqueValidator_element = inputChecker;
            temp_uniqueValidator_state[e.target.id] = temp_uniqueValidator_element;
            setUniqueValidator(temp_uniqueValidator_state);

            
        } else {
            let temp_state = [...fieldValidator];
            let temp_element = { ...temp_state[e.target.id] };
             temp_element = false;
            temp_state[e.target.id] = temp_element;
            setFieldValidator(temp_state);
           
        }
        
    }

    const handleResetField = (index) => {
        let temp_input_value = [...inputValue];
        let temp_element_input = { ...temp_input_value[index] };
        temp_element_input = "";
        temp_input_value[index] = temp_element_input;
        setInputValue(temp_input_value);
    }

   return (
        <div className="settings cardContainer">
            <Card className="card">
                <CardContent>
                    <form className="formInput" noValidate autoComplete="off">
                        {watchList.map((coins,index) => {
                            return (<TextField 
                            error={uniqueValidator[index] == true}
                            helperText="Currency is already listed."
                            className="formInput" id={index} onChange={handleChange}  value={inputValue[index]} label={coins} variant="filled" 
                            InputProps={{
                              endAdornment: (

                                <InputAdornment position="end">
                                    
                                        {fieldValidator[index] && !uniqueValidator[index] ? (
                                    <Tooltip title="Save Change">
                                        <CheckIcon className="icon" onClick={() => {
                                            editCoin(index, fieldValue[index])
                                            handleResetField(index)
                                            }}/> 
                                    </Tooltip>)    : ""}
                                    
                                </InputAdornment>
                                
                              ),
                            }}/> )
                        })}
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default Settings;
