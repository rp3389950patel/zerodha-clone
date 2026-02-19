import React from 'react';
function Avards() {
    return (
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='assets/images/largestBroker.svg ' ></img>

                </div>
                <div className='col-6 p-5 mt-5'>
                    <h2>largest stock broken in India</h2>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all voluems in India daily by tranding and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul><li><p>Features and Options</p></li></ul>
                            <ul><li><p>Commodity derivaties</p></li></ul>
                            <ul><li><p>Corrency derivaties</p></li></ul>
                        </div>
                        <div className='col-6'>
                            <ul><li><p>Stokes & IPOs</p></li></ul>
                            <ul><li><p>Direct mutual fonds</p></li></ul>
                            <ul><li><p>Bonds & securities</p></li></ul>
                        </div>
                    </div>
                    <img src='assets/images/pressLogos.png' style={{ width: "90%" }}></img>


                </div>
            </div>
        </div>

    )
}
export default Avards;


