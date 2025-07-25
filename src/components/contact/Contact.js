'use client';

export default function ContactForm() {
  return (
    <section className="bg-white py-20 px-6 -mt-10">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Let&apos;s build it, shall we?
        </h2>
        <p className="text-gray-600 text-base">Lorem ipsum dolor sit amet</p>
      </div>

      <form className="max-w-2xl mx-auto space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-left">Name</label>
          <input
            id="name"
            type="text"
            className="w-full bg-neutral-700 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-left">Email</label>
          <input
            id="email"
            type="email"
            className="w-full bg-neutral-700 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your email"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-1 font-medium text-left">Phone</label>
          <input
            id="phone"
            type="tel"
            className="w-full bg-neutral-700 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your phone number"
          />
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block mb-1 font-medium text-left">Budget (USD)</label>
          <input
            id="budget"
            type="number"
            className="w-full bg-neutral-700 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your budget"
          />
        </div>

        {/* Project */}
        <div>
          <label htmlFor="project" className="block mb-1 font-medium text-left">Your Project</label>
          <textarea
            id="project"
            rows={4}
            className="w-full bg-neutral-700 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Tell us about your project"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-400 text-white  w-full font-medium py-3 px-6 rounded-xl hover:bg-orange-500 transition-all duration-300"
          >
            Submit Your Request
          </button>
        </div>
      </form>
    </section>
  );
}
