import React, { createContext, useState, useEffect } from 'react';


export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
    const [watchList, setWatchList] = useState(
        localStorage.getItem("watchList").split(",") || 
        ["binancecoin", "my-defi-pet", "cryptoblades", "bsc-station","bitcoin"]);
    
    useEffect(() => {
        localStorage.setItem("watchList", watchList);
    }, [watchList])


    const editCoin = (coinIndex, replaceWith) => {
            let temp_state = [...watchList];
            let temp_element = { ...temp_state[coinIndex] };
            temp_element = replaceWith;
            temp_state[coinIndex] = temp_element;
            setWatchList(temp_state);
            console.log(coinIndex);
            console.log(replaceWith);
            console.log(watchList);
    }

    return (
        <WatchListContext.Provider value={{watchList,editCoin}}>
                {props.children}
        </WatchListContext.Provider>
    )
}