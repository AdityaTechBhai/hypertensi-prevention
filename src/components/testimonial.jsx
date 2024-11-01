import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[#0099FF] text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4">
                Patient Testimonials:
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
                Hear from Those We've Cared For
            </h3>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                Discover the difference we make through the voices of those we've served:
            </p>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-6">
            <Card className="bg-blue-50/50 border-blue-100">
                <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/women/3.jpg"
                            alt="Linda A."
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-gray-700 text-sm mb-2">
                                "This system has been a lifesaver for managing my hypertension. It's user-friendly, affordable, and incredibly efficient."
                            </p>
                            <p className="text-gray-600 font-medium text-sm">- Linda A.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-blue-50/50 border-blue-100">
                <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/3.jpg"
                            alt="Henry B."
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-gray-700 text-sm mb-2">
                                "Managing my hypertension has never been easier. The system is cost-effective and very user-friendly."
                            </p>
                            <p className="text-gray-600 font-medium text-sm">- Henry B.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mb-16">
            <Card className="bg-blue-50/50 border-blue-100">
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/women/43.jpg"
                            alt="Linda A."
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-gray-700 mb-2">
                                "This platform has made managing my hypertension so much easier. It's affordable, user-friendly, and very efficient."
                            </p>
                            <p className="text-gray-600 font-medium">- Linda A.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-blue-50/50 border-blue-100">
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/4.jpg"
                            alt="Henry B."
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-gray-700 mb-2">
                                "The system is a game-changer for managing hypertension. It's user-friendly, affordable, and incredibly efficient."
                            </p>
                            <p className="text-gray-600 font-medium">- Henry B.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8 md:my-16">
            <div className="text-center">
                <p className="text-[#0099FF] text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">10,000<span className="text-3xl md:text-4xl lg:text-5xl">+</span></p>
                <p className="text-gray-600 text-xs md:text-sm lg:text-base">Successful Consultations</p>
            </div>
            <div className="text-center">
                <p className="text-[#0099FF] text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">2,500<span className="text-3xl md:text-4xl lg:text-5xl">+</span></p>
                <p className="text-gray-600 text-xs md:text-sm lg:text-base">Healthcare Professionals</p>
            </div>
            <div className="text-center">
                <p className="text-[#0099FF] text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">98<span className="text-3xl md:text-4xl lg:text-5xl">%</span></p>
                <p className="text-gray-600 text-xs md:text-sm lg:text-base">Patient Satisfaction Rate</p>
            </div>
            <div className="text-center">
                <p className="text-[#0099FF] text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">200<span className="text-3xl md:text-4xl lg:text-5xl">+</span></p>
                <p className="text-gray-600 text-xs md:text-sm lg:text-base">Top Specialists</p>
            </div>
        </div>

        {/* Additional Desktop layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
            <Card className="bg-blue-50/50 border-blue-100">
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/5.jpg"
                            alt="Joshua T."
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-gray-700 mb-2">
                                "Dealing with hypertension has always been a challenge, but this system has made it so much easier. It's efficient and hassle-free."
                            </p>
                            <p className="text-gray-600 font-medium">- Joshua T.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-blue-50/50 border-blue-100">
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/women/5.jpg"
                            alt="Samantha K."
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-gray-700 mb-2">
                                "Finding a doctor who truly understands my hypertension needs has been a game-changer. This platform has made managing my health so much easier."
                            </p>
                            <p className="text-gray-600 font-medium">- Samantha K.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-6 mt-6">
            <Card className="bg-blue-50/50 border-blue-100">
                <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/6.jpg"
                            alt="Joshua T."
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-gray-700 text-sm mb-2">
                                "The prescription refill system is a game-changer for managing my hypertension. It's really efficient and completely hassle-free."
                            </p>
                            <p className="text-gray-600 font-medium text-sm">- Joshua T.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-blue-50/50 border-blue-100">
                <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/women/6.jpg"
                            alt="Samantha K."
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-gray-700 text-sm mb-2">
                                "Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life."
                            </p>
                            <p className="text-gray-600 font-medium text-sm">- Samantha K.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>
)
}
