import React from 'react';
import { ClipboardCheck, Code, Layout, Shield, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <ClipboardCheck />,
      title: "Business Needs Assessment",
      description: "We thoroughly evaluate your unique business challenges to deliver tailored solutions."
    },
    {
      icon: <Layout />,
      title: "UX/UI Design",
      description: "Creating optimized user flows and engaging interfaces across all platforms."
    },
    {
      icon: <Code />,
      title: "Expert Development",
      description: "Our seasoned IT experts ensure top-quality, functional, and visually captivating projects."
    },
    {
      icon: <Shield />,
      title: "Quality Assurance",
      description: "Rigorous testing to guarantee seamless performance and flawless functionality."
    },
    {
      icon: <Rocket />,
      title: "Smooth Deployment",
      description: "Ensuring optimal performance during every product launch."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional results
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-100 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto text-indigo-600">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
                </div>
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600 text-white w-8 h-8 flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;