import React from "react";
import Header from "../directives/HEader";
import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <div className="mx-auto" style={{ backgroundColor: "#031A5B" }}>
        <Header />

        <div
          class="container grid grid-cols-2
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
            class="container px-5  flex justify-between
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

              <div>
                <div className="mb-2">
                  <img src="images/testimonial.svg" alt="" />
                </div>
                <small>Read Our</small>
                <h3 style={{ fontWeight: 700 }}>Testimonials</h3>
              </div>
            </div>
            <div className="w-100">
              <img className="h-75" src="images/img1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
