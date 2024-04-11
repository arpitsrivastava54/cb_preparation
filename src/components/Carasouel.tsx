import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  const item = "https://cloud-1de12d.b-cdn.net/media/original/69f5be658dbe5b235ba6ef04a27ebdc5/36.jpg";

  return (

      <div className='slider-container'>
        <Slider {...settings} className='w-[90%] mx-auto py-10' >
          {
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <div className='w-full flex flex-col gap-5 px-5'>
                  <div className="img1 w-full">
                    <img src={item} alt="" className='w-full h-full object-contain' />
                  </div>
                  <div className="">
                    <img src={item} alt="" className='w-full h-full object-contain' />
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
  );
};

export default Carousel;
