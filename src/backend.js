import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getNumbers = () =>{
    const request = axios.get(baseURL)
    return request.then(response => {
        return response.data
    })
}

const addNumber = number =>{
    
    const request = axios.post(baseURL, number)
    console.log(baseURL)
    console.log(number)
    return request.then(response =>{
        console.log(response)
        return response.data
    })
}

export default {baseURL, getNumbers, addNumber}