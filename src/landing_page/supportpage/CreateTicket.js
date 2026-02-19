import React from 'react';


function CreateTicket() {
    return (
        <div className="row mt-5">
            {/* LEFT SECTION */}
            <div className="col-md-8">
                <div className="list-group">

                    {[
                        " Account Opening",
                        "Your Zerodha Account",
                        "Kite",
                        "Funds",
                        "Console",
                    ].map((item, i) => (
                        <button
                            key={i}
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3"
                        >
                            <span>{item}</span>
                            <span>⌄</span>
                        </button>
                    ))};

                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="col-md-4">
                <div className="border-start ps-4">

                    <div className="alert alert-warning small">
                        Due to high volume, reactivation requests may take an extra 24-48 business hours to process.
                    </div>

                    <div className='f-bold table-container border rounded '>
                        <div className=' table-container border rounded'>Ouick Share
                        </div>


                        <a href=''>1. Track account opening</a>
                        <br></br>
                        <a href=''>2. Track segment activation</a><br></br>
                        <a href=''>3. Intraday margins</a><br></br>
                        <a href=''>4. Kite user manual</a><br></br>
                        <a href=''>5. Learn how to create a ticket</a><br></br>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default CreateTicket;