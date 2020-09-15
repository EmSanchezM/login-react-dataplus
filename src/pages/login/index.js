import React, { useState } from 'react'

import {Link} from 'react-router-dom'

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="auth-wrapper">
            <div className="auth-content text-center">
                <img src="./assets/images/logo.png" alt="LOGO" className="img-fluid mb-4"/>
                <div className="card borderless">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div class="card-body">
                                <h4 className="mb-3 f-w-400">Iniciar Sesion</h4>
                                <hr/>
                                <div className="form-group mb-3">
                                    <input  type="text" 
                                            className="form-control"
                                            value={email} 
                                            onChange={e=> setEmail(e.target.value)}
                                            placeholder="Correo"/>
                                </div>
                                <div class="form-group mb-4">
                                    <input type="password" 
                                           className="form-control" 
                                           value={password} 
                                           onChange={e=>setPassword(e.target.value)}
                                           placeholder="Contraseña"/>
                                </div>
                                <button className="btn btn-block btn-primary mb-4">Iniciar Sesion</button>
                                <p className="mb-0 text-muted">No tienes una cuenta? 
                                 <Link to="/" className="f-w-400">Registrate</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}