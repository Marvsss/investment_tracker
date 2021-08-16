import React from 'react';
import {
    Card, CardActions, CardContent, Typography, IconButton, Tooltip, FormControl, TextField, InputLabel, Select, MenuItem,
    } from '@material-ui/core';
import '../style/Card.scss';
import NotificationAddIcon from '@material-ui/icons/Notifications';

const Coins = ({ coinID, name, image, symbol, price, total_volume, indexID, handleChange }) => {

 

    return (
        
        <Card className='card'>
            <CardContent>
                <Typography className="cardHeader" color="textSecondary" gutterBottom>
                    <CardActions className="cardHeader" disableSpacing>
                        <Tooltip title="Type Currency ID">
                            <Typography variant="h4">
                                <p className="coins-label"> {name} </p>
                            </Typography>
                        </Tooltip>
                    </CardActions> 
                </Typography>

                <Typography variant="h4">
                    <h4 className='coins-price'> ${price.toLocaleString()} </h4>
                </Typography>
                <Typography variant="body2" component="p">
                    <p className='coins-price'> PHP {(price*50).toLocaleString()} </p>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Tooltip title="Get Notified">
                    <IconButton className="addAction" aria-label="Get Notified">
                        <NotificationAddIcon className="actionColor"  />
                    </IconButton>
                </Tooltip>
            </CardActions>  
        </Card>
    );
}

export default Coins;