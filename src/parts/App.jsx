import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/estilos.css';
import Logo from './img/logof.svg';
function App() {
  return (
    <div>
        <div className="App">
            <div className="row linea1" >
                <div className="col-sm-6">
                    <div className="card border-0 carta1">
                    <div className="card-body">
                        
                        <form className="formulario">
                            <div>
                                
                                <div className="mb-3 ">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control border-1" id="exampleInputEmail1 " aria-describedby="emailHelp"></input>
                                    <div id="emailHelp" className="form-text">Debes de colocar el Correo electronico. </div>
                                </div>
                                
                    
                                
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control border-1" id="exampleInputPassword1"></input>
                                </div>
                    
                    
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required></input>
                                    <label className="form-check-label" for="exampleCheck1">No soy un robot</label>
                                </div>
                    
                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" className="btn btn-dark btn1" >Login</button>
                                </div>
                                <div className="btn-group" role="group" aria-label="Third group">
                                    <button type="button" className="btn btn-dark">Register</button>
                                    <button type="button" className="btn btn-dark">without account</button>
                                </div>
                            </div>
                        </form>         
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 ">
                    <div className="card border-0 carta2">
                    <div className="card-body ">
                        <div className="bl">
                            <img className='imageng' src={Logo} alt="" width="60%" height="60%"></img>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App