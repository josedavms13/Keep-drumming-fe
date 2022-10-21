import {useEffect, useState} from 'react'
import './App.css'
import {postChange} from "./services/postChange";
import {baseUrl} from "./services/config/api.config";


function App() {

   const [isAdmin, setIsAdmin] = useState(false);
   useEffect(() => {
      setIsAdmin(Boolean(localStorage.getItem("isAdmin")));
   }, [])

   const [position, setPosition] = useState(0);
   const [enableButton, setEnableButton] = useState(true);
   const [statusLabel, setStatusLabel] = useState("");

   function vote(voteValue: "+"| "-") {
      let newPosition: number;
      if (voteValue === "+") {
         newPosition = position + 1 <= 5 ? position + 1 : position;
      } else if (voteValue === "-") {
         newPosition = position - 1 >= -5? position - 1 : position;
      } else {
         newPosition = position;
      }

      setEnableButton(false)
      postChange(newPosition)
         .then(res => {
            if (res.status === 201) {
               setEnableButton(true);
               setPosition(newPosition)
            }
         }).catch(error => {
            console.log(error.toString());
            displayMessages("Vote failed")
               .then(()=> {
                  displayMessages(error.toString())
                     .then(()=> {
                        displayMessages(baseUrl)
                     })
               });
         })
   }

   function displayMessages(message: string, timeout?: number) {
      setStatusLabel(message);
      return new Promise(resolve => {
         setTimeout(resolve, timeout ? timeout : 2000)
      })
   }

   return (
      <div className="App">
         <h1>{statusLabel}</h1>
         <h1>Votación</h1>
         <div className={"media-container"}>
            <div className={"voting-buttons-container"}>
               <button className={"red"} disabled={!enableButton} onClick={() => vote("+")}>Tres</button>
               <button className={"blue"} disabled={!enableButton} onClick={() => vote("-")}>Dos</button>
            </div>
            {isAdmin && <div className={"winner-buttons-container"}>
                <button className="winner-button">Win 2</button>
                <button className="winner-button">Win 3</button>
            </div>}
         </div>
      </div>
   )
}

export default App
