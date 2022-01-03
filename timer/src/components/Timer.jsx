import React, {useEffect, useState} from 'react'

const Timer = ({start, end}) => {
    const [counter, setCounter] = useState(start)

    useEffect(() => {

        let time = setInterval(() => {
            setCounter((p) => {
                if(p === end){
                    clearInterval(time)
                    return end
                }else {
                    return p + 1
                }
            })
        },1000)

        return () => {
            console.log("Cleaup")
            clearInterval(time)
        }

    },[])

    return (
        <div>
           
            <h2>Counter is : {counter}</h2>
        </div>
    )
}

export default Timer