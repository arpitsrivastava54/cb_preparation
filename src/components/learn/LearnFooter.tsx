import { Link } from 'react-router-dom'
import cbLogo from "../../assets/cb-80437250.jpg"
import facebookLogo from "../../assets/facebook.svg"
import youtubeLogo from "../../assets/youtube.svg"
import linkedinLogo from "../../assets/linkedin.svg"

const footerLinks = [
  {
    path:"",
    name:"Terms & Conditions",
  },
  {
    path:"",
    name:"Privacy Policy",
  },
  {
    path:"",
    name:"Non Disclosure Agreement",
  },
  {
    path:"",
    name:"Job Guarantee Requirements and Policy",
  },
  {
    path:"",
    name:"Refund Policy",
  },
  {
    path:"",
    name:"Copyright © 2024 Knowledge Gate",
  },
]
const LearnFooter = () => {
  return (
    <footer className='px-10 py-8'>
      <div className="grid grid-cols-1 lg:grid-cols-3 space-y-5">
        <div className="col-span-1 flex gap-4 justify-center lg:justify-start items-center text-xl">
          <img src={cbLogo} alt="cb-logo" className='w-10 aspect-square'/>
          <span>About Us</span>
        </div>
        <div className="col-span-1 flex justify-center items-center gap-3">
          <img src={facebookLogo} className='w-5 aspect-square' alt="" />
          <img src={youtubeLogo} className='w-5 aspect-square' alt="" />
          <img src={linkedinLogo} className='w-5 aspect-square' alt="" />
        </div>
        <div className="col-span-1 flex justify-center lg:justify-end">
          <img src="https://www.knowledgegate.in/learn/learny-assets/play-store-badge.png" alt="" />
        </div>
      </div>

      <div className='my-2 flex gap-4 lg:flex-row flex-col items-center'>
        {
          footerLinks.map((item,i) => (
            <Link className='text-xs text-slate-600 font-thin' to={item.path} key={i}>{item.name}</Link>
          ))
        }
      </div>
    </footer>
  )
}

export default LearnFooter
