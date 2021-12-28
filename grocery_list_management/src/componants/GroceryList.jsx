import React from "react";

export const GroceryList = ({ title, status, id, deleteItem }) =>{

    return(
         <>
            <div>{title}</div>
            <button onClick={ () => {deleteItem(id);}}>Delete</button>
         </>
    )
}