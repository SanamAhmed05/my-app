import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center mt-12 px-4">
        <h1 className="text-[32px] sm:text-[69px] text-center h-full font-normal w-full leading-snug sm:leading-tight">
          Experience Modern <br />
          <span className="font-bold">Luxury in Architecture</span>
        </h1>
        <p className="mt-4 max-w-lg mx-auto text-black-400 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
          do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-8">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Lorem ipsum</button>
          <button className="bg-white border px-4 py-2 rounded shadow-md">Lorem ipsum</button>
        </div>
      </section>

      {/* Clients / Logos Section */}
      <section className="mt-15 sm:mt-[60px] px-4">
        <p className="text-center text-gray-600 mb-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet
        </p>
        <div className="flex flex-wrap sm:flex-nowrap max-w-full gap-4 sm:gap-30 px-2 sm:px-4 sm:-ml-14 container mx-auto relative h-full justify-center sm:justify-start">
          {Array(7)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="text-base sm:text-xl font-bold">
                AVARON
              </div>
            ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-14 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Are Latest Projects
        </h2>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
  {/* Left neighbor → تھوڑا نیچے */}
  <div
    className="bg-gray-800 h-48  mt-5 sm:h-48 rounded-2xl transform translate-y-3 rotate-[-8deg] origin-center shadow-xl"
  ></div>

  {/* Second neighbor → تھوڑا کم نیچے */}
  <div
    className="bg-gray-800 h-48  mt-5 sm:h-48 rounded-2xl transform translate-y-1 rotate-[-10deg] origin-center shadow-xl"
  ></div>

  {/* Middle box */}
  <div className="bg-gray-800 h-60 sm:h-60 rounded-2xl shadow-xl"></div>

  {/* Right neighbor → translate down */}
  <div
    className="bg-gray-800 h-48 mt-5 sm:h-48 rounded-2xl transform translate-y-1 rotate-[4deg] origin-center shadow-xl"
  ></div>

  {/* Rightmost neighbor → تھوڑا زیادہ نیچے */}
  <div
    className="bg-gray-800 h-48 mt-5 sm:h-48 rounded-2xl transform translate-y-3 rotate-[8deg] origin-center shadow-xl"
  ></div>
</div>




      </section>
    </>
  );
}
