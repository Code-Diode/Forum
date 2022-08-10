import React from "react";
import { useSelector } from "react-redux";
import { selectAllFacts } from "../nutritionFacts/nutritionSlice";
import Table from "react-bootstrap/Table";

function NutritionTable() {
  const facts = useSelector(selectAllFacts);

  return (
    <Table hover striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Serving Size</th>
          <th>Total Fat</th>
          <th>Protein</th>
          <th>Calories</th>
        </tr>
      </thead>

      <tbody>
        {facts.map((fact) => {
          return (
            <tr key={fact.id}>
              <td>{fact.name}</td>
              <td>{fact.servingSize}</td>
              <td>{fact.totalFat}</td>
              <td>{fact.protein}</td>
              <td>{fact.calories}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default NutritionTable;
