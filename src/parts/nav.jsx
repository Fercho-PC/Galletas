import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from'./img/logof.svg';
import './css/estilos.css'

function nav() {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <botoon class="navbar-brand" href='./fot'>
                    <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
                    My app
                </botoon>
            </div>
        </nav>
    </div>
  )
}

export default nav