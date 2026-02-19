import React from 'react';


function Univers() {
    return (
        <div className='container '>
            <div className='row text-center mt-5'>

                <h1>The Zerodha Universe</h1>
                <p className='p-3 text-muted fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3'>
                    <img src='https://zerodha.com/static/images/partners/zerodhafundhouse.png' style={{ width: "60%" }}></img>
                    <p className='p-3 fs-10 text-muted'>
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-4 p-4'>
                    <img src='assets/images/sensibullLogo.svg' style={{ width: "60%" }}></img>
                    <p className='p-3 fs-10 text-muted'>
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-4 p-4'>
                    <img src='https://zerodha.com/static/images/partners/tijori.svg' style={{ width: "50%" }}></img>
                    <p className='p-3 fs-10 text-muted'>
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className='col-4 p-4'>
                    <img src='https://zerodha.com/static/images/products/streak-logo.png' style={{ width: "60%" }}></img>
                    <p className='p-3 fs-10 text-muted'>Systematic trading platform
                        that allows you to create and backtest strategies without coding
                    </p>
                </div>
                <div className='col-4 p-4'>
                    <img src='https://zerodha.com/static/images/products/smallcase-logo.png' style={{ width: "60%" }}></img>
                    <p className='p-3 fs-10 text-muted'>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='https://zerodha.com/static/images/products/ditto-logo.png' style={{ width: "60%" }}></img>
                    <p className='p-3 fs-10 text-muted'>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Univers;