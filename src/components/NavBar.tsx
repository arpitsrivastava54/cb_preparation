import { Link } from "react-router-dom"
import Icons from "./Icons"
import { useState } from "react"

const navLink = [
  {
    name: "Telegram Updates",
    path: "",
  },
  {
    name: "Whatsapp Updates",
    path: "",
  },
  {
    name: "Whatsapp Chat",
    path: "",
  },
  {
    name: "Call on 0000000000",
    path: "",
  },
  {
    name: "Login",
    path: "/signin",
  },
]


const NavBar = () => {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150 && showResponsiveNavbar) {
      setShowResponsiveNavbar(false)
    }
  })
  return (
    <>
      <nav className="flex justify-between p-5">
        <div className="nav-logo w-3/4 lg:w-[30%] text-lg lg:text-2xl flex justify-start lg:justify-center items-center">CareerBanao Preparation</div>
        <div className="nav-links w-[70%] hidden lg:flex justify-evenly items-center">
          {
            navLink.map((item) => (
              <Link to={item.path}>{item.name}</Link>
            ))
          }
        </div>
        <button className="block lg:hidden" onClick={() => setShowResponsiveNavbar(!showResponsiveNavbar)}>
          <Icons name="menu" />
        </button>
      </nav>
      {showResponsiveNavbar && <ResponsiveNavBar setNavbar={setShowResponsiveNavbar} />}
    </>
  )
}

export default NavBar
const responsiveNavLinks = [
  {
    path: "/signin",
    name: "Login"
  },
  {
    path: "",
    name: "Telegram Channel"
  },
  {
    path: "",
    name: "WhatsApp Channel"
  },
  {
    path: "",
    name: "Chat with Us"
  },
]
function ResponsiveNavBar({ setNavbar }: { setNavbar: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="fixed z-50 top-0 w-full bg-[#00000049] cursor-pointer" onClick={() => setNavbar(false)}>

      <div className="flex flex-col justify-between h-screen bg-gray-800 text-white w-64">
        <div className="py-6 px-4 flex-grow">
          <h2 className="text-2xl font-bold mb-6 text-center">Menu</h2>
          <ul>
            {responsiveNavLinks.map((item) => (
              <li className="mb-4">
                <Link to={item.path} className="block hover:text-blue-500" onClick={() => setNavbar(false)}>{item.name}</Link>
                <hr className="border-white my-2" />
              </li>
            ))
            }
          </ul>
        </div>
        <div className="py-6 px-4 border-t border-gray-700">
          <p className="text-sm">Call us on <a href="tel:800000000" className="text-blue-500">800000000</a></p>
        </div>
      </div>
    </div>
  );
}