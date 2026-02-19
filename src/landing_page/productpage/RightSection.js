import React from 'react';

function RightSection({ productName, productDesription, learnMore, imageURL }) {
    return (
        <div className='contain mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <a href={learnMore}>Learn more </a>
                </div>
                <div className='col-6'>
                    <img src={imageURL} style={{ width: "100%" }}></img>
                </div>
            </div>

        </div>
    );
}

export default RightSection;