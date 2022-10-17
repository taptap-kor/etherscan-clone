import React from "react";

const Status = ({ data }) => {
    return (
        <div>
            <div>
                <span className="key">Transaction Hash : </span>
                <span className="value">{data.hash}</span>
            </div>
            <div>
                <span className="key">Block Number : </span>
                <span className="value">{data.blockNumber}</span>
            </div>
            <div>
                <span className="key">From : </span>
                <span className="value">{data.from}</span>
            </div>
            <div>
                <span className="key">To : </span>
                <span className="value">{data.to}</span>
            </div>
            <div>
                <span className="key">Value : </span>
                <span className="value">{data.value}</span>
            </div>
            <div>
                <span className="key">Gas Price : </span>
                <span className="value">{data.gasPrice}</span>
            </div>
        </div>

    );
}

export default Status;