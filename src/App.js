import Login from "./login/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./register/Register";

function App() {
  return (
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
  );
}

export default App;
