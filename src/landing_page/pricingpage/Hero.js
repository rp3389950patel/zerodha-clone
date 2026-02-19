import React from 'react';
function hero() {
    return (
        <div className='conatiner mt-5'>
            <div className='row text-center'>
                <h1>Charges</h1>
                <p className='text-muted fs-4 p-2 '>List of all charges and taxes</p>
                <div className='col-4 p-5 mt-5'>
                    <img src='https://zerodha.com/static/images/pricing-eq.svg' style={{ width: "50%", marginLeft: "50px" }}></img>
                    <h2 className='fs-4 p-3'>Free equity delivery</h2>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

                </div>
                <div className='col-4 p-5 mt-5'><img src='https://zerodha.com/static/images/other-trades.svg' style={{ width: "50%" }}></img>
                    <h2 className='fs-4 p-3'>Intraday and F&O trades</h2>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5 mt-5'>
                    <img src='https://zerodha.com/static/images/pricing-eq.svg' style={{ width: "50%" }}></img>
                    <h2 className='fs- 4 p-3'>Free direct MF</h2>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            <div className=' container mt-5 p-5'>
                <h2 className='fs-4 mb-4'>Charges for account opening</h2>
                <div className='table-container border rounded'>
                    <table className='table mb-0 text-muted'>
                        <thead>
                            <tr>
                                <th>Type of account</th>
                                <th>	Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Online account</td>
                                <td><span className='badge bg-success'>Free</span></td>
                            </tr>
                            <tr >
                                <td style={{ backgroundColor: "rgb(249, 249, 249)" }}>Offline account</td>
                                <td style={{ backgroundColor: "rgb(249, 249, 249)" }}><span className='badge bg-success '>Free</span></td>
                            </tr>

                            <tr>
                                <td>NRI account (offline only)</td>
                                <td>	₹ 500</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: "rgb(249, 249, 249)" }}>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td style={{ backgroundColor: "rgb(249, 249, 249)" }}>	₹ 500</td>

                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>



        </div>
    );
}

export default hero;