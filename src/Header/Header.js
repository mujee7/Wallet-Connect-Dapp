import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import logo from "./logo.png";
import settings from "./settings.png";
import buttons from "./button.png";
import $ from "jquery";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useStateContext} from '../context'
const Web3 = require("web3");
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Header() {
  const [open, setOpen] =useState(false);
  const [connection, setConnection] =useState("Connect Wallet");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {Balance,setBalance}=useStateContext()
  


  const Connect = async () => {
    if (window.ethereum) {
      console.log(window.ethereum)
     const accounts= await window.ethereum.request({method: 'eth_requestAccounts'});
      window.web3 = new Web3(window.ethereum);
      const web3= new Web3(window.ethereum);
      console.log(accounts[0])
      const balance =await window.web3.eth.getBalance( accounts[0])
      setBalance(web3.utils.fromWei(balance,"ether"))
      console.log(balance)
      setConnection(accounts[0].slice(0, 10))
      setOpen(false)
      return true;
      
    }
    return false;
  }
  
  
  return (
    <>
    <div className="head container-fluid ">
      <div className="fixed">
        <div className="row ">
          <div className="col-lg-2 col-md-2 col-sm-2 col-2 logo center ">
            <img src={logo} className="center"></img>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-4 col-1 ">
            <div className="row margintop">
              <div className="col-lg-2 col-md-3 col-sm-2 col-2 bold">Swap</div>
              <div className="col-lg-2 col-md-3 col-sm-2 col-2  bold">
                Tokens
              </div>
              <div className="col-lg-2 col-md-3 col-sm-2 col-2  bold">
                Pools
              </div>
              <div className="col-lg-2 col-md-3 col-sm-2 col-2 bold">
                Liquidity
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 col-9 ">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-7  end">
                <button className="wallet" onClick={handleOpen}>{connection}
                </button>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-3 col-2  end">
                <button className="check">
                  <img src={settings} className="settings"></img>
                </button>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-3 col-2 ">
                <button className="check">
                  <img src={buttons} className="settings"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row lol">
        <div className=" col-sm-3 col-3 bold mSize">Swap</div>
        <div className="col-sm-3 col-3 bold mSize">Tokens</div>
        <div className="col-sm-3 col-3 bold mSize">Pools</div>
        <div className="col-sm-3 col-3 bold mSize">Liquidity</div>
      </div>
    </div>
    
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <button onClick={Connect}>MetaMask</button>
        </Box>
      </Modal>
      </>
  );
}
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".head").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".head").removeClass("active");
    }
  });
});

export default Header;
