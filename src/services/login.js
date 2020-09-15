//const API_URL = 'https://posweb2020.herokuapp.com/api'

export default function login({username, password}){
    return fetch(`/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then( resp =>{
        if(!resp.ok) throw new Error('ERROR AL INICIAR SESION')
        console.log(resp.json())
        return resp.json()
    }).then( resp=>{
        const {jwt} = resp
        return jwt
    })
}