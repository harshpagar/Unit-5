import React, { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";


export const Grocery = () =>
{
    const [list,setList] = useState([])

    const handleClick = (data) =>
    {
        setList([...list,data]);
    }

    return(<> 
        <GroceryInput getData={handleClick}/>
        {
            list.map((e , i) => (
                <GroceryList key={i} title={e} />
            ))
        }
    </>);
}