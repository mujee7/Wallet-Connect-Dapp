import React from "react";
import "./Swap.css";
import logo from "./logo.png";
import drop from "./drop.png";
import {useStateContext} from '../context'
function Swap() {
  const {Balance}=useStateContext()
  return (
    <div className="swap">
      <div className="swapHead">
        <div>Swap</div>
      </div>
      <div className="container BalanceDiv">
      <div className="row">
        <div className=" col"> </div>
        <div className=" col"> Balance: {Balance}</div>
        </div>
      </div>
      <div className="Input">
        <input type={"number"} placeholder={"0"}></input>
        <button className="ModelOpen">
          <img src={logo} className="Blocklogo"></img>
          <a className="BlockName">ETH</a>
          <img src={drop} className="Blocklogo"></img>
        </button>
      </div>

      <div className="Input">
        <input type={"number"} placeholder={"0"}></input>
        <button className="ModelOpen">
          <img src={logo} className="Blocklogo"></img>
          <a className="BlockName">ETH</a>
          <img src={drop} className="Blocklogo"></img>
        </button>
      </div>
      <div className="SwapDiv">
        <button className="SwapButton">Swap now</button>
      </div>
    </div>
  );
}

export default Swap;
