import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import  {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';

function NextBtn({className,style,onClick}) {
    return (
      <button
        className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
        <IoIosArrowForward size={22}/>
        </button>
    );
  }

  function PrevBtn({className,style,onClick}) {
    return (
      <button
        className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
        <IoIosArrowBack size={22}/>
        </button>
    );
  }

const Campaigns = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // arrows: false,
    nextArrow: <NextBtn />,
	prevArrow: <PrevBtn />,
    
  };

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
      <Slider className="-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={index}>
              <picture className='block px-2'>
                <img src={banner.image} className="rounded-2xl" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
