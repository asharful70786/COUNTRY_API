
import { Outlet } from "react-router-dom"
import "./App.css"
import Header from "./components/header"


export default function App() {


  return (
    <>
      <Header />
      <Outlet />

    </>

  )
}