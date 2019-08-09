import React,{Component} from 'react';

class Login extends Component{
    constructor(props){
      super(props)
    }
      render(){
      return(
        <div className="col-5 App">
       
                <div className="card rounded-3">
                    <div className="card-header">
                        <h3 className="mb-0">ورود</h3>
                    </div>
                    <div className="card-body">
                        <form className="form login" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                            <div className="form-group">
                                <label for="uname1">نام کاربری</label>
                                <input type="text" className="form-control form-control-lg rounded-0" name="uname1" id="uname1" required=""></input>
                                <div className="invalid-feedback">Oops, you missed this one.</div>
                            </div>
                            <div className="form-group">
                                <label>رمز عبور</label>
                                <input type="password" className="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password"></input>
                                <div className="invalid-feedback">Enter your password too!</div>
                            </div>
                           
                            <button type="submit" className="btn btn-info " id="btnLogin">ورود</button>
                        </form>
                    </div>
                   
                </div>
                

            


      
        

    </div>
      )
      }
    }
    export default Login;