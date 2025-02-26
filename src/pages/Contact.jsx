import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* Header Section */}
      <div className="text-center py-12 bg-[#FF9933] text-white ">
        <h1 className="text-3xl font-bold" data-aos="fade-up">
          Contact Us
        </h1>
        <p className="mt-2 text-lg" data-aos="fade-up" data-aos-delay="200">
        For inquiries, donations, or collaboration opportunities, reach out to us at:
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-right">
            <h2 className="text-xl font-semibold text-[#FF9933] mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="text-black font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="text-black font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-black font-medium">Subject</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter subject"
              />
            </div>
            <div>
              <label className="text-black font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button className="w-full bg-[#FF9933] text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-6" data-aos="fade-left">
  {/* Contact Information */}
  <h2 className="text-xl font-semibold text-[#FF9933]">Our Contact Details</h2>

  {/* Address */}
  <div className="flex items-center space-x-4">
    <i className="fas fa-map-marker-alt text-yellow-500 text-2xl"></i>
    📍
    <p className="text-black"
    >No.2/65,
Perumal Kovil Street Thappai Kallukudi Vazhi,
Lalgudi Taluk,
Tiruchirapalli,
Tamil Nadu- 621651</p>
  </div>

  {/* Phone */}
  <div className="flex items-center space-x-4">
    <i className="fas fa-phone-alt text-yellow-500 text-2xl"></i>
    <p className="text-black">
      <a href="tel:+919655667705" className="hover:text-yellow-500 transition" onClick={()=>(window.location.href='tel:+919655667705')}>
      📞+91 96556 67705
      </a>
    </p>
  </div>

  {/* Email */}
  <div className="flex items-center space-x-4">
    <i className="fas fa-envelope text-yellow-500 text-2xl"></i>
    <p className="text-black">
      <a href="mailto:srisuyambuboomibalan@gmail.com" className="hover:text-yellow-500 transition">
      📧 srisuyambuboomibalan@gmail.com
      </a>
    </p>
  </div>

  {/* Google Map (Below Contact Details) */}
  <div className="mt-6">
    <h2 className="text-center text-xl font-bold text-[#FF9933] mb-6" data-aos="fade-up">
      Reach Us
    </h2>

    <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
      <iframe
        title="Google Map"
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77102.8188124369!2d78.90666076911364!3d11.013573823989566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baae7ff924378f5%3A0xc43b4b3c8c48e908!2sArulmigu%20Boomibalagan%20Temple!5e1!3m2!1sen!2sin!4v1740532720551!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</div>


{/* Google Maps Section */}


       
      </div>

      {/* Google Map */}
     
    </div>
  );
};

export default Contact;
