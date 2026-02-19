import React from 'react';




function Hero() {
    return (
        <section className='container-fluid m-0 p-0' id='kan'>
            <div className='px-5 pt-5'>
                <div className=' d-flex  justify-content-between ' >
                    <p className='fs-3 '><a href='' style={{ textDecoration: "none", marginLeft: "10px" }}>Support Portal</a></p>
                    <button className=' btn btn-primary fs-5 mb-5 ' style={{ width: "10%", margin: "0 auto", height: "10%", marginLeft: "70%" }}><span>My Ticket</span></button>
                </div>
                <div className='p-2' >

                    <input type='text' className='from-control mb-5  text-muted fs-5 p-3' style={{ width: "90%", height: "60px", border: "white" }} placeholder='Eg:How do I open my account ,How do i activity F&Q'></input>

                </div>

            </div>






        </section>





    );
}

export default Hero;