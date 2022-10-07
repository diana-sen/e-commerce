import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'
const token = window.localStorage.getItem('token')
const config = {
  headers: { Authorization: `JWT ${token}` }
}

// Users
const registerUserService = (data) => axios.post(`${BASE_URL}/signup`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const getDataUser = (id) => axios.get(`${BASE_URL}/user/{${id}`, config)

// Products
const getProducts = (data) => axios.get(`${BASE_URL}/item`, data)

export {
  registerUserService,
  loginUserService,
  getDataUser,
  getProducts
}
