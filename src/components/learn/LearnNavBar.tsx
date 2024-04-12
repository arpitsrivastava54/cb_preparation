import { Link } from "react-router-dom"
import Icons from "../Icons"
import logo from "../../assets/cb-80437250.jpg"
import { useState } from "react"
const LearnNavBar = () => {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false)
  window.addEventListener("scroll", () => {
    if(window.scrollY > 150 && showResponsiveNavbar){
      setShowResponsiveNavbar(false)
    }
  })
  return (
    <>
      <nav className="w-full flex justify-between items-center px-2 lg:px-[3rem] py-5 border-[0.5px] border-b border-slate-200">
        <div className="left flex justify-center items-center">
          <Link to="#" className="flex items-center">
            <img
              src={logo}
              className="h-10 mr-3"
              alt="CareerBanao Logo"
            />
          </Link>
          <div className="search relative block w-3/4 lg:w-full">
            <div className="absolute inset-y-0 right-0 flex items-center pe-4 pointer-events-none">
              <Icons name="search" />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full h-[50px] p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <button className="block lg:hidden" onClick={()=>setShowResponsiveNavbar(!showResponsiveNavbar)}>
          <Icons name="menu" />
        </button>
        <div className="right hidden lg:flex justify-center items-center gap-5 font-thin">
          <Link to={""}>Communities</Link>
          <Link to={""}>Newsfeed</Link>
          <div className="flex gap-4 justify-center items-center">
            <Link
              className="px-3 py-2 text-sm text-center text-blue-600 bg-blue-50 border border-blue-600 rounded hover:bg-blue-100 focus:outline-none focus:ring"
              to="/login"
            >
              SIGN IN
            </Link>
            <Link
              className="px-3 py-2 text-sm text-center text-white bg-blue-600 border border-blue-600 rounded hover:bg-blue-500 hover:opacity-90 hover:text-white focus:outline-none focus:ring"
              to="/download"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </nav>
      {showResponsiveNavbar && <ResponsiveLearnNavbar setNavbar={setShowResponsiveNavbar}/>}
    </>
  )
}

export default LearnNavBar

const navItems = [
  {
    path: "",
    name: "Communities",
  },
  {
    path: "",
    name: "Newsfeed",
  },
  {
    path: "",
    name: "Sign In",
  },
  {
    path: "",
    name: "Sign Up",
  },
]
function ResponsiveLearnNavbar({setNavbar}:{setNavbar:React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className="h-screen flex flex-col p-5">
      {
        navItems.map((item) => (
          <Link className="px-3 py-5 text-lg font-sans font-medium hover:bg-blue-50" to={item.path} key={item.name} onClick={()=>setNavbar(false)}>{item.name}</Link>
        ))
      }
    </div>
  );
}
