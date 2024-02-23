import { Outlet } from "react-router-dom"
import Header from "./Layout/Header"

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default Layout