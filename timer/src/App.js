import React, {useState, useEffect} from 'react'
import "./App.css"
import Timer from './components/Timer'



const App = () => {

    const [start, setShow] = useState(false)
    return (
            <div className='App'>
          
           {start ? <Timer start={0} end={10} /> : null}
            <button onClick={() => setShow(!start)}>{start ? "Hide" : "start"}</button>
            </div>
        )
    }

export default App
