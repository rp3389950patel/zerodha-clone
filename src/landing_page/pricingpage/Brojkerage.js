import React from 'react';
function Brojkerage() {
    return (
        <div className='conatainer '>
            <div className='row p-5'>
                <h2 className='' style={{ fontSize: "20px", marginLeft: "25px" }}>Charges explained</h2>
                <div className='col-6 p-5 fs-10'>
                    <h4 className='fs-10' style={{ fontSize: "90%" }}>Securities/Commodities transaction tax</h4>
                    <p style={{ fontSize: "70%" }}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <p style={{ fontSize: "70%" }}>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    <h4 style={{ fontSize: "90%" }}>Transaction/Turnover Charges</h4>
                    <p style={{ fontSize: "70%" }}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

                    <p style={{ fontSize: "70%" }}> BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

                    <p style={{ fontSize: "70%" }}>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                    <p style={{ fontSize: "70%" }}>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                    <p style={{ fontSize: "70%" }}>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    <h4 style={{ fontSize: "90%" }}>Call & trade</h4>
                    <p style={{ fontSize: "70%" }}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                    <h4 style={{ fontSize: "90%" }}>NRI brokerage charges</h4>
                    <ul style={{ fontSize: "70%" }}>
                        <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.
                        </li>
                    </ul>
                    <h4 style={{ fontSize: "90%" }}>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h4>
                    <ul style={{ fontSize: "70%" }}>
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>

                    </ul>
                    <h4 style={{ fontSize: "90%" }}>Margin Trading Facility (MTF)</h4>
                    <ul style={{ fontSize: "70%" }}>
                        <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day
                        </li>
                        <li>MTF stocks are sold.
                            MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    </ul>
                </div>
                <div className='col-6 p-5 fs-10'>
                    <h4 style={{ fontSize: "90%" }}>GST</h4>
                    <p style={{ fontSize: "70%" }}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                    <h4 style={{ fontSize: "90%" }}>SEBI Charges</h4>
                    <p style={{ fontSize: "70%" }}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    <h4 style={{ fontSize: "90%" }}>DP (Depository participant) charges</h4>
                    <p style={{ fontSize: "70%" }}>DP (Depository participant) charges</p>
                    <p style={{ fontSize: "70%" }}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <h4 style={{ fontSize: "90%" }}>Pledging charges</h4>
                    <p style={{ fontSize: "70%" }}>₹30 + GST per pledge request per ISIN.</p>
                    <h4 style={{ fontSize: "90%" }}>AMC (Account maintenance charges)</h4>

                    <p style={{ fontSize: "70%" }}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>

                    <p style={{ fontSize: "70%" }}>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>

                    <h4 style={{ fontSize: "90%" }}>Corporate action order charges</h4>

                    <p style={{ fontSize: "70%" }}> ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

                    <h4 style={{ fontSize: "90%" }}>Off-market transfer charges</h4>

                    <p style={{ fontSize: "70%" }}>₹25 per transaction.</p>

                    <h4 style={{ fontSize: "90%" }}>Physical CMR request</h4>

                    <p style={{ fontSize: "70%" }}>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

                    <h4 style={{ fontSize: "90%" }}>Payment gateway charges</h4>

                    <p style={{ fontSize: "70%" }}>₹9 + GST (Not levied on transfers done via UPI)

                        Delayed Payment Charges</p>
                </div>
                <div className='' style={{ marginLeft: "5%" }}>
                    <h5>Disclaimer</h5>
                    <p style={{ fontSize: "70%" }} >For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
                </div>
            </div>

        </div >
    );
}

export default Brojkerage;