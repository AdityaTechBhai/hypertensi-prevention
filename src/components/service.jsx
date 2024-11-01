import { Calendar, Video, FileText, Pill, ClipboardList } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <section className="container mx-auto px-4 py-12 relative overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Top <span className="text-sky-400">services</span> we offer
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
          In today's fast-paced world, your health deserves the utmost attention and convenience. That's
          why HealNet offers a suite of integrated services designed to cater to your healthcare needs digitally:
        </p>
      </div>

      {/* Decorative waves */}
      <div className="absolute left-0 top-20 -z-10 hidden md:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C20 40 20 80 40 80C60 80 60 40 80 40C100 40 100 80 120 80" stroke="#E6F3FF" strokeWidth="2" />
          <path d="M0 60C20 60 20 100 40 100C60 100 60 60 80 60C100 60 100 100 120 100" stroke="#CCE7FF" strokeWidth="2" />
          <path d="M0 80C20 80 20 120 40 120C60 120 60 80 80 80C100 80 100 120 120 120" stroke="#B3DBFF" strokeWidth="2" />
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card className="p-4 md:p-6">
          <CardContent className="space-y-4">
            <div className="text-blue-600">
              <Video className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-blue-600">Online Consultations</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Consult with top doctors across various specialties via video or chat communication. It's totally secure, private, and convenient.
              Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.
            </p>
          </CardContent>
        </Card>

        <Card className="p-4 md:p-6">
          <CardContent className="space-y-4">
            <div className="text-blue-600">
              <Calendar className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-blue-600">Booking Appointments</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online
              consultation features.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-4 md:p-6">
          <CardContent className="space-y-4">
            <div className="text-blue-600">
              <FileText className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-blue-600">Prescriptions</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Receive and renew prescriptions digitally after your consultation with our specialists.
            </p>
          </CardContent>
        </Card>

        <Card className="p-4 md:p-6">
          <CardContent className="space-y-4">
            <div className="text-blue-600">
              <ClipboardList className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-blue-600">Medical Notes</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Obtain necessary medical notes for work or school with only a few clicks of hassle.
            </p>
          </CardContent>
        </Card>

        <Card className="p-4 md:p-6">
          <CardContent className="space-y-4">
            <div className="text-blue-600">
              <Pill className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-blue-600">Medicine Refills</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Skip the pharmacy queues and save time + energy by ordering medicine refills online.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Decorative waves */}
      <div className="absolute right-0 bottom-20 -z-10 hidden md:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C20 40 20 80 40 80C60 80 60 40 80 40C100 40 100 80 120 80" stroke="#E6F3FF" strokeWidth="2" />
          <path d="M0 60C20 60 20 100 40 100C60 100 60 60 80 60C100 60 100 100 120 100" stroke="#CCE7FF" strokeWidth="2" />
          <path d="M0 80C20 80 20 120 40 120C60 120 60 80 80 80C100 80 100 120 120 120" stroke="#B3DBFF" strokeWidth="2" />
        </svg>
      </div>
    </section>
  )
}
