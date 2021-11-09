import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";


   const PosterSlider=(props)=>{

    const posterImages = [
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjklICA5ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-lsbpqzesrb-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICA5NzIgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00081136-nwpnruhhle-portrait.jpg ",
        " https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICA0OGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-lqygcdvtbw-portrait.jpg",
        " https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyOGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-ngrlylqpuc-portrait.jpg",
        " https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTg2IGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00314852-uxbubybzde-portrait.jpg",
        " https://in.bookmyshow.com/kolkata/movies/fast-and-furious-9/ET00056556",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAzayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122134-kkxxyaqcqy-portrait.jpg ",
        " https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjlrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00110039-nedquqhqtd-portrait.jpg",
        " https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzIlICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-fkudqalcuj-portrait.jpg",
     
    ];
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const{ posters, title,subtitle,isDark,config}=props;
    const currentSettings = config ? config : settings;
    
       return(
              <>
                 <div className='flex flex-col items-start my-2'>
                    <h3  className={`text-2xl font-bold ${isDark ?"text-white":"text-black"}`}>{title} </h3>
                    <p className={`text-sm  ${isDark ?"text-white":"text-gray-800"}`}>{subtitle}</p>
                 </div>
                 <Slider {...currentSettings}>
                    {posters.map((each)=>(
                    <Poster {...each} isDark={isDark}/>
                    ))}
                </Slider>
              </>
              
              
       );


       
   }
export default PosterSlider;