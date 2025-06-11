import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./auth/front-end/pages/sign-up";
import SignIn from "./auth/front-end/pages/sign-in";

export default function Root(props) {
  return (
    <div>
      <h1>teste</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
