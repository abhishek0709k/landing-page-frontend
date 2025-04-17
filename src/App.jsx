import LandingPage from "./components/landing-page/LandingPage"
import "./App.css"
import { Route, Routes } from "react-router"
import Signup from "./components/signup/Signup"
import ContactUs from "./components/contactUs/ContactUs"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/api/signup" element={<Signup/>}/>
      <Route path="/contact-us" element={<ContactUs/>} />
    </Routes>
    </>
  )
}

export default App
