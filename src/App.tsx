import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import {AxiosResponse} from "axios"
import './App.css'
import {postChange} from "./services/postChange";

function App() {


   const [leftRight, setLeftRight] = useState(0);
   const [positionsArray, setPositionsArray] = useState<number[]>([]);

   useEffect(() => {
      console.log(leftRight)
      postChange(leftRight)
         .then(res => {
            console.log(res.status)
            console.log(res.data)
            // setPositionsArray(res.data)
         })
   },[leftRight]);


   return (
      <div className="App">
         <button onClick={()=> setLeftRight(prev => prev + 1)}>Left</button>
         <button onClick={()=> setLeftRight(prev => prev - 1)}>Right</button>
      </div>
   )
}

export default App
