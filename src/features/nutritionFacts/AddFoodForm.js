import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { factAdded } from "../nutritionFacts/nutritionSlice";

function AddFoodForm() {
  const dispatch = useDispatch();

  const [item, setItem] = useState({
    name: "",
    servingSize: "",
    totalFat: "",
    protein: "",
    calories: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((item) => ({ ...item, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      dispatch(
        factAdded(
          item.name,
          item.servingSize,
          item.totalFat,
          item.protein,
          item.calories
        )
      );

      setItem({
        name: "",
        servingSize: "",
        totalFat: "",
        protein: "",
        calories: "",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
        ></input>
        <label>servingSize</label>
        <input
          type="text"
          name="servingSize"
          value={item.servingSize}
          onChange={handleChange}
        ></input>
        <label>totalFat</label>
        <input
          type="number"
          name="totalFat"
          value={item.totalFat}
          onChange={handleChange}
        ></input>
        <label>protein</label>
        <input
          type="number"
          name="protein"
          value={item.protein}
          onChange={handleChange}
        ></input>
        <label>calories</label>
        <input
          type="number"
          name="calories"
          value={item.calories}
          onChange={handleChange}
        ></input>
        <button>Add to table</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
