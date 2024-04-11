import { Link } from "react-router-dom";
import Icons from "./Icons";

type CourseCardProps = {
  width: string;
}

const courseImg = "https://cloud-1de12d.b-cdn.net/media/original/ee4eaa69ca8fdae335bf20cfdf3c2494/GATE Guidence_thumbnails (5).png"
const CourseCard = ({path=""}) => {
  return (
    <div className="w-full">
      <Link to={path}>
        <div className="w-full">
          <img src={courseImg} alt="" className="w-full h-full object-contain" />
        </div>
        <p className="flex gap-2 items-center ps-10 pt-5 hover:text-primary transition-all duration-200 ease-in">Click to check details <Icons name="greater-than" /></p>
      </Link>
    </div>
  )
}

export default CourseCard
