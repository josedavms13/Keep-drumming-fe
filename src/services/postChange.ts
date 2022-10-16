import axios, {AxiosResponse} from "axios";
import {baseUrl} from "./config/api.config";

export async function postChange(movement: number): Promise<AxiosResponse> {
   const body = {
      pos: movement,
      returnArray: true,
   }
   return await axios.post(baseUrl + "/post-position", body)
}
