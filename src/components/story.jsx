import React from 'react';
import { Card } from '@/components/ui/card'; // Import Card component
import { Button } from '@/components/ui/button'; // Import Button component

const HealNetStory = () => {
  return (
    // Main Card Container
    <Card className="max-w-6xl mx-auto p-8 bg-white rounded-3xl">
      <div className="flex flex-col gap-8">
        
        {/* Title Section */}
        <div className="space-y-1">
          {/* Main Title with Highlighted Brand Name */}
          <span className="text-4xl">
            <span className="text-blue-500">DoctorUS's Story</span>
            <span className="text-gray-800">: Get to Know Us</span>
          </span>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Image Section */}
          <div className="md:w-1/2">
            <img 
              src="/Doctor_Story.png" 
              alt="Medical professional"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text Content Section */}
          <div className="md:w-1/2 flex flex-col justify-between gap-6">
            <div className="space-y-4 text-gray-600">
              {/* First Paragraph */}
              <p>
                DoctorUS is dedicated to combating hypertension, a prevalent and often silent condition affecting millions worldwide. Our mission is to provide comprehensive care and innovative solutions to help individuals manage and overcome high blood pressure.
              </p>
              
              {/* Second Paragraph */}
              <p>
                Founded by a team of experienced cardiologists, healthcare professionals, and researchers, DoctorUS leverages cutting-edge technology and personalized treatment plans to ensure each patient receives the best possible care tailored to their unique needs.
              </p>
              
              {/* Third Paragraph */}
              <p>
                Our platform emphasizes preventive care, patient education, and continuous monitoring to empower individuals in taking control of their health. Through regular consultations, lifestyle coaching, and advanced medical interventions, we strive to improve the quality of life for those living with hypertension.
              </p>
            </div>

            {/* Call-to-Action Button */}
            <div className="mt-6">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-fit px-8 py-3 text-lg rounded-full">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HealNetStory;
