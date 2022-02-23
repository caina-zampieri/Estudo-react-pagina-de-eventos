import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';

import './usuario-novo.css';

function NovoUsuario(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar(){
        setMsgTipo(null);


        if(!email || !senha){
            setMsgTipo('erro')
            setMsg('Você precisa informar o email e senha para fazer o cadastro!')
            return;
        }
    }

    return(
        <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

                <input onChange={(e) => setEmail(e.target.value) } type="email" className="form-control my-2" placeholder="email"/>
                <input onChange={(e) => setSenha(e.target.value) } type="password" className="form-control my-2" placeholder="senha"/>

                <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
                
                <div className="msg-login text-black text-center my-5">
                    {msgTipo === 'sucesso' && <span><strong>Wow!</strong> Usuario cadastrado com sucesso! &#128526;</span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128546;</span>}
                </div>

            </form>
        </div>
    )
}

export default NovoUsuario;