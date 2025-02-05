;
import Header from "../directives/HEader";
import "../styles/Home.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation , Autoplay } from 'swiper/modules';

import slide1 from "../assets/slide1.png";

import abt1 from "../assets/abt-1.png";
import abt2 from "../assets/abt-2.png";
import abt3 from "../assets/abt-3.png"
import abt4 from "../assets/abt-4.png";
import abt5 from "../assets/abt-5.png";
import abt6 from "../assets/abt-6.png";

import g1 from "../../public/images/g1.png"
import g2 from "../../public/images/g2.png"
import g3 from "../../public/images/g3.png"
import g4 from "../../public/images/g4.png"

import storieVid from "../../public/images/storie video 1.mp4"
import storieImg from "../../public/images/storyimg.png"
import { IoLocationSharp, IoStarSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";


const Home = () => {
  return (
    <>
      <div className="mx-auto  " style={{ backgroundColor: "#031A5B" }}>
        <Header />

        {/* <div className=""> */}
          

        {/* Hero section  */}
        <div
          className="container grid md:grid-cols-2 grid-cols-1
         mx-auto  px-5 gap-4 md:py-20 py-10 2xl:px-20"
        >
          <div>
            <h3 className="text-white sm:text-3xl text-xl mb-4">Dreaming of Studying Abroad?</h3>
            <h1 className="text-white sm:text-6xl text-4xl font-bold leading-tight ">
              Your Journey Starts Here <span className="text-yellow-500">!</span>
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white" style={{ opacity: 0.7 }}>
              Approved as the prime overseas student consultancy organization,
              Medicoscholars is one of the most preferred and trusted
              destination for student training and consultancy programs.
            </p>
            <a href="">
              <button className="p-2 text-white bg-yellow-500 px-10 rounded-lg">Expore Programs</button>
            </a>
          </div>
        </div>

        <div className="sec02">
          <div
            className="container px-5  flex md:flex-row  flex-col justify-between
         mx-auto 2xl:px-20  "
          >
            <div className="md:me-10  flex justify-between flex-col md:gap-0 gap-10 ">
              <div className="text-white flex md:flex-col md:gap-0 gap-3  ">
                <div className="py-5 space-y-2 user-stats">
                  <p className=" sm:text-3xl text-xl  mb-0 font-bold">1000+</p>
                  <p className=" sm:text-sm text-[12px] ">Active <br className="md:hidden " /> Students</p>
                </div>
                <div className="py-5 space-y-2 user-stats">
                  <p className=" sm:text-3xl text-xl mb-0 font-bold">50</p>
                  <p className=" sm:text-sm text-[12px] ">Best <br className="md:hidden " /> Universities</p>
                </div>
                <div className="py-5 space-y-2 user-stats">
                  <p className=" sm:text-3xl text-xl mb-0 font-bold">98%</p>
                  <p className=" sm:text-sm text-[12px] ">Parents <br className="md:hidden " /> Satisfaction</p>
                </div>
              </div>

              <div className="text-black">
                <div className="mb-2">
                  <img src="images/testimonial.svg" alt="" />
                </div>
                <small className="text-white md:text-black">Read Our</small>
                <h3 className="text-white md:text-black" style={{ fontWeight: 700 }}>Testimonials</h3>
              </div>
            </div>
            <div className="w-140 md:mb-0 md:mt-0  mb-10 mt-5">
              <img className="h-75" src="images/img1.png" alt="" />
            </div>
          </div>
        </div>

         

      </div>



      {/* about section  */}
      <div className="w-screen min-h-screen py-20 bg-white">
        <div className="flex flex-col gap-10 justify-center items-center">

          <div className="flex flex-col gap-5 items-center px-5">
            <h1 className="md:text-5xl text-3xl text-center font-semibold text-[#15202E]">
              Faculties Programs
            </h1>
            <p className=" text-sm sm:text-base max-w-[40rem] text-center ">
              Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80rem] px-5  gap-10">

            <div className="group flex flex-col gap-7 border-2 border-[#8F8F8F] hover:bg-[url(/images/abt-bg.png)]  transition-all duration-500  bg-cover p-7">
              <img
                src={abt1}
                alt=""
                className="w-14   group-hover:brightness-0 group-hover:invert"
              />
              <h1 className="text-3xl group-hover:text-white font-semibold">
                Distinctive <br /> Mentors
              </h1>
              <p className="group-hover:text-white">
                Li Europan lingues es membres del sam familie. Lor separat existentie es
                un myth. Por scientie, musica, sport etc.
              </p>
            </div>

            <div className="group flex flex-col gap-7 border-2 border-[#8F8F8F] hover:bg-[url(/images/abt-bg.png)]  transition-all duration-500  bg-cover p-7">
              <img
                src={abt2}
                alt=""
                className="w-14   group-hover:brightness-0 group-hover:invert"
              />
              <h1 className="text-3xl group-hover:text-white font-semibold">
                Successful <br /> Background
              </h1>
              <p className="group-hover:text-white">
                Li Europan lingues es membres del sam familie. Lor separat existentie es
                un myth. Por scientie, musica, sport etc.
              </p>
            </div>

            <div className="group flex flex-col gap-7 border-2 border-[#8F8F8F] hover:bg-[url(/images/abt-bg.png)]  transition-all duration-500  bg-cover p-7">
              <img
                src={abt3}
                alt=""
                className="w-14   group-hover:brightness-0 group-hover:invert"
              />
              <h1 className="text-3xl group-hover:text-white font-semibold">
                Fulfillment of <br />
                Promises
              </h1>
              <p className="group-hover:text-white">
                Li Europan lingues es membres del sam familie. Lor separat existentie es
                un myth. Por scientie, musica, sport etc.
              </p>
            </div>

            <div className="group flex flex-col gap-7 border-2 border-[#8F8F8F] hover:bg-[url(/images/abt-bg.png)]    bg-cover p-7">
              <img
                src={abt4}
                alt=""
                className="w-14   group-hover:brightness-0 group-hover:invert "
              />
              <h1 className="text-3xl group-hover:text-white font-semibold">
                Successful <br /> Background
              </h1>
              <p className="group-hover:text-white">
                Li Europan lingues es membres del sam familie. Lor separat existentie es
                un myth. Por scientie, musica, sport etc.
              </p>
            </div>
            <div className="group flex flex-col gap-7 border-2 border-[#8F8F8F] hover:bg-[url(/images/abt-bg.png)]  transition-all duration-500  bg-cover p-7">
              <img
                src={abt5}
                alt=""
                className="w-14   group-hover:brightness-0 group-hover:invert"
              />
              <h1 className="text-3xl group-hover:text-white font-semibold">
                Distinctive <br /> Mentors
              </h1>
              <p className="group-hover:text-white">
                Li Europan lingues es membres del sam familie. Lor separat existentie es
                un myth. Por scientie, musica, sport etc.
              </p>
            </div>
            <div className="group flex flex-col gap-7 border-2 border-[#8F8F8F] hover:bg-[url(/images/abt-bg.png)]  transition-all duration-500  bg-cover p-7">
              <img
                src={abt6}
                alt=""
                className="w-14   group-hover:brightness-0 group-hover:invert"
              />
              <h1 className="text-3xl group-hover:text-white font-semibold">
                Distinctive <br /> Mentors
              </h1>
              <p className="group-hover:text-white">
                Li Europan lingues es membres del sam familie. Lor separat existentie es
                un myth. Por scientie, musica, sport etc.
              </p>
            </div>


          </div>



        </div>
      </div>

      
      {/* top univ */}
      <div className="min-h-screen ">

        <div className="flex justify-between md:mb-10   md:px-20 px-5">
          <div className="space-y-2 font-bold">
            <p className="text-blue-500">Top Universities</p>
            <h1 className="text-4xl   " >Explore Our Top Universities</h1>
          </div>
          <FaArrowRightLong className="text-5xl text-blue-500 " />


        </div>

        <div className="lg:px-20 md:px-0 px-5">
          <Swiper
            slidesPerView={1} // Default for mobile
            spaceBetween={20}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper1     "
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className=" my-10 max-w-[25rem]  border-2 border-gray-200 h-full mx-auto sliderShadow flex flex-col gap-3 p-4 rounded-xl">
                <img src={slide1} alt="" className="rounded-xl w-full" />
                <div className="flex  flex-wrap justify-between gap-2">
                  <h2 className="text-xl font-bold ">LN Medical College</h2>
                  <div className="bg-blue-800 py-1 px-2 rounded-lg flex items-center">
                    <IoStarSharp className="text-yellow-400" />
                    <p className="text-white" >4,5 (7,2k)</p>
                  </div>
                </div>
                <div className="flex gap-1 text-lg items-center text-[#FFBC0E]">
                  <IoLocationSharp className="" />
                  <p>Bishkek</p>
                </div>
                <p className="hidin text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p className="text-gray-600 font-bold"><span className="text-black">$1.310</span>/Person</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" my-10 max-w-[25rem]  border-2 border-gray-200 h-full mx-auto sliderShadow flex flex-col gap-3 p-4 rounded-xl">
                <img src={slide1} alt="" className="rounded-xl w-full" />
                <div className="flex  flex-wrap justify-between gap-2">
                  <h2 className="text-xl font-bold ">LN Medical College</h2>
                  <div className="bg-blue-800 py-1 px-2 rounded-lg flex items-center">
                    <IoStarSharp className="text-yellow-400" />
                    <p className="text-white" >4,5 (7,2k)</p>
                  </div>
                </div>
                <div className="flex gap-1 text-lg items-center text-[#FFBC0E]">
                  <IoLocationSharp className="" />
                  <p>Bishkek</p>
                </div>
                <p className="hidin text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p className="text-gray-600 font-bold"><span className="text-black">$1.310</span>/Person</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" my-10 max-w-[25rem]  border-2 border-gray-200 h-full mx-auto sliderShadow flex flex-col gap-3 p-4 rounded-xl">
                <img src={slide1} alt="" className="rounded-xl w-full" />
                <div className="flex  flex-wrap justify-between gap-2">
                  <h2 className="text-xl font-bold ">LN Medical College</h2>
                  <div className="bg-blue-800 py-1 px-2 rounded-lg flex items-center">
                    <IoStarSharp className="text-yellow-400" />
                    <p className="text-white" >4,5 (7,2k)</p>
                  </div>
                </div>
                <div className="flex gap-1 text-lg items-center text-[#FFBC0E]">
                  <IoLocationSharp className="" />
                  <p>Bishkek</p>
                </div>
                <p className="hidin text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p className="text-gray-600 font-bold"><span className="text-black">$1.310</span>/Person</p>

              </div>
            </SwiperSlide>
          
            



          </Swiper>
        </div>
      </div>


      {/* galary section  */}
      <div className="">
        <div className="md:flex-row flex flex-col  lg:px-20 px-5 lg:py-20 py-5 justify-between gap-5">
          <h1 className="md:text-5xl text-4xl  max-w-fit font-bold">
            Campus Gallery
          </h1>
          <p className="text-base max-w-[32rem]">
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in.
          </p>
        </div>

        <div className=" mx-auto p-6 px-5 lg:px-20">
          <div className="grid grid-cols-12 gap-5">

            {/*  Row -----1  */}
            <div className="max-h-[20rem] overflow-hidden col-span-12 bg-green-500 md:col-span-8">
              <img
                src={g1}
                alt="Performer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="col-span-12 flex flex-col justify-center md:col-span-4 bg-yellow-400 p-6">
              <h3 className="text-xl lg:text-2xl  leading-normal font-bold mb-4">
                Depicting Faculties Life: A Stunning Campus Gallery
              </h3>
              <p className="text-base  leading-tight lg:text-lg ">
                Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
              </p>
            </div>

            {/* Row -----2 */}
            <div className="col-span-12 flex flex-col justify-center md:col-span-4 bg-blue-300 p-6">
              <h3 className="text-xl lg:text-2xl  leading-normal font-bold mb-4">
                Depicting Faculties Life: A Stunning Campus Gallery
              </h3>
              <p className="text-base  leading-tight lg:text-lg ">
                Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 row-span-2">
              <img
                src={g2}
                alt="Campus Event"
                className=" object-cover object-center h-full"
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <img
                src={g3}
                alt="Discussion"
                className="w-auto object-cover object-center h-full"
              />
            </div>

            {/* 3 Row */}
            <div className="col-span-12 md:col-span-4">
              <img
                src={g4}
                alt="Event"
                className="w-auto object-cover object-center h-full"
              />
            </div>
            <div className="col-span-12 flex flex-col justify-center md:col-span-4 bg-yellow-400 p-6">
              <h3 className="text-xl lg:text-2xl  leading-normal font-bold mb-4">
                Depicting Faculties Life: A Stunning Campus Gallery
              </h3>
              <p className="text-base  leading-tight lg:text-lg ">
                Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
              </p>
            </div>
          </div>
        </div>

      </div>


      {/* storie section  */}

      <div className="lg:px-20 px-5 py-20">

        <div id="swiper2" className="relative">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" ">
                <video
                  src={storieVid}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  alt="Campus Event"
                  className=" object-cover rounded-xl object-top w-full h-[80vh] "
                />
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className=" relative ">
                <video
                  src={storieVid}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  alt="Campus Event"
                  className=" object-cover rounded-xl object-top w-full h-[80vh] z-0 "
                />
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className=" ">
                <video
                  src={storieVid}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  alt="Campus Event"
                  className=" object-cover rounded-xl object-top w-full h-[80vh] "
                />
              </div>

            </SwiperSlide>


          </Swiper>



          <div className=" md:my-0 my-7 flex gap-3 md:flex-col   md:absolute md:max-w-[20rem] md:left-[70%] md:top-[60%] md:transform md:-translate-x-[10%] md:-translate-y-[0%] z-10 " >
            <img
              src={storieImg}
              alt="Campus Event"
              className="  md:border-[0.5rem] rounded-2xl border-white object-cover   object-top md:w-[20rem] w-[10rem]  "
            />
            <div className="space-y-3 px-2 flex flex-col justify-center">
              <h1 className="md:text-3xl text-[#2B3039] text-base ">
                Skova Antony Joline
              </h1>
              <p className="md:text-base text-[#85858A] text-sm">
                Hear directly from our students about their experiences and what makes Harvod University special.
              </p>
            </div>
          </div>
        </div>

        <div className="my-7 md:py-10 flex flex-col gap-5">
          <h1 className="text-xl text-[#0E1720] max-w-fit font-bold text-center">
            Alumni Achievements
          </h1>
          <p className=" text-[#2B3039] text-base sm:text-3xl md:max-w-[32rem]  ">
            Our graduates go on to achieve remarkable success in various fields. Read about their journeys and how Harvod helped shape their
          </p>
        </div>


      </div>

      

      

    </>
  );
};

export default Home;
