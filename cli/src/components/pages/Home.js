import React, { useState } from "react";
import Search from "../public/search";
import Status from "../public/status";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState(null);

    const getTxData = (txId) => {
        axios({
          method: "get",
          url: `http://localhost:4000/transactions/${txId}`,
        }).then((res) => {
          console.log(res);
        //setLoading(false);  // 로딩 화면
          setData(res);
        });
      };

    return (
        <div>
            <div className="searchBar-above-text">
                The Ethereum Blockchain Explorer
            </div>
            <div className="searchBar">
                <Search getTxData={getTxData} />
            </div>
            <div>
                {data ? <Status data={data.data} /> : null}
            </div>
        </div>
    );
                // 삼중연산자 사용한 이유
                // Cannot read properties of null (reading 'data') 이라는 오류를 대비해서 삼중연산자를 사용
                // Home에 null 값이 들어간 상태면 오류부터나기 때문에 되돌릴수 없이 흰배경만 나옴.\
}

export default Home;