import axios from 'axios';

let token = localStorage.getItem('token')  /* local o session? */

const config = {
    headers: {
        Group: 01,                //Aqui va el ID del equipo!!
        Authorization: 'Bearer ' + token
    }
}

const Get = (endpoint, id="") => {

    if(!endpoint) {
        console.log("El endpoint no fue definido");
    }

    axios.get(`https://ongapi.alkemy.org/api/${endpoint}${id}`, config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default Get