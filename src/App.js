import {BrowserRouter, Routes,Route} from "react-router-dom";
import UserRouter from "./Routers/UserRouter";
import "./App.css"
function App() {
  return (
   <BrowserRouter>
<Routes>
  <Route path="/*" element={<UserRouter/>}/>
</Routes>
   </BrowserRouter>
  );
}

export default App;
