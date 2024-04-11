import { Link } from "react-router-dom"
import Carousel from "../components/Carasouel"
import CourseCard from "../components/CourseCard"
import Icons from "../components/Icons"
import NavBar from "../components/NavBar"

const bannerImg = "https://cloud-1de12d.b-cdn.net/media/original/019ee49f34fd4fe00a7c9701dd366e33/219_WEBSITE%20(7).png"
const footerItems = [
  "Terms of use", "Privacy Policy","Refund Policy","Contact Us"
]
const HomePage = () => {
  return (
    <>
      <NavBar />
      <section className="main-banner relative">
        <img src={bannerImg} alt="home-banner" />
        <button className="absolute text-xs lg:text-xl font-base top-[85%] lg:top-[65%] left-[28%] lg:left-1/2 translate-x-[-50%] translate-y-[-65%] bg-white w-[150px] lg:w-[250px] h-[35px] lg:h-[65px] flex justify-center items-center rounded-lg gap-1 hover:bg-primary hover:text-white border border-orange-600 transition-all duration-150 ease-in">Register Now <Icons name="right-arrow" /></button>
      </section>
      <section className="new-courses py-5 bg-[#1f1f1f] w-full mx-auto flex justify-evenly flex-wrap">
        {
          Array.from({ length: 6 }).map((_, i) => (
            <div className="w-[90%] lg:w-[30%] my-10 text-white">
              <CourseCard path="/learn"/>
            </div>
          ))
        }
      </section>
      <section className="courses-carasoule bg-bgPrimary pb-10">
        <h1 className="py-10 text-2xl font-bold text-center text-headdingText">Recorded Content for Individual Subjects for GATE Exam:</h1>
        <Carousel />
      </section>
      <section className="video-section bg-bgPrimary py-5">
        <h1 className="py-10 text-2xl font-bold text-center text-headdingText">Do not miss 1 shot video for all your Semester/University Exam </h1>
        <div className="w-[90%] mx-auto border-[5px] border-white my-5 h-[450px] flex lg:flex-row flex-col gap-3 bg-slate-400">
          <div className="video w-full lg:w-[70%] h-full">
            <img src="https://cloud-1de12d.b-cdn.net/media/original/69f5be658dbe5b235ba6ef04a27ebdc5/36.jpg" alt="youtube-video" className="w-full h-full" />
          </div>
          <div className="new-videos w-full lg:w-[30%] flex flex-col gap-3 p-1 lg:p-3 overflow-y-scroll">
            {
              Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="video-card w-full lg:w-[70%] h-[150px]">
                  <img src="https://cloud-1de12d.b-cdn.net/media/original/69f5be658dbe5b235ba6ef04a27ebdc5/36.jpg" alt="" className="w-full h-full object-contain" />
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <footer className="w-full h-[80px] bg-white flex justify-evenly lg:justify-center gap-0 lg:gap-20 items-center">
            {
              footerItems.map((item) => (
                <Link to={""} className="text-xs lg:text-lg font-semibold">{item}</Link>
              ))
            }
      </footer>
    </>
  )
}

export default HomePage
