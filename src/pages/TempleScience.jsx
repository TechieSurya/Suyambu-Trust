import React from "react";
import Banner from '../assets/images/banner.jpg';
import Temple from '../assets/images/Hindus.jpg';
import SuyambuBoomibalanTemple from '../assets/images/Renovating_Temples.jpg';
import Boomibalagan_Temple_story from '../assets/images/Boomibalagan_Temple_story.jpg';
import Boomibalagan_Temple from '../assets/images/Kumbhabhishekam.jpg';

const TempleScience = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-96">
        <img
          src={Banner}
          alt="Temple Science Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Temple Science
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">
          A Deeper Look Into the Mystical Science & Significance of Temples
        </h2>

        {/* Section 1 - One Side Text, One Side Image */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Why Protect Temples?</h3>
            <div className="text-gray-800 text-justify p-3"> <p >
              For millennia, Hindus have built temples as sacred spaces for their deities, serving as spiritual and cultural centers in cities, towns, and villages. These temples foster a sense of community, bringing people together to engage in devotion, tradition, and spiritual growth. </p>
              <p > Hindu temples are sacred centers of divine energy, designed as ecosystems for spiritual awakening. The deities enshrined within are living presences that heal and guide devotees. When a temple is destroyed or its deity displaced, its spiritual power diminishes, severing a vital connection for Hindus and seekers.
              </p> </div>
          </div>
          <div className="md:w-1/2">
            <img src={Temple} alt="Why Protect Temples" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 mb-8">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Benefits of Renovating Temples</h3>
            <div className="text-gray-800 text-justify p-3">
              <p>
                For centuries, ancient scriptures and enlightened sages have emphasized the immense spiritual merits of sponsoring temple renovations. These acts not only preserve sacred spaces but also bring divine blessings.
              </p><p>
                Engaging in temple renovation, reconstruction, or Kumbabhishekam is considered one of the highest forms of service.  It is believed that as long as the contribution remains in the temple, the donor receives divine rewards for thousands of years in Kailash or Vaikuntha.
              </p><p>
                Similarly, acts of devotion such as supporting the underprivileged, facilitating marriages, or offering simple puja items like fruits, flowers, and camphor bring abundant blessings. Every offering, no matter how small, holds the power to create a lasting spiritual impact.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={SuyambuBoomibalanTemple} alt="Benefits of Renovating Temples" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">The Mystical Importance of Preserving Hindu Temples</h3>
            <div className="text-gray-800 text-justify p-3"><p >
              Saints and sages have long identified powerful spiritual sites, establishing temples to preserve their divine energy. These sacred spaces serve as centers of healing and transformation for generations.</p>
              <p>
                India’s temples, from Tirupati and Meenakshi Amman to Kashi Vishwanath and Jagannath Puri, attract millions of devotees, symbolizing deep faith and cultural heritage. Supporting temple restoration helps safeguard these spiritual treasures and their timeless wisdom.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={Boomibalagan_Temple_story} alt="The Mystical Importance" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 mb-8">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">The Science of Temple Kumbhabhishekam</h3>
            <div className="text-gray-800 text-justify p-3"><p >
              Kumbhabhishekam is the most sacred ritual in temple consecration, as prescribed by the Agama Shastras. "Kumbha" refers to a water pot, and "Abhishekam" signifies the ceremonial pouring of consecrated water over deities and temple towers to purify and energize them.</p>
              <p>
                This ritual, performed after days of sacred ceremonies, removes negative energies and channels divine blessings. It strengthens the temple’s spiritual power, allowing celestial beings to connect with devotees and bestow their grace.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={Boomibalagan_Temple} alt="Science of Kumbhabhishekam" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleScience;
