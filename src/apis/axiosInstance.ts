import axios, { AxiosInstance } from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/'

export const axiosInstance: AxiosInstance = axios.create({ baseURL });

