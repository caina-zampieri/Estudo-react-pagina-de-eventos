import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function Navbar() {
    const Dispatch = useDispatch();
    return(

        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-white font-weight-bold">Eventos</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                
                <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                {
                    useSelector(state => state.usuarioLogado) > 0 ?
                    <>
                        <li className="nav-item active"><Link className="nav-link" to="/">Publicar Evento</Link></li>
                        <li className="nav-item active"><Link className="nav-link" to="/">Meus Eventos</Link></li>
                        <li className="nav-item active"><a className="nav-link pointer text-white" id='sair' onClick={ () => Dispatch({type: 'LOG_OUT'}) }>Sair</a></li>
                    
                    </>
                    :
                    <>

                        <li className="nav-item active"><Link className="nav-link" to="/novousuario">Cadastrar</Link></li>
                        <li className="nav-item active"><Link className="nav-link" to="/login">Login</Link></li>
                    </>
                }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;