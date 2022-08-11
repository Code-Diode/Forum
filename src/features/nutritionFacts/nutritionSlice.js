import facts from "../../data/nutritionFacts";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = facts;

const factsSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {
    factAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, servingSize, totalFat, protein, calories) {
        return {
          payload: {
            id: nanoid(),
            name,
            servingSize,
            totalFat,
            protein,
            calories,
          },
        };
      },
    },
  },
});

export const selectAllFacts = (state) => state.facts;

export const { factAdded } = factsSlice.actions;

export default factsSlice.reducer;
