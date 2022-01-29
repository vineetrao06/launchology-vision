import { Routes, Route } from "react-router-dom";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/add-report" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
