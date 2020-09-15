import {useCallback, useContext, useState} from 'react'

import Context from '../context/UserContext'

import loginService from '../services/login'

export default function useUser(){
    const {jwt, setJWT} = useContext(Context)
    const [state, setState] = useState({cargando:false, error:false})

    const login = useCallback(({username, password})=>{
        loginService({username, password})
            .then(jwt =>{
                console.log('TOKEN: ',jwt)
                setState({cargando:false, error: false})
                setJWT(jwt)
            })
            .catch(err=>{
                setState({cargando:false, error: true})
                console.error('ERROR: ',err)
            })
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
    },[setJWT])

    return {
        estaLogeado: Boolean(jwt),
        loginCargando: state.cargando,
        loginError: state.error,
        login,
        logout
    }
}