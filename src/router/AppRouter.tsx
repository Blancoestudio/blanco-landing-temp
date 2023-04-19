import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../website/pages/HomePage"
import { ContactPage } from "../website/pages/ContactPage"
import { Navbar } from "../website/components/Navbar"

export const AppRouter = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
        <Route path="/contact" element={ <ContactPage/> }></Route>
        <Route path="/*" element={ <Navigate to={ '/' } /> }></Route>
      </Routes>
    </>
  )
}
