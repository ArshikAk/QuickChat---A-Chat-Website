import {Routes , Route} from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import RouteProtector from "./routeProtectors/RouteProtector"


function App() {


  return (
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      
      <Route path="/" element={<RouteProtector/>}>
        <Route path="/" element={<Home/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
