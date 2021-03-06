import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import store from '../src/store/';
import {Provider}  from 'react-redux';

/*paginas*/
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/novousuario" element={<NovoUsuario />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
