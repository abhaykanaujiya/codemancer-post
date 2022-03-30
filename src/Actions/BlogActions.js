import axios from "axios"
import { BASE_URL } from "../End_point/BaseUrl"
export const getGifData = (isOpen) => {
  return (dispatch) => {
    const resultData = axios.get(BASE_URL).then((res) => {
      console.log(res.data);
      return res.data
    })
    dispatch({type:"gif"})
    dispatch({type:"GET_GIF",payload:resultData})
  }
}