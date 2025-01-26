;
import Header from "../directives/HEader";
import "../styles/Home.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


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


const Home = () => {
  return (
    <>
      <div className="mx-auto  " style={{ backgroundColor: "#031A5B" }}>
        <Header />


        {/* Hero section  */}
        <div
          className="container grid grid-cols-2
         mx-auto px-5 gap-4 py-20"
        >
          <div>
            <h3 className="text-white">Dreaming of Studying Abroad?</h3>
            <h1 className="text-white font-bold leading-tight">
              Your Journey Starts Here!
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white" style={{ opacity: 0.7 }}>
              Approved as the prime overseas student consultancy organization,
              Medicoscholars is one of the most preferred and trusted
              destination for student training and consultancy programs.
            </p>
            <a href="">
              <button className="p-2 px-10 rounded-lg">Expore Programs</button>
            </a>
          </div>
        </div>

        <div className="sec02">
          <div
            className="container px-5  flex justify-between
         mx-auto  "
          >
            <div className="me-10  flex justify-between flex-col">
              <div className="text-white">
                <div className="py-5 user-stats">
                  <p className="fs-30 mb-0 font-bold">1000+</p>
                  <p className="fs-16">Active Students</p>
                </div>
                <div className="py-5 user-stats">
                  <p className="fs-30 mb-0 font-bold">50</p>
                  <p className="fs-16">Best Universities</p>
                </div>
                <div className="py-5 user-stats">
                  <p className="fs-30 mb-0 font-bold">98%</p>
                  <p className="fs-16">Parents Satisfaction</p>
                </div>
              </div>

              <div className="text-black">
                <div className="mb-2">
                  <img src="images/testimonial.svg" alt="" />
                </div>
                <small>Read Our</small>
                <h3 style={{ fontWeight: 700 }}>Testimonials</h3>
              </div>
            </div>
            <div className="w-140">
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

      <div className="h-screen">
        
</div>

    </>
  );
};

export default Home;
