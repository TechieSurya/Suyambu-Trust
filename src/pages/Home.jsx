import { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaAndroid} from 'react-icons/fa';


import BoomibalaganTrust from '../assets/images/SriSuyambuBoomibalaganTrust.mp4'

import Boomibalagan from '../assets/images/Boomibalagan.jpg'
import Tradition from '../assets/icon/Tradition.png'
import Hindu from '../assets/icon/Hindu.png'
import Vedic from '../assets/icon/Vedic.png'
import Services from './Services';



const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay each child animation by 0.3s
    },
  },
};
const Home = () => {

  useEffect(() => {
      AOS.init({
      duration: 1000, 
      once: true,     
      easing: 'ease-in-out'
    });
  }, []);

  // State to control the popup visibility
  const [isFormVisible, setIsFormVisible] = useState(false);


  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');


  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (event)=>{
    event.preventDefault();

          setName("");
          setEmail("");
          setPhone("");
  }
  return (
    <div className=''>
   <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
      
   <video
          src={BoomibalaganTrust}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 h-full"></div>

      {/* Content */}
      <div className="mx-auto max-w-6xl w-full py-32 sm:py-48 lg:py-56 flex flex-col justify-center">
        <div className="relative flex flex-col items-center text-center w-full">
          
          {/* Title */}
          

          {/* Description */}
          <motion.div
            className="mt-6 px-10 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p className="text-white font-bold md:text-4xl leading-relaxed">
            Welcome To
            </p>
          </motion.div>
          <motion.h1
            className="md:text-5xl text-2xl font-bold tracking-tight text-[#FF9933] font-poppins uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Sri Suyambu Boomibalan Trust
          </motion.h1>
        </div>
      </div>
    </div>
<section className="bg-[#FFF8DC] py-12">
  <div className="container mx-auto px-6">
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Icon 1 */}
      <motion.div className="flex flex-col items-center" variants={iconVariants}>
        <img src={Tradition} className="w-16 h-16 mb-4" />
        <h3 className="text-black text-lg font-semibold">Protect Hindu Tradition</h3>
      </motion.div>

      {/* Icon 2 */}
      <motion.div className="flex flex-col items-center" variants={iconVariants}>
        <img src={Hindu} className="w-16 h-16 mb-4" />
        <h3 className="text-black text-lg font-semibold">Preserve Hindu Temples</h3>
      </motion.div>

      {/* Icon 3 */}
      <motion.div className="flex flex-col items-center" variants={iconVariants}>
        <img src={Vedic} className="w-16 h-16 mb-4" />
        <h3 className="text-black text-lg font-semibold">Ensure Vedic Science well preserved</h3>
      </motion.div>
    </motion.div>
  </div>
</section>


     <Services />

     <section className="bg text-white py-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FFF8DC] mb-6">
                    OUR STORY
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                At Sri Suyambu Boomibalagan Trust, we believe in Dharma Seva - serving society through spiritual, cultural and humanitarian efforts. Our mission to preserve temple traditions while also uplifting communities through various charitable initiatives.<br /> With the support of generous donors, volunteers and devotees, we continue to expand our efforts in temple restoration, religious services, education, healthcare and social welfare
                   
                </p>
                <button className="bg-[#FFF8DC] text-gray-900 font-semibold px-6 py-3 rounded-lg transition">
                  <a href="/ourstory"> Learn More</a> 
                </button>
            </div>
        </section>
      
      <div className='mx-auto max-w-7xl py-24 sm:px-6  sm:py-32 lg:px-8 mb-5 bg-gray-300 mt-5 rounded-lg '>
        <h2 className='text-center font-bold text-4xl text-yellow-500 '>Get Involved You Can Help Restore Temples with these Steps</h2>
        <p className='text-center text-base text-black'>We believe that temple restoration and humanitarian service go hand in hand. You can support our mission in several ways</p>
        <div className='grid grid-cols-1 items-center text-center sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4'>
          {/* Card 1 */}
          <motion.div
          data-aos="fade-up"
          data-aos-delay="0"
          whileHover={{ scale: 1.05 }}
          className="bg-white  shadow-lg rounded-lg p-6 m-5 transition duration-300 hover:shadow-2xl hover:bg-gray-800 hover:text-white">
                  <h1 className="text-2xl font-bold text-center ">Donate</h1>
            <p className="m-5 p-5 text-xl text-center">Your contributions help fund temple restorations, and social welfare projects.</p>
            <motion.button
        type="submit"
        className="shadow-xl text-lg bg-gray-900 text-white px-4 py-2 rounded-full border-2 hover:text-red-600 hover:bg-white transition-all"
        onClick={()=>(window.location.href='tel:+919655667705')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
              Contact Us
            </motion.button>
            </motion.div>
          {/* Card 2 */}
         <motion.div
          data-aos="fade-up"
          data-aos-delay="0"
          whileHover={{ scale: 1.05 }}
          className="bg-white  shadow-lg rounded-lg p-6 m-5 transition duration-300 hover:shadow-2xl hover:bg-gray-800 hover:text-white"
        >
            <h1 className="text-2xl font-bold text-center">Volunteer</h1>
            <p className="m-5 p-5 text-xl text-center">Join our team to assist in temple management, charity work, and outreach programs</p>
            <motion.button
        type="submit"
        className="shadow-xl text-lg bg-gray-900 text-white px-4 py-2 rounded-full border-2 hover:text-red-600 hover:bg-white transition-all"
        onClick={()=>(window.location.href='tel:+919655667705')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
              Contact Us
            </motion.button>
            </motion.div>
          {/* Card 3 */}
          <motion.div
          data-aos="fade-up"
          data-aos-delay="0"
          whileHover={{ scale: 1.05 }}
          className="bg-white  shadow-lg rounded-lg p-6 m-5 transition duration-300 hover:shadow-2xl hover:bg-gray-800 hover:text-white"
        >            <h1 className="text-2xl  font-bold text-center">Spread Awareness</h1>
            <p className="m-5 p-5 text-xl text-center">Share our cause and bring more devotees together in this divine initiative.</p>
            <motion.button
        type="submit"
        className="shadow-xl text-lg bg-gray-900 text-white px-4 py-2 rounded-full border-2 hover:text-red-600 hover:bg-white transition-all"
        onClick={()=>(window.location.href='tel:+919655667705')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
              Contact Us
            </motion.button>
            </motion.div>
          </div>
         
      </div>
    </div>
  );
}

export default Home;
