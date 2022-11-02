import axios, {AxiosResponse} from "axios";
import {baseUrl} from "./config/api.config";

export async function postChange(movement: number): Promise<AxiosResponse> {
   const body = {
      pos: movement,
      returnArray: true,
   }
   console.log("requesting to: ", baseUrl + "/post-position")
   return await axios.post("http://" + baseUrl + "/post-position", body)
}
