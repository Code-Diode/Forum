import "./App.css";
import LogInForm from "./pages/LogInForm";
import { Provider } from "react-redux";
import store from "./app/store";
import { Routes, Route } from "react-router-dom";
import MissingPage from "./pages/MissingPage";
import Layout from "./Components/Layout";
import PostsList from "./features/posts/PostsList";
import RequireAuth from "./pages/RequireAuth";
import LandingPage from "./pages/LandingPage";
import NutritionFacts from "./features/nutritionFacts/NutritionFacts";
import PostDetails from "./features/posts/PostDetails";
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LogInForm />} />
            <Route path="posts" element={<PostsList />}></Route>
            <Route path="posts/:postId" element={<PostDetails />} />
            {/* <Route
              path="posts/:postId"
              element={
                <RequireAuth>
                  <PostDetails />
                </RequireAuth>
              }
            /> */}
            <Route path="/nutrition-facts" element={<NutritionFacts />} />
            <Route path="*" element={<MissingPage />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
