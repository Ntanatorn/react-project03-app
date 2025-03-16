import {BrowserRouter,Routes,Route} from "react-router-dom"
import Loginpage from "./view/Loginpage"
import AbouPage from "./view/AbouPage"
import Contactpage from "./view/Contactpage"
import Homepage from "./view/Homepage"
import Registerpage from "./view/Registerpage"

function App() {


  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Loginpage/>}></Route>
      <Route path="/home" element={<Homepage/>}></Route>
      <Route path="/about" element={<AbouPage/>}></Route>
      <Route path="/wow/contact" element={<Contactpage/>}></Route>
      <Route path="/sau/dti/regis" element={<Registerpage/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
