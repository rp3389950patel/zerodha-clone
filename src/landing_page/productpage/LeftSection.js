import React from 'react';


function LeftSection({ imageURL, productName, productDesription, typeDemo, learnMore, googlePlay, appStore }
) {
    return (
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-6 p-2 mt-5'>
                    <img src={imageURL}></img>
                </div>
                <div className='col-6 p-5 mt-5' >
                    <h1>{productName} </h1>
                    <p className='p-3'>{productDesription}</p>
                    <div>
                        <a href={typeDemo} style={{ textDecoration: "none", marginLeft: "50px" }}> TypeDemo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none" }}>LearnMore <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-3  p-2' >
                        <a href={googlePlay} style={{ padding: "px" }}><img src="assets/images/googlePlayBadge.svg" ></img></a>
                        <a href={appStore}><img src="https://zerodha.com/static/images/appstore-badge.svg"></img></a>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default LeftSection;