import React from 'react';

import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import Boomibalagan_Temple from '../assets/images/Boomibalagan_Temple.jpg'

const Projects = () => {
  const projectHighlights = [
    "Structural Restoration & Beautification – Repairing and strengthening the temple’s foundation, walls, and sanctum.",
    "Deity Installation & Sanctum Enhancements – Ensuring the temple regains its divine essence and grandeur.",
    "Kumbabishekam Ceremony – A sacred ritual to re-energize the temple, following Vedic traditions.",
    "Improved Facilities for Devotees – Enhancing access, cleanliness, and amenities for a better pilgrimage experience.",
  ];

  return (
    <div className="bg-gray-100 py-12">
      <h2 data-aos="fade-up" className="font-bold text-2xl text-center mb-6">
        Current Projects
      </h2>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl pb-10 sm:px-6 sm:py-8 lg:px-8">
          <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            {/* Left Section - Project Description */}
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Renovation & Kumbabishekam of Boomibalagan Temple, Malvoi
              </h2>
              <p className="mt-6 text-base text-black text-justify">
                We are honored to undertake the renovation and Kumbabishekam (consecration) of the Boomibalagan Temple
                in Malvoi. This sacred temple, deeply rooted in history and devotion, is undergoing meticulous restoration
                to preserve its spiritual essence and architectural grandeur. Our efforts are dedicated to reviving its
                divine energy, ensuring that future generations can continue to seek blessings and experience the temple’s
                rich heritage. Through this restoration, we aim to uphold the cultural and religious significance of this
                sacred space, fostering a renewed sense of devotion and community harmony.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <button
                  onClick={() => (window.location.href = "tel:+919655667705")}
                  className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="relative mt-2 h-80 lg:mt-8">
              <img
                alt="Boomibalagan Temple"
                src={Boomibalagan_Temple}
                className="absolute top-0 left-0 w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>

          {/* Project Highlights Section */}
          <div className="mt-10">
            <h2 className="font-bold text-xl text-center mb-4 md:text-2xl">
              Project Highlights
            </h2>
            <ul className="list-none max-w-4xl mx-auto px-6">
              {projectHighlights.map((item, index) => (
                <li key={index} className="flex items-start mb-4">
                  <span className="text-green-500 text-xl mr-3">✅</span>
                  <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Projects;
