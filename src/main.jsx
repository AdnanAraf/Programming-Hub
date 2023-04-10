import "./index.css";
import ViewDetails from "./Components/ViewDetails/ViewDetails";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

export default function App() {
  console.log("waiting...");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="item/:itemid" element={<ViewDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<App />);
