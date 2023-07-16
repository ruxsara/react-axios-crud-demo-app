import { axiosInstance } from "./axiosInstance"


export const getUsers = async (setUsers: any): Promise<any> => {
    try {
        const response = await axiosInstance.get('users')
        setUsers(response.data)
    } catch (error) {
        console.log(error)
    }
}