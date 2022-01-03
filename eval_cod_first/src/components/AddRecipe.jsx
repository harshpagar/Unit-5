import { useState } from "react";


export const AddRecipe = () => {
  const [data, setData] = useState({});

  const handlesubmit = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const AddData = (e) => {
    e.preventDefault();
   

    fetch("http://localhost:3000/data", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      setData("");
    });
  };

  return (
    <div>
      <h3 className ="heading"> Add Receipe </h3>
      <div className = "short" onSubmit={AddData} method="POST">
        <input
          required
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={handlesubmit}
        />
        <textarea
          rows={3}
          type="text"
          name="ingredients"
          placeholder="Enter ingredients"
          onChange={handlesubmit}
        />
        <input
          type="text"
          name="timetocook"
          placeholder="time to cook"
          onChange={handlesubmit}
        />
        <input
          type="text"
          name="img"
          placeholder="Enter image link"
          onChange={handlesubmit}
        />
        <textarea
          rows={3}
          type="text"
          name="title"
          placeholder="Enter instruction"
          onChange={handlesubmit}
        />
        <input type="submit" />
      </div>
    </div>
  );
};