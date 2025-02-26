import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Boomibalagan_Temple_story from '../assets/images/Boomibalagan_Temple_story.jpg'

const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
    className="relative bg-cover bg-center h-100 flex items-center justify-center text-center text-white"
    style={{ backgroundImage: `url(${Boomibalagan_Temple_story})` }} 
  >
        <div className="absolute inset-0 "></div>
        <h1 className="text-4xl font-bold relative z-10" data-aos="fade-up">
          Our Story
        </h1>
      </div>

      {/* About Us Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-500" data-aos="fade-up">
          About Us
        </h2>
        <p
          className="mt-4 text-gray-700 text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At <span className="font-bold">Sri Suyambu Boomibalan Trust</span>, we believe in <span className="text-yellow-500 font-semibold">Dharma Seva</span>—serving society through spiritual, cultural, and humanitarian efforts. Our mission is to preserve temple traditions while also uplifting communities through various charitable initiatives.
        </p>
        <p
          className="mt-4 text-gray-700 text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          With the support of generous donors, volunteers, and devotees, we continue to expand our efforts in temple restoration, religious services, education, healthcare, and social welfare.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-yellow-500" data-aos="fade-up">
          Our Milestones
        </h2>
        <div className="mt-10 space-y-10">
          {/* Timeline Item 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start" data-aos="fade-right">
            <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2024</div>
            <div className="ml-6 mt-4 md:mt-0 text-gray-700">
              <h3 className="text-xl font-bold">Foundation of Our Trust</h3>
              <p className="mt-2">We started with a small team dedicated to temple restoration and spiritual enrichment.</p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start" data-aos="fade-left">
            <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2025</div>
            <div className="mr-6 mt-4 md:mt-0 text-gray-700 text-right md:text-left">
              <h3 className="text-xl font-bold">First Major Restoration Project</h3>
              <p className="mt-2">Successfully completed the restoration of a historic temple, bringing back its lost glory.</p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start" data-aos="fade-right">
            <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2025</div>
            <div className="ml-6 mt-4 md:mt-0 text-gray-700">
              <h3 className="text-xl font-bold">Expanding Our Mission</h3>
              <p className="mt-2">Introduced charity programs including food distribution, medical aid, and educational support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-yellow-500 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold" data-aos="zoom-in">Be a Part of Our Story</h2>
        <p className="mt-4 text-lg" data-aos="zoom-in" data-aos-delay="200">
          Join us in preserving our heritage and supporting communities in need.
        </p>
        <a href="/donate" className="mt-6 inline-block bg-white text-yellow-500 font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300" data-aos="zoom-in" data-aos-delay="400">
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default OurStory;
