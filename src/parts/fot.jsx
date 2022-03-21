import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './img/logof.svg'
import './css/estilos.css'
function fot() {
  return (
    <div>
        <footer class="pie bg-light navbar-light">
            <div class="container-fluid contnav">
                <div class="navbar-brand" href=".">
                <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
                Bootstrap
                </div>
            </div>
        </footer>
    </div>
  )
}

export default fot