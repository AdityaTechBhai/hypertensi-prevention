import { SiFacebook, SiLinkedin, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Mobile Version */}
        <div className="md:hidden space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <img src="/placeholder.svg?height=50&width=50" alt="HealNet Logo" width={50} height={50} className="text-[#0088CC]" />
            <h2 className="text-2xl font-bold text-[#0088CC]">HealNet</h2>
            <p className="text-muted-foreground max-w-xs">
              Experience personalized medical care from the comfort of your home.
            </p>
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-[#0088CC]">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground">Getting Started</a></li>
                <li><a href="#" className="text-muted-foreground">FAQS</a></li>
                <li><a href="#" className="text-muted-foreground">Help Articles</a></li>
                <li><a href="#" className="text-muted-foreground">Report an issue</a></li>
                <li><a href="#" className="text-muted-foreground">Contact Help Desk</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-[#0088CC]">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground">Booking appointments</a></li>
                <li><a href="#" className="text-muted-foreground">Online consultations</a></li>
                <li><a href="#" className="text-muted-foreground">Prescriptions</a></li>
                <li><a href="#" className="text-muted-foreground">Medicine Refills</a></li>
                <li><a href="#" className="text-muted-foreground">Medical Notes</a></li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-[#0088CC]">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground">Terms & Conditions</a></li>
              <li><a href="#" className="text-muted-foreground">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground">Cookie Notice</a></li>
              <li><a href="#" className="text-muted-foreground">Cookie Preferences</a></li>
              <li><a href="#" className="text-muted-foreground">Trust Center</a></li>
            </ul>
          </div>
          <Separator />
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-[#0088CC]">
              <SiFacebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#0088CC]">
              <SiInstagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#0088CC]">
              <SiLinkedin className="h-6 w-6" />
              <span className="sr-only">Linkedin</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#0088CC]">
              <SiYoutube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
          <p className="text-sm text-center text-muted-foreground">
            HealNet {new Date().getFullYear()} © All Rights Reserved
          </p>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/placeholder.svg?height=50&width=50" alt="HealNet Logo" width={50} height={50} className="text-[#0088CC]" />
                <h2 className="text-2xl font-bold text-[#0088CC]">HealNet</h2>
              </div>
              <p className="text-muted-foreground max-w-xs mb-8">
                Experience personalized medical care from the comfort of your home.
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="font-semibold text-[#0088CC] mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Getting Started</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">FAQS</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Help Articles</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Report an issue</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Contact Help Desk</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-semibold text-[#0088CC] mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Booking appointments</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Online consultations</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Prescriptions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Medicine Refills</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Medical Notes</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-semibold text-[#0088CC] mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Terms & Conditions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Cookie Notice</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Cookie Preferences</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#0088CC]">Trust Center</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-[#0088CC]">
                <SiFacebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#0088CC]">
                <SiInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#0088CC]">
                <SiLinkedin className="h-6 w-6" />
                <span className="sr-only">Linkedin</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#0088CC]">
                <SiYoutube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              HealNet {new Date().getFullYear()} © All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
