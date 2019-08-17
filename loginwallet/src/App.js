import React, { Component } from 'react';
import Wallet from './components/Wallet/Wallet';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      firstActive:true,
      secondActive:false,
      loginPre:false,
      walletPre:true
    }
  }
  logtoggle(){
    this.setState({
      loginPre:true,
      walletPre:false
    })
  };
  waltoggle(){
    this.setState({
      loginPre:false,
      walletPre:true
    })
  };
  toggle(){
     let a= this.state.firstActive,b=this.state.secondActive;
    this.setState({
      firstActive:!a,
      secondActive:!b})
  };
  render() {
    let show=null;
    if (this.state.loginPre){
      show= <Loogin /> 
    }
    else if(this.state.walletPre){
      show= <Wallet firstone={this.state.firstActive} secondone={this.state.secondActive} click={this.toggle.bind(this)} />

    }

    return (
      <div className="container ">
        
        <div className="row ">
       

          {show}
          <div className="btnbox col-6">

          <button onClick={this.waltoggle.bind(this)} className="col-6 btn btn-lg btn-info"> Wallet</button>
          <button onClick={this.logtoggle.bind(this)} className="col-6 btn btn-lg btn-warning"> Login</button>
          </div>
          
        
        </div>
      </div>
    );
  }
}
export default App;
