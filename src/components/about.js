import React from 'react';

const About = () => {
    return (
        <div className="about-div">
            <h1>Powered By <a href='https://en.m.wikipedia.org/wiki/Cryptocurrency'>Wikipedia</a></h1>
            <h2>What is CryptoCurrency</h2>
            <p>A cryptocurrency (or crypto currency) is a digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets.
                <br />Cryptocurrencies use decentralized control as opposed to centralized digital currency and central banking systems.</p>
            <h2>History of CryptoCurrency</h2>
            <p>In 1983, the American cryptographer David Chaum conceived an anonymous cryptographic electronic money called ecash.
               <br /> Later, in 1995, he implemented it through Digicash, an early form of cryptographic electronic payments which required user software in order to withdraw notes from a bank and designate specific encrypted keys before it can be sent to a recipient.
               <br />  This allowed the digital currency to be untraceable by the issuing bank, the government, or any third party. </p>
        </div>
    )
}

export default About;
