import React from 'react';
import { Card, CardActionArea } from '@material-ui/core';
import '../style/Card.scss';
import AddIcon from '@material-ui/icons/Add';

const AddCoins = ({ randomQuestion }) => {


    return (
        <Card className='addCard'>
           
            <CardActionArea>
                <h3 className="coins-price">
                    <AddIcon fontSize="large" className=" actionColor" />
                </h3>
                </CardActionArea>
        </Card>
    );
}

export default AddCoins;