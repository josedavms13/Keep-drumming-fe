import axios, {AxiosResponse} from "axios";

export async function postChange(movement: number): Promise<AxiosResponse> {
   const body = {
      pos: movement
   }
   return await axios.post("http://localhost:4001/api/v1/post-position", body)
}
