import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRouter from "./Routers/UserRouter";
import "./App.css"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
