import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium mb-2">
          <span className="text-sky-400">Masters of Medicine:</span>
        </h2>
        <h3 className="text-2xl md:text-3xl text-zinc-800 font-medium mb-4">
          Meet our team of specialists
        </h3>
        <p className="text-zinc-600 max-w-2xl mx-auto">
          Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique
          blend of expertise, empathy, and experience to ensure that your health is in the best hands.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="overflow-hidden bg-sky-400 text-white border-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3">
              <img
                src="/Doctor_books1.png"
                alt="Dr. Sarah Johnson"
                className="w-full h-auto"
              />
            </div>
            <div className="p-6 md:p-8 w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-2">
                Dr. Sarah Johnson (Cardiologist)
              </h3>
              <p className="mb-6">
                Heart health is Dr. Wong's passion, and her approach to cardiology integrates cutting-edge
                technology with compassionate care. She's a respected voice in the prevention of heart disease
                and a trusted partner to her patients on their journey to wellness.
              </p>
              <Button 
                variant="secondary" 
                className="bg-white text-sky-500 hover:bg-sky-50"
              >
                <Phone className="mr-2 h-4 w-4" />
                Book appointment
              </Button>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden bg-sky-400 text-white border-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3">
              <img
                src="/Doctor_books2.png"
                alt="Dr. Mark Lee"
                className="w-full h-auto"
              />
            </div>
            <div className="p-6 md:p-8 w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-2">
                Dr. Mark Lee (Dermatologist)
              </h3>
              <p className="mb-6">
                Dr. Lee is a visionary in dermatology, advancing treatments for skin health with a gentle, holistic
                approach. His dedication to clinical excellence and patient education has made him a leader in
                dermatological care. He's known for his precision and commitment to patient-centered care.
              </p>
              <Button 
                variant="secondary" 
                className="bg-white text-sky-500 hover:bg-sky-50"
              >
                <Phone className="mr-2 h-4 w-4" />
                Book appointment
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
