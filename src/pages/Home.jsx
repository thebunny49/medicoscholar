import React from "react";
import Header from "../directives/HEader";
import "../styles/Home.css";


import abt1 from "../assets/abt-1.png";
import abt2 from "../assets/abt-2.png";
import abt3 from "../assets/abt-3.png"
import abt4 from "../assets/abt-4.png";
import abt5 from "../assets/abt-5.png";
import abt6 from "../assets/abt-6.png";

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

          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-5xl font-semibold text-[#15202E]">
              Faculties Programs
            </h1>
            <p className="text-base max-w-[40rem] text-center ">
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

    </>
  );
};

export default Home;
