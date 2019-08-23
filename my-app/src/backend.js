import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getNumbers = () =>{
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const addNumber = ({id, name, pNumber}) =>{
    const request = axios.post(baseURL, {id: id, name: name, pNumber: pNumber})
    return request.then(response => response.data)
}

const deleteNumber = (id) =>{
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response =>response.data)
}

const editNumber = (number, id) =>{ 
    const request = axios.put(`${baseURL}/${id}`, {...number, pNumber:number.pNumber})
    return request.then(response => response.data)
}

export default {baseURL, getNumbers, addNumber, deleteNumber, editNumber}