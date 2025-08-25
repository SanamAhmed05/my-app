// Updated WorkProcess component with custom SVG icons
const steps = [
  {
    title: "Survey",
    icon: (
      <img 
        src="/assets/Group.svg" 
        alt="Survey Icon" 
        className="w-12 h-12 mb-4 mt-5 mx-auto"
      />
    ),
    description: (
      <>
        Conduct a thorough analysis <br /> of the site and client requirements.
      </>
    ),
  },
  {
    title: "Design",
    icon: (
      <img 
        src="/assets/Group (1).svg" 
        alt="Design Icon" 
        className="w-12 h-12 mb-4 mt-5 mx-auto"
      />
    ),
    description: (
      <>
        Create detailed architectural <br />plans and 3D models.
      </>
    )
  },
  {
    title: "Construct",
    icon: (
      <img 
        src="/assets/Group (2).svg" 
        alt="Construct Icon" 
        className="w-12 h-12 mb-4 mt-5 mx-auto"
      />
    ),
    description:(
      <>
        Execute the construction process<br/> with precision and quality.
      </>
    )
  },
  {
    title: "Handover",
    icon: (
      <img 
        src="/assets/Group (3).svg" 
        alt="Handover Icon" 
        className="w-12 h-12 mb-4 mt-5 mx-auto"
      />
    ),
    description:(
      <>
        Deliver the completed project<br /> to the client.
      </>
    )
  },
];

export default function WorkProcess() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-gray-600 text-lg">Our Work Process:</h2>
      <h3 className="text-2xl md:text-4xl font-bold mb-12">
        Crafting <span className="text-black">Architectural Excellence</span>
      </h3>

      <div className="grid grid-cols-1 pr-20 pl-20 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {step.icon}
            <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}