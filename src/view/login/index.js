import React from "react";
import Style from "./login.css"

function Login() {
    return (
        <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto">
            <div className="text-center mb-4">
            <i className="far fa-smile-wink text-white fa-5x"></i>
            <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>          
            </div>
        
            
            <input   type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />          
            <input type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />          
        
            
            <button className="btn btn-lg btn-block btn-login" type="button">Logar</button>

            <div className="msg-login text-white text-center my-5">
            </div>

            <div className="opcoes-login mt-5 text-center">
            </div>
        </form>   
    </div> 
    )
}
export default Login;