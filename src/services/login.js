const API_URL = 'https://posweb2020.herokuapp.com/api'

export default function login({username, password}){
    fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then( resp =>{
        if(!resp.ok) throw new Error('ERROR AL INICIAR SESION')
        return resp.json()
    }).then( resp=>{
        const {jwt} = resp
        return jwt
    })
}