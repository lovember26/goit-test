import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import { Tweets } from "./pages/Tweets";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="tweets" element={<Tweets />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
