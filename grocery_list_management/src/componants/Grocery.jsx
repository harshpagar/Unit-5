import React, { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from "nanoid";


export const Grocery = () =>
{
    const [list,setList] = useState([])

    const deleteItem = (id) => {
        const newList = list.filter((item) => {
          return item.id !== id;
        });
        setList(newList);
        console.log(newList);
      };

    const handleClick = (data) =>
    {
        const payload = {
            title: data,
            status: false,
            id: nanoid(4),
          };
        setList([...list, payload]);
         
    };
    return(<> 
        <GroceryInput getData={handleClick}/>
        <h3 className="title"> Grocerry List </h3>
      {list.map((item) => {
        return <GroceryList key={item.id} {...item} deleteItem={deleteItem} />;
      })}
    </>);
}