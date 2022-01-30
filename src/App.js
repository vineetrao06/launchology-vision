import { Routes, Route } from "react-router-dom";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import Home from "./Screens/Home"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
