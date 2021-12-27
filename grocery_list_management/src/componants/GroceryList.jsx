import React from "react";

export const GroceryList = ({title}) =>
{
    const deleteButton = (e) => {
      
} 

    return(
         <>
            <div>{title}</div>
            <button onClick={ () => deleteButton(title)}>Delete</button>
         </>
    )
}