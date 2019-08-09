import React,{Component} from 'react';

class Wallet extends Component{
    constructor(props){
      super(props)
    }
      render(){
      return(
         <div className="col-5 App">

        

<div class="card ">
  <div class="card-header ">
    افزایش اعتبار 
  </div>
  <div class="card-body">
    <h5 class="card-title">موجودی فعلی شما : 2540 ریال </h5>
    {/* <p class="card-text"> افزایش اعتبار از طریق </p> */}
    <div class="list-group">
  
  <a href="#1" onClick={this.props.click} className={"list-group-item list-group-item-action " +(this.props.firstone ? "active": "")}> پرداخت آنلاین </a>
  <a href="#2" onClick={this.props.click} className={"list-group-item list-group-item-action " +(this.props.secondone ? "active": "")}>پرداخت با توکن </a>
</div>
  </div>
  <div className="card-footer">
    {
     
      this.props.firstone ? <input placeholder="مبلغ افزایش اعتبار ( ریال )" className="form-control" type="text"/>
      :  <input placeholder="توکن شما" className="form-control" type="text"/>
      

    }
<button className="btn btnred">بستن </button>
<button className="btn btngreen">پرداخت </button>
  </div>
</div>

</div>
       
      )
}
      
}
export default Wallet;