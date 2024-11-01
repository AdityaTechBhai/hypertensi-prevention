import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, CircleUser, ListChecks, Stethoscope } from "lucide-react";

const PlatformSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.",
      icon: <CircleUser className="w-6 h-6" />
    },
    {
      number: 2,
      title: "Choose Your Service",
      description: "Select from our range of services and book a consultation. Booking a consultation with DoctorUS is fairly simple and straight-forward.",
      icon: <ListChecks className="w-6 h-6" />
    },
    {
      number: 3,
      title: "Meet Your Doctor",
      description: "Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up.",
      icon: <Stethoscope className="w-6 h-6" />
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          How <span className="text-blue-400">our platform</span> works
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Navigating your healthcare journey with DoctorUS is seamless. Just follow these steps mentioned below to proceed with your selected services. You can also see our FAQ section for more guidance:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section - Order first on mobile, second on desktop */}
        <div className="relative order-1 md:order-2">
          <Card className="bg-white/50 backdrop-blur">
            <CardContent className="p-0">
              <img
                src="/Doctor_faq.png"
                alt="Doctor"
                className="w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-lg flex items-center gap-2">
                <Star className="text-blue-400 w-5 h-5" />
                <span className="text-sm font-medium">Best Certified Team of Specialists</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline Section - Order second on mobile, first on desktop */}
        <div className="space-y-8 order-2 md:order-1">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div className="w-px h-16 bg-blue-200 ml-6 my-2" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold flex gap-2 items-center">
                  {step.title}
                  {step.icon}
                </h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { PlatformSteps };

function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            How <span className="text-blue-500">Our Platform</span> Works
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Navigating your healthcare journey with DoctorUS is seamless. Just follow these steps below to proceed with your selected services. You can also see our FAQ section for more guidance:
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 md:order-1">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <img
                  src="/Doctor_faq.png"
                  alt="Doctor"
                  className="w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[600px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 backdrop-blur-md p-4 rounded-lg flex items-center gap-2 shadow-md">
                  <Star className="text-yellow-400 w-6 h-6" />
                  <span className="text-base font-medium text-gray-800">
                    Best Certified Team of Specialists
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Steps Section */}
          <div className="space-y-8 order-1 md:order-2">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Register an Account
                </h3>
                <p className="mt-2 text-gray-600">
                  Sign up on our platform using your email and start your healthcare journey.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Choose a Service
                </h3>
                <p className="mt-2 text-gray-600">
                  Select the healthcare service that best fits your needs from our offerings.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Book an Appointment
                </h3>
                <p className="mt-2 text-gray-600">
                  Schedule a session with our specialists at a time convenient for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
