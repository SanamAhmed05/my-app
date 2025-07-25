'use client';

import { FaClipboardList, FaUsers, FaFileContract, FaCheckCircle } from 'react-icons/fa';

export default function EarnMoreSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center mt-3">
      <p className="text-sm text-gray-500 mb-2">4-step process</p>
      <h2 className="text-3xl font-bold mb-10">
        Earn More with <span className="text-black">Avaron</span>
      </h2>

      {/* ✅ 2 columns layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
        {/* Survey */}
        <div className="flex flex-col items-center pl-70 mt-5 ">
          <FaClipboardList className="text-orange-400 text-5xl mb-4" />
          <h3 className="font-bold  text-2xl mb-1 ">Survey</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Provide key property info no<br/> more than 5 minutes!
          </p>
        </div>

        {/* Expert Review */}
        <div className="flex flex-col items-center mt-5 pr-70">
          <FaUsers className="text-orange-400 text-5xl mb-4" />
          <h3 className="font-semibold text-2xl mb-1">Expert Review</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            We assess your property and <br/>schedule a visit
          </p>
        </div>

        {/* Sign & Approve */}
        <div className="flex flex-col items-center  mt-5 pl-70">
          <FaFileContract className="text-orange-400 text-5xl mb-4" />
          <h3 className="font-semibold text-2xl mb-1">Sign & Approve</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            
            Review and confirm pricing  along<br/> with the agreement.
          </p>
        </div>

        {/* Handover */}
        <div className="flex flex-col items-center  mt-5 pr-70 ">
          <FaCheckCircle className="text-orange-400 text-5xl mb-4" />
          <h3 className="font-semibold text-2xl mb-1">Handover</h3>
          <p className="text-sm text-b-600 max-w-xs">
            Sit back and watch your property<br/> generate revenue effortlessly.
          </p>
        </div>
      </div>

      <button className="bg-orange-400 text-white py-2 px-6 rounded-md mb-12 hover:bg-orange-500 transition">
        Submit Details
      </button>

      <p className="max-w-x5 mx-auto text-5xl font-bold mb-8 px-4">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      </p>

      <button className= "bg-orange-400 text-white mt-3 py-2 px-8 rounded-md hover:bg-orange-500 transition">
        Get Started
      </button>
    </section>
  );
}
