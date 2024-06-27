import { Outlet } from "react-router-dom"
import { Navbar } from "../ui/Navbar"

export const HeroesLayout = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
