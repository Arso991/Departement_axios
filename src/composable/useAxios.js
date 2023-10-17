import axios from "axios"

const clientHttp = axios.create(
    {
      baseURL:"http://localhost:8000",
      /* headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      } */
    }
  )
export const useAxios = ()=>{
    const get = async (url) =>{
      return await clientHttp.get(url)
    }
    const post = async (url) =>{
      return await clientHttp.post(url)
    }
    return {get, post}
}
