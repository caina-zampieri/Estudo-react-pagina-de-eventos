import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

import {
    Link,
    BrowserRouter,
    Routes,
    Navigate,
    Route
  } from "react-router-dom";


import { useSelector, useDispatch} from 'react-redux';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const Dispatch = useDispatch();

    function logar(){
        
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso');
            setTimeout( () => {
                Dispatch({type: 'LOG_IN', usuarioEmail: email});
            }, 1000);
        }).catch(erro => {
            setMsgTipo('erro');
        });

    }

    return (

        <div className="login-content d-flex align-items-center">

            {
                useSelector(state => state.usuarioLogado) > 0 ? <Navigate to="/"/> : null
            }

        <form className="form-signin mx-auto">
            <div className="text-center mb-4">
            <i className="far fa-smile-wink text-white fa-5x"></i>
            <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>          
            </div>
        
            
            <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />          
            <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />          
        
            <button className="btn btn-lg btn-block btn-login" type="button" onClick={logar}>Logar!</button>

            <div className="msg-login text-white text-center my-5">
                {msgTipo === 'sucesso' && <span><strong>Wow!</strong> Você está conectado! &#128526;</span>}
                {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuario estão corretos! &#128546;</span>}
            </div>

            <div className="opcoes-login mt-5 text-center">
                <Link to="/recuperarsenha" className="mx-2">Recuperar Senha</Link>
                <span className="text-white">&#9733;</span>
                <Link to="/novousuario" className="mx-2">Quero Cadastrar</Link>
            </div>
        </form>   
    </div> 
    )
}
export default Login;