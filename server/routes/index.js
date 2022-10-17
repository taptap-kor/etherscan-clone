const express = require("express");
const router = express.Router();
const { transactionTracking } = require("../controller") // 함수를 가져올때는 중괄호가 존재해야함
// const transactionTracking = require("../controller")  // 이건 오류남.

router.get("/", (req, res) => {
    res.send("기본 경로!");
});

router.get("/transactions/:transactionHx", transactionTracking)

// ':' 는 필터 셀렉터라고 부른다
// ex) :hello 라고 한다면 input의 type 속성이 hello인 것을 선택하는것.

////////////////////////////아래가 중요/////////////////////////////

// 여기서는 transactionTracking의 return 값인 { transactionHx } 내의 type을 가져오는 것.
// {transactionHx} = {address: '0xc05e...eb08'} 형태로 저장된것임
// 즉 {transactionHx} = {address: '0xc05e...eb08'} 에서 value 값인 0xc05e...eb08 를 끌고옴.

module.exports = router;