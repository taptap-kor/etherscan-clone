import React, { useState } from "react";

const Search = ({ getTxData }) => {
    const [txId, setTxId] = useState("");
    return (
        <>
            <input value={txId} onChange={(e) => {setTxId(e.target.value);}}/>
            <button onClick={() => {
                console.log("클릭!");
                getTxData(txId);
                }}>Button
            </button>
        </>
    )
}

export default Search;
