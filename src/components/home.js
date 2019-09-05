import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-div">
            <h1>Welcome to Crypto Tracker!</h1>
            <p>We keep track of the value of the most popular cryptocurrencies in an easy to read map!</p>
            <Link to='/charts'><button>Get Started</button></Link>
        </div>
    )
}

export default Home;
