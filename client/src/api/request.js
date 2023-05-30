import { BASE_URL } from "./base_url";
import axios from "axios"

export const getAlldatas=async()=>{
    let globalData
    await axios.get(`${BASE_URL}/hey`)
    .then((res)=>{
        globalData=res.data
    })
    return globalData
}
export const getAlldatasId=async(id)=>{
    let globalData
    await axios.get(`${BASE_URL}/hey/${id}`)
    .then((res)=>{
        globalData=res.data
    })
    return globalData
}
export const deletedById = async(id)=>{
    await axios.delete(`${BASE_URL}/hey/${id}`)
 }
export const postDatas= async(payload)=>{
    await axios.post(`${BASE_URL}/hey`, payload)
}
export const editDatasById = (id,payload)=>{
    axios.put(`${BASE_URL}/hey/${id}`,payload)
}






