import { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAndroid} from 'react-icons/fa';



const Home = () => {

  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
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
    <div>
      
      <div 
        data-aos="fade-up"
        className="relative isolate px-6 pt-14 lg:px-8">
        <video
          src="/Boomibalagan Temple Malvai  ஸ்ரீ பூமி பாலகன் அமைந்துள்.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className='absolute inset-0 bg-black opacity-40'></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="relative flex flex-col items-center">
            <h1 className="md:text-2xl text-xl font-bold tracking-tight text-balance text-white font-inter">
              Welcome to
            </h1>
            <p className="mt-8 text-xl md:text-4xl font-bold text-pretty text-yellow-500 font-poppins uppercase">
              Sri Suyambu Boomibalan Trust
            </p>
            <div className="mt-10 gap-x-6">
              <a
                href="#"
                className="rounded-xl bg-white px-3.5 py-2.5 md:text-2xl font-bold text-brandOrange shadow-xs hover:text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Malvoi, Trichy
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div 
      className="pt-16 px-6 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-around lg:items-start gap-8">
                        <div 
                        data-aos="fade-right"
                        className="lg:w-[650px] text-center lg:text-left">
                            <h2 className="text-black lg:text-2xl font-bold mb-4">
                            Sri Suyambu Boomibalan Trust
                            </h2>
                            <p className="text-black leading-relaxed text-justify mb-4">
                            A dedicated organization committed to preserving and promoting the rich cultural and spiritual heritage of India’s temples. In addition to temple restoration, we actively engage in various charitable initiatives to support underprivileged communities, promote education, and provide essential services to those in need.
                            </p>
                            <button className='p-2 font-aclonica relative  bg-yellow-500 rounded-lg shadow-xl font-bold text-white'
            onClick={()=>(window.location.href='tel:+919655667705')}>
             <span className=''>Contact Us</span>
            </button>
                        </div>
                        <div 
                        data-aos="fade-left"
                        className="lg:w-1/3 flex justify-center">
                            <img
                                src="/Boomibalagan_Temple.jpg"
                                alt=""
                                width={450}
                                height={500}
                                className="object-cover rounded-xl"
                            />
                        </div>
      </div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <h2 
        data-aos="fade-up"
        className='font-bold text-2xl py-2 text-center text-yellow-500'>Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div 
          data-aos="fade-up"
          data-aos-delay="0"
          className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold">Temple Restoration & Conservation</h3>
            <p className="mt-2 text-justify">Identifying and restoring ancient temples, securing funding and support for renovation projects, and preserving temple art, scriptures, and traditions are essential steps in safeguarding our cultural heritage.</p>
          </div>
          {/* Card 2 */}
          <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold">Rituals and Pujas</h3>
            <p className="mt-2 text-justify">Experience seamless online booking for temple rituals and special pujas, personalized pooja services tailored for devotees, and convenient facilitation of prasadam delivery.</p>
          </div>
          {/* Card 3 */}
          <div 
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold">Charity & Social Welfare</h3>
            <p className="mt-2 text-justify">We support communities through free meals, education sponsorships, medical camps, aid for the elderly & orphans, and disaster relief efforts.</p>
          </div>
          
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-4'>
          {/* Card 4 */}
          <div 
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold">Devotee Services</h3>
            <p className="mt-2 text-justify">Experience seamless virtual temple visits and live darshan, dedicated assistance for elderly and differently-abled devotees, and hassle-free pilgrimage planning and temple tourism for a divine journey.</p>
          </div>
          {/* Card 5 */}
          <div 
          data-aos="fade-up"
          data-aos-delay="700"
          className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold">Spiritual & Cultural Programs</h3>
            <p className="mt-2 text-justify">We are dedicated to organizing religious and spiritual discourses, promoting temple festivals and cultural events, and supporting Vedic learning and heritage education to preserve and celebrate our rich traditions.</p>
          </div>
          
          </div>
      </div>
      <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
        <h2 className='text-center font-bold text-2xl text-yellow-500'>Get Involved</h2>
        <p className='text-center text-base'>We believe that temple restoration and humanitarian service go hand in hand. You can support our mission in several ways</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4'>
          {/* Card 1 */}
          <div 
          data-aos="fade-up"
          data-aos-delay="0"
          className="bg-white hover:shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-center">Donate</h3>
            <p className="mt-2 text-justify">Your contributions help fund temple restorations, daily rituals, and social welfare projects.</p>
          </div>
          {/* Card 2 */}
          <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white hover:shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-center">Volunteer</h3>
            <p className="mt-2 text-justify">Join our team to assist in temple management, charity work, and outreach programs</p>
          </div>
          {/* Card 3 */}
          <div 
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-white hover:shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-center">Spread Awareness</h3>
            <p className="mt-2 text-justify">Share our cause and bring more devotees together in this divine initiative.</p>
          </div>
          </div>
          <button
              type="submit"
              className="mt-2 flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-yellow-500 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              onClick={toggleFormVisibility} >
              Contact Us
            </button>
            {/* Popup Form */}
            {isFormVisible && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="relative w-96 h-auto border border-neutral rounded-lg bg-yellow-100 p-6 z-50">
                  <h2 className="font-extrabold text-2xl text-yellow-500 mb-2">
                  Together, We Can Create Something Incredible!
                  </h2>
                  <p className="text-black mb-4">
                  If you have a vision to make a positive impact and bring about meaningful change, Sri Suyambu Boomibalan Trust is here to turn your ideas into action. Whether you're initiating community projects or working towards enhancing the well-being of society, our mission is to empower and uplift, creating a better future for all
                  </p>
                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="flex gap-1 mt-4">
                      <div className="relative rounded-lg w-full overflow-hidden">
                        <input
                          type="text"
                          className="relative bg-transparent ring-0 outline-none border border-neutral/50 text-neutral/90 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-500 placeholder-opacity-60 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Name..."
                          required
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Phone number */}
                    <div className="flex gap-1 mt-4">
                      <div className="relative rounded-lg w-full overflow-hidden">
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          className="relative bg-transparent ring-0 outline-none border border-neutral/50 text-neutral/90 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-500 placeholder-opacity-60 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Phone..."
                          required
                          value={phone}
                          onChange={(e)=>setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="flex gap-1 mt-4">
                      <div className="relative rounded-lg w-full overflow-hidden">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="relative bg-transparent ring-0 outline-none border border-neutral/50 text-neutral/90 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-500 placeholder-opacity-60 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Email..."
                          required
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Subscribe Button */}
                    <div className="flex gap-1 mt-4">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 w-full rounded-lg hover:bg-brandYellow"
                      >
                        Submit
                      </button>
                    </div>
                  </form>

                  {/* Close Button */}
                  <button
                    className="absolute top-2 right-2 text-black font-bold hover:text-gray-800"
                    onClick={toggleFormVisibility}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
      </div>
    </div>
  );
}

export default Home;
