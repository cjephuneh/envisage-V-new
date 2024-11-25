import React from 'react';
import { Smartphone, Code, Layout, Database, MessageSquare, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Custom mobile applications that deliver seamless experiences across all platforms."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "SMS & USSD Solutions",
      description: "Integrated communication services for effective customer engagement."
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "UX/UI Design",
      description: "User-centered design solutions that enhance engagement and satisfaction."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Management",
      description: "Efficient data organization and integration solutions for businesses."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description: "Responsive and scalable web applications built with modern technologies."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality control for flawless deployment."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to meet your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;