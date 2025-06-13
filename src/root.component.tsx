import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./auth/front-end/pages/sign-up";
import SignIn from "./auth/front-end/pages/sign-in";
import { isAuthenticated } from "./auth/back-end/services/is-authenticated";
import Home from "./auth/front-end/pages/home";
import NotFound from "./auth/front-end/pages/not-found";
import Buildings from "./buildings/front-end/pages/buildings";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated("1") ? <Home /> : <SignIn />}
        />
        <Route
          path="/signin"
          element={isAuthenticated("1") ? <Home /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={isAuthenticated("1") ? <Home /> : <SignUp />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/buildings" element={<Buildings />} />
      </Routes>
    </BrowserRouter>
  );
}
