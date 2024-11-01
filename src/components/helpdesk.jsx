import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, User } from "lucide-react"

export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-center text-3xl md:text-4xl font-medium mb-4">
        Reach our <span className="text-blue-500">Help Desk</span> for support
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
        Questions? Need assistance? Our dedicated support team is here to help you every step of the way.
      </p>
      <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
        <div className="relative flex-1">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input 
            placeholder="Enter Your First Name" 
            className="pl-10 h-12 text-base"
          />
        </div>
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input 
            type="email"
            placeholder="Enter Your Email Address" 
            className="pl-10 h-12 text-base"
          />
        </div>
        <Button className="h-12 px-6 text-base bg-blue-500 hover:bg-blue-600">
          Contact us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
