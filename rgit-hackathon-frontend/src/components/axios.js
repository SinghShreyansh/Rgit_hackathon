import axios from "axios"

const instance = axios.create({
    // The API {cloud function} URL
    baseURL : 'http://localhost:9000'   
})

export default instance