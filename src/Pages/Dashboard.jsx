import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../style/Dashboard.scss';
import Coins from '../Components/Coins.jsx';
import coinGecko from '../APIs/coinGecko.jsx';
import {WatchListContext} from '../Context/marketWatchList.jsx';

function Dashboard() {

    const [coins, setCoins] = useState([]);
    const [selectedCoins, setSelectedCoins] = useState(["binancecoin", "my-defi-pet", "cryptoblades", "bsc-station","bitcoin"]);
    const {watchList, editCoin}  = useContext(WatchListContext);

    let timer = null;
    let timerSetup = 0;

   useEffect(() => {
            updatingCurrencyMarket();
            timer = setInterval(updatingCurrencyMarket, timerSetup);
            return () => {
                clearInterval(timer);
                console.log("Unmount Dashboard");
            }
   }, [])

    const updatingCurrencyMarket = async () => {
        timerSetup = 10000;
        const response = await coinGecko.get('/coins/markets/', {
            params: {
                vs_currency: 'usd',
                ids: watchList.join(','), 
            }
        })
        
        setCoins(response.data);
        console.log(Date().toLocaleString());
    }

    const handleChange = e => {
        // setSelectedCoins(e.target.value);
        if (e.key === "Enter") {
            if (e.target.value ==="") {

            } else {
                let temp_state = [...coins];
                let temp_selected = [...selectedCoins];
                let temp_element = { ...temp_state[e.target.id].id };

                 temp_element = e.target.value;
                temp_state[e.target.id].id = temp_element;

                for (let i = 0; i < 5; i++) {
                    temp_selected[i] = temp_state[i].id
                }
                setSelectedCoins(temp_selected);
            }
        }
    }






   return (
       <div className="dashboard">
           <div className="cardContainer">   

               {(coins.map((coin, index) => {
                   return <Coins coinID={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.current_price} total_volume={coin.total_volume} indexID={index} handleChange={handleChange}/>
                 
                   }))}
            </div>
        </div>
  );
}

export default Dashboard;
