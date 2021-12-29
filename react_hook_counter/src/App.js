import {useState} from "react"
import "./App.css"



export const App = () => {

 const [count,setCount] = useState(0);
 const addOne = (value) =>{
   setCount(count+value)
 }
 const product=()=>{
setCount(2*count);
 }
 if(count >10)
 {
   return 
 }
 
  return (
    <div className="App">
    <h3>Counter:{count}</h3>
    <button onClick={()=>addOne(1)}>Add 1</button>
    <button onClick={()=>addOne(-1)} >sub 1</button>
    <button onClick={()=>product()}>double</button>
      
    </div>
  )
}
export default App;