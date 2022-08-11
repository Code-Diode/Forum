import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { factAdded } from "../nutritionFacts/nutritionSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
    <form onSubmit={handleSubmit}>
    <Form.Group role="form">
     
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
          ></Form.Control>
        
          <Form.Label>servingSize</Form.Label>
          <Form.Control
            type="text"
            name="servingSize"
            value={item.servingSize}
            onChange={handleChange}
          ></Form.Control>
     

   
      <Form.Label>totalFat</Form.Label>
        <Form.Control
          type="number"
          name="totalFat"
          value={item.totalFat}
          onChange={handleChange}
        ></Form.Control>
 
       
       
       <Form.Label>protein</Form.Label>
        <Form.Control
          type="number"
          name="protein"
          value={item.protein}
          onChange={handleChange}
        ></Form.Control>
       
      
      <Form.Label>calories</Form.Label>
        <Form.Control
          type="number"
          name="calories"
          value={item.calories}
          onChange={handleChange}
        ></Form.Control>
   
        <Button type='submit' className="mt-3 submit__btn">Add to table</Button>
</Form.Group>
    </form>
  );
}

export default AddFoodForm;
