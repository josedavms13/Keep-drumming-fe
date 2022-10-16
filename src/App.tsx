import {useEffect, useState} from 'react'
import './App.css'
import {postChange} from "./services/postChange";

function App() {


   const [leftRight, setLeftRight] = useState(0);
   // Uncomment when ready
   // const [positionsArray, setPositionsArray] = useState<number[]>([]);
   const [statusLabel, setStatusLabel] = useState("");

   useEffect(() => {
      console.log(leftRight)
      postChange(leftRight)
         .then(res => {
            console.log(res.status)
            if (res.status === 201) {
               displayMessage("OK")
            }
            console.log(res.data)
            // setPositionsArray(res.data)
         })
   },[leftRight]);

   function displayMessage(message: string) {
      setStatusLabel(message);
      setTimeout(()=> {
         setStatusLabel("");
      },500)
   }

   return (
      <div className="App">
         <h1>{statusLabel}</h1>
         <button onClick={()=> setLeftRight(prev => prev + 1)}>Left</button>
         <button onClick={()=> setLeftRight(prev => prev - 1)}>Right</button>
      </div>
   )
}

export default App
