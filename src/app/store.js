import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import factsReducer from "../features/nutritionFacts/nutritionSlice";
import postReducer from "../features/posts/postsSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    facts: factsReducer,
    posts: postReducer,
  },
});

export default store;
