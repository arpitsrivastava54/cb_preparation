import { Link } from "react-router-dom";
import Icons from "../Icons"

const SyllabusSection = () => {
  return (
    <main className="w-full flex lg:flex-row flex-col-reverse p-5 lg:p-10 text-primarText">
      <section className="w-full lg:w-[70%]">
        <SyllabusContent />
      </section>
      <section className="w-full lg:w-[30%] lg:ms-10 h-max bg-white rounded-lg drop-shadow-lg">
        <PurchaseSyllabus />
      </section>
    </main>
  )
}

export default SyllabusSection
const syllabus = [
  {
    chapterName: "All about NIT admission 2023",
    chapterContent: [
      {
        heading: "Admission Procedure",
        content: "This section covers the detailed admission procedure for NIT admission 2023, including eligibility criteria, application process, counseling, and important dates."
      }
    ]
  },
  {
    chapterName: "Fees and Scholarships",
    chapterContent: [
      {
        heading: "Tuition Fees",
        content: "Information about the tuition fees for different courses at NIT for the academic year 2023-2024."
      },
      {
        heading: "Scholarship Opportunities",
        content: "Details about available scholarships and how to apply for them."
      }
    ]
  },
  {
    chapterName: "Campus Life",
    chapterContent: [
      {
        heading: "Accommodation",
        content: "Information about hostel facilities and accommodation options for students."
      },
      {
        heading: "Extracurricular Activities",
        content: "Overview of sports, clubs, and other extracurricular activities available on campus."
      }
    ]
  },
  {
    chapterName: "Academic Programs",
    chapterContent: [
      {
        heading: "Undergraduate Programs",
        content: "List of undergraduate programs offered at NIT and their curriculum."
      },
      {
        heading: "Postgraduate Programs",
        content: "Information about postgraduate programs, research opportunities, and specializations."
      }
    ]
  },
  {
    chapterName: "Placement and Career Services",
    chapterContent: [
      {
        heading: "Placement Record",
        content: "Details about the placement record of NIT, top recruiters, and average salary packages."
      },
      {
        heading: "Career Guidance",
        content: "Resources and services offered by NIT for career guidance, internships, and job placements."
      }
    ]
  }
];


function SyllabusContent() {
  return (
    <div className="">
      <h1 className="font-sans text-2xl lg:text-4xl font-semibold my-10 tracking-tighter">GATE 2024 MTech Counselling</h1>
      <p className="text-sm lg:text-base my-5 font-extralight">This is the Ultimate Course to prepare Aptitude, Logical Reasoning &amp; English for any Competitive &amp; Placements Exams. Basic to Advanced Level Concepts (Videos + Tests) are covered with many short tricks, designed by our Aptitude Expert, Mr. Yash Jain Sir. </p>
      <div className="text-yellow-500 flex">
        <Icons name="fullStar" />
        <Icons name="fullStar" />
        <Icons name="fullStar" />
        <Icons name="halfStar" />
        <span>4.9 (23)</span>
      </div>
      <h2 className="text-2xl my-10 font-normal">Syllabus</h2>

      <div
        className="relative w-full bg-white mt-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg my-20"
      >
        <div
          className="grid divide-y divide-neutral-200"
          id="faqContainer"
        >
          {
            syllabus.map((item, i) => (
              <details className="group p-5">
                <summary
                  className="flex cursor-pointer list-none items-center justify-between font-medium "
                >
                  <span className="flex gap-5 items-center font-normal">
                    <span className="w-[25px] flex justify-center items-center">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                    <span>{item.chapterName}</span>
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  <ul className="my-5">
                    {item.chapterContent.map((chapter) => (
                      <li className="ms-14 text-sm my-2 list-disc">{chapter.heading}</li>
                    ))}
                  </ul>
                </p>
              </details>
            ))
          }
        </div>
      </div>

      <div className="author-section my-10">
        <h1 className="text-3xl my-5">Author</h1>
        <div className="author-detail my-5 flex gap-5 items-center">
          <img src="https://imgproxy.learnyst.com/https://asset-cdn.learnyst.com/assets/schools/86062/teacher/DSC_0037_removebg_preview_8xg7b3.png?w=48&h=48&resizetype=fit" alt="teacher-img" className="w-10 h-10 rounded-full object-contain" />
          <h2>Mr. Yash Jain</h2>
        </div>
        <p className="text-base">M.Tech in Computer Science, has more than 8 years of teaching experience , has mentored thousands of students for GATE and NET exam.</p>
      </div>
    </div>
  )
}


function PurchaseSyllabus() {
  return (
    <div className="p-2">
      <img src="https://imgproxy.learnyst.com/https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/86062/courses/183945/1708327636113mtech_counselling_lyst6881.png?w=334&h=188&resizetype=fill" className="w-full aspect-video rounded-md" alt="" />
      <p className="flex gap-3 my-5 text-sm items-center"><Icons name="timer" />Expires On Jul 31, 2024</p>
      <p className="flex gap-3 items-center">
        <span className="text-2xl">₹ 999</span>
        <span className="line-through text-slate-400">₹ 1999</span>
        <span className="rounded-full w-max bg-yellow-500 px-2 py-1 flex justify-center font-mono text-sm font-thin text-slate-700"> 50% OFF </span>
      </p>
      <div className="flex gap-2 py-5 w-full items-center border-b border-slate-200">
        <Link
          className="w-[40%] px-3 py-3 text-sm text-center text-white bg-blue-600 border border-blue-600 rounded hover:bg-blue-500 hover:opacity-90 hover:text-white focus:outline-none focus:ring"
          to="/download"
        >
          BUY NOW
        </Link>
        <Link
          className="w-[60%] px-3 py-3 text-sm text-center text-blue-600 bg-blue-50 border border-blue-600 rounded hover:bg-blue-100 focus:outline-none focus:ring"
          to="/download"
        >
          START A FREE TRIAL
        </Link>
      </div>

      <div className="my-5">
        <h2 className="my-3">What's included</h2>
        <p className=" font-thin text-sm flex gap-2 items-center"><Icons name="plus"/><b>40</b> Lessons</p>
        <p className=" font-thin text-sm flex gap-2 items-center my-2"><Icons name="gift"/><b>25</b>Trial Lessons</p>
        <p className=" font-thin text-sm flex gap-2 items-center"><Icons name="tick"/><b>Online</b> Accessibility</p>
      </div>
    </div>
  )
}

