import React, { useState } from 'react';
import { HandHeart, Landmark, Users, Music } from "lucide-react";

function Donate() {
  const [formType, setFormType] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Function to toggle form visibility
  const toggleForm = (type) => {
    setFormType((prevType) => (prevType === type ? null : type)); // Toggle form type
  };

  // Close form when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setFormType(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${formType} form submitted!`);
    setFormType(null); // Close form after submission
  };

  const reasons = [
    {
      title: "Receive Divine Blessings",
      text: "Restoring temples brings immense spiritual merit (punya) and divine blessings into your life.",
      icon: <HandHeart className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Preserve Ancient Heritage & Wisdom",
      text: "India’s historic temples hold deep spiritual and scientific significance. Your support safeguards these sacred spaces from deterioration.",
      icon: <Landmark className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Empower Future Generations",
      text: "Your generosity ensures that future generations can experience the beauty and sanctity of these divine centers.",
      icon: <Users className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Inspire & Uplift the Community",
      text: "Temples are hubs of spirituality, music, art, and devotion. Restoring them strengthens our collective faith.",
      icon: <Music className="w-8 h-8 text-purple-500" />,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      {/* Header */}
      <div className="text-center py-12 bg-[#FF9933] text-white pt-26">
        <h1 className="text-3xl font-bold" data-aos="fade-up">Donate</h1>
        <p className="mt-2 text-lg" data-aos="fade-up" data-aos-delay="200">
          Will you help preserve India's ancient temples?
        </p>
      </div>

      {/* Why Support Temple Renovation */}
      <div className="bg-white min-h-screen px-6 sm:px-8 lg:px-20 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6" data-aos="fade-up">
          Why Support Temple Renovation?
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          By contributing to temple restoration, you play a vital role in preserving India's spiritual and cultural heritage.
        </p>

        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start gap-4">
              {item.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto px-6 py-12 mt-4 bg-white shadow-xl rounded-lg sm:px-12 md:py-16">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900">Join us in this noble mission!</h3>
          <p className="text-gray-700 mt-2">Help protect India’s sacred temples by making a contribution today.</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => toggleForm("donate")}
              className="px-6 py-3 rounded-md shadow-md font-semibold bg-[#FF9933] text-white"
            >
              Donate Now
            </button>
            <button
              onClick={() => toggleForm("volunteer")}
              className="px-6 py-3 rounded-md shadow-md font-semibold bg-blue-500 text-white hover:bg-blue-600"
            >
              Volunteer With Us
            </button>
          </div>
        </div>
        {/* Payment Methods */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-black">Bank Transfer</h3>
            <p className="mt-2 text-gray-600">Account Name: SRI SUYAMBU BOOMIBALAN TRUST</p>
            <p className="text-gray-600">Account Number: 098902000000764</p>
            <p className="text-gray-600">IFSC Code:IOBA0000989</p>
            <p className="text-gray-600">BRANCH CODE : 0989</p>
            <p className="text-gray-600">BRANCH NAME: PURATHAKUDI, INDIAN OVERSEAS BANK</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-black">UPI / QR Code</h3>
            <p className="mt-2 text-gray-600">Scan the QR code to donate instantly.</p>
            <img
              src="/qr-code.jpeg"
              alt="Scan to Donate via UPI"
              className="w-40 mx-auto mt-4 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>
      

      {/* Toggle Modal Form */}
      {formType && (
        <div
          id="overlay"
          className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative w-96 h-auto border border-neutral rounded-lg bg-yellow-100 p-6 z-50">
            <h2 className="font-extrabold text-2xl text-yellow-500 mb-2">
              {formType === "donate"
                ? "Make a Difference with Your Donation!"
                : "Join Us as a Volunteer!"}
            </h2>
            <p className="text-black mb-4">
              {formType === "donate"
                ? "Support temple restoration and help preserve India's spiritual heritage."
                : "Contribute your time and skills to make a meaningful impact."}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full p-2 border rounded-md mb-3"
                placeholder="Name..."
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                className="w-full p-2 border rounded-md mb-3"
                placeholder="Phone..."
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                className="w-full p-2 border rounded-md mb-3"
                placeholder="Email..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 w-full rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </form>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-black font-bold hover:text-gray-800"
              onClick={() => setFormType(null)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Donate;
