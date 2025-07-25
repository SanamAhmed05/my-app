// ✅ Your existing code with updated grid + width responsiveness only

import { 
  FaClipboardList, 
  FaDraftingCompass, 
  FaLayerGroup, 
  FaCheckCircle 
} from "react-icons/fa";

const steps = [
  {
    title: "Survey",
    icon: <FaClipboardList className="text-orange-500 text-4xl mb-4 mt-5" />,
    description: (
  <>
    Conduct a thorough analysis <br /> of the site and client requirements.
  </>
),

  },
  {
    title: "Design",
    icon: <FaDraftingCompass className="text-orange-500 text-4xl mb-4 mt-5" />,
    description: (
      <>
      Create detailed architectural <br />plans and 3D models.
      </>
    )
  },
  {
    title: "Construct",
    icon: <FaLayerGroup className="text-orange-500 text-4xl mb-4 mt-5" />,
    description:(
     <>
    Execute the construction process<br/> with precision and quality.
    </>
    )
  },
  {
    title: "Handover",
    icon: <FaCheckCircle className="text-orange-500 text-4xl mb-4 mt-5" />,
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
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
