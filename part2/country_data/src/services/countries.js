import axios from 'axios'

const baseUrl = "https://restcountries.com/v3.1"

const getAll = () => (
    axios.get(`${baseUrl}/all`)
        .then(res => res.data)
)

const getOne = name => (
    axios.get(`${baseUrl}/name/${name}`)
    .then(res => res.data)
)

const services = {
    getAll,
    getOne
}

export default services