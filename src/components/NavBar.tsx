import { Link } from "react-router-dom"

const navLink = [
  {
    name:"Telegram Updates",
    path:"",
  },
  {
    name:"Whatsapp Updates",
    path:"",
  },
  {
    name:"Whatsapp Chat",
    path:"",
  },
  {
    name:"Call on 0000000000",
    path:"",
  },
  {
    name:"Login",
    path:"",
  },
]


const NavBar = () => {
  return (
    <nav className="hidden lg:flex p-5">
      <div className="nav-logo w-[30%] text-2xl flex justify-center items-center">CareerBanao Preparation</div>
      <div className="nav-links w-[70%] flex justify-evenly items-center">
        {
          navLink.map((item)=>(
            <Link to={item.path}>{item.name}</Link>
          ))
        }
      </div>
    </nav>
  )
}

export default NavBar
