import React, { useState, useEffect } from "react";
import axios from 'axios'
import Chart from "./Chart";

const IndividualChart = (props) => {
    const id = props.match.params.id;
    const [coin, setCoin] = useState();

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
            .then(response => setCoin(response.data))
            .catch(error => console.log("Error: IndividualChart: ", error))
    }, [])

    return (
        !coin ? <h1>Hey</h1> :
            <div className="charts">
                <div className="chart__container" key={coin.name}>
                    <h2 className="coin__title">{coin.name}</h2>
                    <h4 className="coin__symbol">{coin.symbol}</h4>
                    <div className="coin__logo">
                        <img src={coin.image.small} height="40" alt={coin.name} />
                    </div>
                    <Chart sparklineData={coin.market_data.sparkline_7d.price} />
                </div>
            </div>

    );
};
export default IndividualChart;
