"use client"

import { ChevronRight, Menu, X  } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div
className="relative overflow-hidden
             min-h-[60vh] md:min-h-screen"
                     style={{
          backgroundImage: `linear-gradient(to right, #D912D9, #FFFFFF00),url(/assets/event/hero-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Navigation */}
        <nav className="relative z-10 p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 md:px-8 py-4 shadow-lg">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <a href ="/" className="flex items-center space-x-2">
                  <Image 
                    src="/assets/logo-nav.png" 
                    alt="Logo" 
                width={240}
                height={100}
                    className="rounded-lg"
                  />
                </a>

                <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-gray-900" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-900" />
                  )}
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                  <a
                    href="/"
                    className="text-sm lg:text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="text-sm lg:text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    Why us
                  </a>
                  <a
                    href="#built"
                    className="text-sm lg:text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    Built For Growth
                  </a>
                  <a 
                  href="/"
                  className="bg-[#890989] hover:bg-[#e880e8] text-white px-3 lg:px-4 py-2 rounded-xl text-sm lg:text-base font-medium">
                    Contact Us
                  </a>
                </div>
              </div>

              {isMobileMenuOpen && (
                <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-col space-y-4">
                    <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                      Home
                    </a>
                    <a
                      href="#about"
                      className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    >
                      Why Us
                    </a>
                    <a href="#built" className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                      Built For Growth
                    </a>
                    <a
                      href="/"
                     className="bg-[#890989] hover:bg-[#e880e8] text-white px-4 py-2 rounded-xl text-sm font-medium w-full">
                      Contact Us
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-20">
          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#FFFFFF] leading-none mb-1 md:mb-2">
              Cannanore
            </h1>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#FFFFFF] leading-none mb-8 md:mb-12">
             Dispo
            </h1>
            <br/>
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-[#FFFFFF] leading-none mb-2 md:mb-4">
              Modern Convenience.
            </h1>
                        {/* <br/> */}
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-[#FFFFFF] leading-none mb-2 md:mb-4">
              Eco-Friendly Responsibility.
            </h1>
          </div>
        </div>
      </div>

      {/* About us section */}
       <section className="relative bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <p className="text-gray-600 leading-relaxed mb-3">
            At W International, we believe that every event is more than just a gathering, it’s a story waiting to be told. 
Our Event Management division specializes in designing, planning, and executing premium events that are memorable, seamless, and impactful.
From weddings to large-scale corporate functions, we bring together creativity, precision, and professionalism to make your vision a reality.
          </p>
          {/* <p className="text-gray-600 leading-relaxed mb-3">
            Proudly manufactured in India with precision and care, Wipes
            combines softness, durability, and eco-conscious production to
            create products that improve everyday living.
          </p> */}
        </div>

        {/* Image Section */}
        <div className="flex justify-center space-x-6">
          <div className="relative w-80 h-52 md:w-92 md:h-60">
            <Image
              src="/assets/event/about-us.png" // replace with your actual path
              alt="Wipes Pack"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>


      {/* Our Business Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#980D98] border-2 border-[#D912D9]  rounded-full px-6 md:px-8 py-3 md:py-4">
                Our Services
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-60 md:h-80 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                {/* <img src="/assets/business-wipes.png" alt="WIPES Products" className="w-full h-full object-cover" /> */}
                <Image
                  src="/assets/event/why-1.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />

              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-medium text-black mb-2">Weddings</h3>
                <p className="text-sm text-gray-600">From elegant destination weddings to intimate family ceremonies, we design weddings that reflect your personality, traditions, and dreams</p>
              </div>
            </div>
            {/* WIPES Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-60 md:h-80 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                {/* <img src="/assets/business-wipes.png" alt="WIPES Products" className="w-full h-full object-cover" /> */}
                <Image
                  src="/assets/event/why-2.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />

              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-medium text-black mb-2">Corporate Events</h3>
                <p className="text-sm text-gray-600">Delivering impactful experiences for businesses, including product launches, award functions, seminars, and exhibitions.</p>
              </div>
            </div>

            {/* Cannanore Dispo Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-60 md:h-80 bg-gradient-to-br from-green-200 to-green-300 relative overflow-hidden">
                <Image
                  src="/assets/event/why-3.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />

              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-medium text-black mb-2">Luxury Car Rentals
</h3>
                <p className="text-sm text-gray-600">An unforgettable event deserves an equally unforgettable arrival. With W International’s Luxury Car Rentals, we provide a fleet of premium vehicles. </p>
              </div>
            </div>

          </div>
        </div>
      </section>


            {/* Built For Growth Section */}
      <section id="built" className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#980D98] border-2 border-[#D912D9] rounded-full px-6 md:px-8 py-3 md:py-4">
                Built For Growth
              </h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              With increasing demand for eco-friendly disposables, Cannanore Dispo is positioned to become a preferred brand for sustainable solutions in India and beyond. Backed by W International’s strong manufacturing base, we ensure quality, scalability, and global standards.
            </p>
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-[#FFABFF] to-[#A90DA9] text-[#000000]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
<div className="md:col-span-2 text-center">
  {/* Logo centered */}
  <div className="flex items-center justify-center mb-4">
    <Image 
      src="/assets/logo-footer.png" 
      alt="Logo" 
      width={260}
      height={260} 
      className="rounded-lg"
    />
  </div>

  <p className="text-sm leading-relaxed mb-6 max-w-md mx-auto">
    W International is a future-focused enterprise headquartered in Kerala, India. 
    We build brands that enhance everyday life through thoughtful design, sustainable 
    practices, and exceptional quality.
  </p>

  {/* Social icons */}
  <div className="flex justify-center space-x-4">
    <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
      <Facebook size={20} className="text-white" />
    </a>
    <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
      <Twitter size={20} className="text-white" />
    </a>
    <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
      <Instagram size={20} className="text-white" />
    </a>
    <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
      <Linkedin size={20} className="text-white" />
    </a>
    <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
      <Youtube size={20} className="text-white" />
    </a>
  </div>
</div>


            {/* Navigation */}
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4">Navigation</h3>
              <div className="space-y-3">
                <a href="#" className="block text-sm hover:text-white/80 transition-colors">
                  Home
                </a>
                <a href="/about" className="block text-sm hover:text-white/80 transition-colors">
                  About Us
                </a>
                <a href="/" className="block text-sm hover:text-white/80 transition-colors">
                  Business
                </a>
                <a href="/" className="block text-sm hover:text-white/80 transition-colors">
                  Clients
                </a>
                <a href="/" className="block text-sm hover:text-white/80 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Contact & Newsletter */}
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <div className="space-y-3 mb-6">
                <p className="text-sm">+91 91234 56789</p>
                <p className="text-sm">contact@winternational.com</p>
                <p className="text-sm leading-relaxed">
                  W International Pvt Ltd, 123 Business Park, Kochi, Kerala, India - 682001
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">Get the latest information</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-l-lg text-sm placeholder-white/70 focus:outline-none focus:bg-white/30"
                  />
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-r-lg transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#890989]  border-t border-white/20 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-sm">© 2025 W International. All Rights Reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm hover:text-white/80 transition-colors">
                  User Terms & Conditions
                </a>
                <span className="text-white/40">|</span>
                <a href="#" className="text-sm hover:text-white/80 transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
