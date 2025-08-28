"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown, Menu, X, ChevronLeft } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function HomePage() {
    const [open, setOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

const galleryImages = [
  "/assets/gallery-1.png",
  "/assets/gallery-2.png",
  "/assets/gallery-3.png",
  "/assets/gallery-4.png",
  "/assets/gallery-5.png",
  "/assets/gallery-1.png",
  "/assets/gallery-2.png",
  "/assets/gallery-3.png",
  "/assets/gallery-4.png",
  "/assets/gallery-5.png",
    "/assets/gallery-1.png",
  "/assets/gallery-2.png",
  "/assets/gallery-3.png",
  "/assets/gallery-4.png",
  "/assets/gallery-5.png",
  "/assets/gallery-1.png",
  "/assets/gallery-2.png",
  "/assets/gallery-3.png",
  "/assets/gallery-4.png",
  "/assets/gallery-5.png",
]

const nextGalleryImage = () => {
  setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length)
}

const prevGalleryImage = () => {
  setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
}

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div
className="relative bg-gradient-to-b from-[#2DD8E5] to-[#45B7D1] overflow-hidden
             min-h-[60vh] md:min-h-screen"
                     style={{
          backgroundImage: `url(/assets/main-hero.png)`,
          // backgroundSize: "cover",
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative ">
              <Link
                href="/"
                className="text-sm lg:text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-sm lg:text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                About Us
              </Link>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-1 hover:text-[#0C7178] transition-colors"
              >
                <span>Our Business</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {open && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-[9999]">
                  <Link
                    href="/wipes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Wipes
                  </Link>
                  <Link
                    href="/cannanore-dispo"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cannanore Dispo
                  </Link>
                  <Link
                    href="/event-management"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Event Management
                  </Link>
                </div>
              )}
            </div>

              <Link
                href="#clients"
                className="text-sm lg:text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Clients
              </Link>
              <Link
                href="#gallery"
                className="text-sm lg:text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Gallery
              </Link>
              <Link href="#contact" className="bg-[#2DD8E5] hover:bg-[#25C4D1] text-white px-3 lg:px-4 py-2 rounded-xl text-sm lg:text-base font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  About Us
                </Link>

          {/* Mobile Dropdown */}
                      {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-1 hover:text-[#0C7178] transition-colors"
              >
                <span>Our Business</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {open && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <Link
                    href="/wipes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Wipes
                  </Link>
                  <Link
                    href="/cannanore-dispo"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cannanore Dispo
                  </Link>
                  <Link
                    href="/event-management"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Event Management
                  </Link>
                </div>
              )}
            </div>

                <Link
                  href="/clients"
                  className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Clients
                </Link>
                <Link
                  href="/gallery"
                  className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Gallery
                </Link>
                <Button className="bg-[#2DD8E5] hover:bg-[#25C4D1] text-white px-4 py-2 rounded-xl text-sm font-medium w-full">
                  Contact
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>


        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-20">
          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-black leading-none mb-8 md:mb-12">
              Future-focused.
              <br />
              Globally Ambitious.
              <br />
              Proudly rooted in India.
            </h1>

          <div className="flex items-center space-x-2">
            <Button className="bg-transparent border-2 border-white text-black hover:bg-[#25C4D1] hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-base font-medium transition-all duration-300">
              Explore More
            </Button>
            <Button className="bg-transparent border-2 border-white text-black hover:bg-[#25C4D1] hover:text-white p-3 md:p-4 rounded-xl transition-all duration-300">
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>

          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#0C7178] border-2 border-[#2FE1EE] rounded-full px-6 md:px-8 py-3 md:py-4">
                About Us
              </h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              W International is a future-focused enterprise headquartered in Kerala, India. We build brands that
              enhance everyday life through thoughtful design, sustainable practices, and exceptional quality.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-8 md:py-12 relative">
        <div className="flex flex-col md:flex-row min-h-[300px]">
          {/* Vision Section - Left side with gradient */}
          <div className="md:w-1/2 bg-gradient-to-r from-[#2DD8E5] to-transparent p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-4 md:mb-6">Our Vision</h2>
            <p className="text-sm md:text-base text-black leading-relaxed">
              To become a globally recognized multi-industry brand, delivering excellence and innovation across every
              business vertical we enter.
            </p>
          </div>

          {/* Mission Section - Right side */}
          <div className="md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-4 md:mb-6">Our Mission</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              To create world-class products combining Indian manufacturing strength with international quality
              benchmarks, expanding into diverse sectors with purpose-driven brands.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-4 md:mb-6">Sustainability</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                We are committed to eco-friendly packaging, ethical sourcing, and reducing our footprint for a better
                tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#0C7178] border-2 border-[#2FE1EE] rounded-full px-6 md:px-8 py-3 md:py-4">
                Our Business
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* WIPES Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-60 md:h-80 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                {/* <img src="/assets/business-wipes.png" alt="WIPES Products" className="w-full h-full object-cover" /> */}
                <Image
                  src="/assets/bussiness-wipes.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-4 right-4">
                  <a href="/wipes" className="bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
                    View More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-medium text-black mb-2">WIPES</h3>
                <p className="text-sm text-gray-600">Premium Tissue & Hygiene Solutions</p>
              </div>
            </div>

            {/* Cannanore Dispo Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-60 md:h-80 bg-gradient-to-br from-green-200 to-green-300 relative overflow-hidden">
                <Image
                  src="/assets/business-dispo.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4">
                  <a href="/cannanore-dispo" className="bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
                    View More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-medium text-black mb-2">Cannanore Dispo</h3>
                <p className="text-sm text-gray-600">Sustainable Disposable Solutions</p>
              </div>
            </div>

            {/* Event Management Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-60 md:h-80 relative overflow-hidden">
                <Image
                  src="/assets/business-event.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />           
                     <div className="absolute bottom-4 right-4">
                  <a href="/event-management" className="bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
                    View More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-medium text-black mb-2">Event Management</h3>
                <p className="text-sm text-gray-600">Celebrations, Designed to Perfection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#0C7178] border-2 border-[#2FE1EE] rounded-full px-6 md:px-8 py-3 md:py-4">
                Clients
              </h2>
            </div>
          </div>

          {/* Client Logos Grid */}
<div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8 md:gap-8 mb-8">
            {/* Top Row */}
<div className="flex items-center justify-center h-24 md:h-32">
  <Image
    src="/assets/client-1.png"
    alt="Logo"
    width={120}
    height={80}
    className="object-contain shadow-md hover:shadow-lg transition-shadow rounded-lg"
  />
</div>
<div className="flex items-center justify-center h-24 md:h-32">
  <Image
    src="/assets/client-2.png"
    alt="Logo"
    width={120}
    height={80}
    className="object-contain shadow-md hover:shadow-lg transition-shadow rounded-lg"
  />
</div>
<div className="flex items-center justify-center h-24 md:h-32">
  <Image
    src="/assets/client-3.png"
    alt="Logo"
    width={120}
    height={80}
    className="object-contain shadow-md hover:shadow-lg transition-shadow rounded-lg"
  />
</div>
<div className="flex items-center justify-center h-24 md:h-32">
  <Image
    src="/assets/client-4.png"
    alt="Logo"
    width={120}
    height={80}
    className="object-contain shadow-md hover:shadow-lg transition-shadow rounded-lg"
  />
</div>
<div className="flex items-center justify-center h-24 md:h-32">
  <Image
    src="/assets/client-5.png"
    alt="Logo"
    width={120}
    height={80}
    className="object-contain shadow-md hover:shadow-lg transition-shadow rounded-lg"
  />
</div>

            {/* Bottom Row */}
<div className="flex items-center justify-center h-24 md:h-32">
  <Image
    src="/assets/client-6.png"
    alt="Logo"
    width={120}
    height={80}
    className="object-contain shadow-md hover:shadow-lg transition-shadow rounded-lg"
  />
</div>
            <div className="flex items-center justify-center h-24 md:h-32">
  <Image
    src="/assets/client-7.png"
    alt="Logo"
    width={120}
    height={80}
    className="object-contain shadow-md hover:shadow-lg transition-shadow rounded-lg"
  />
</div>
<div className="flex items-center justify-center h-24 md:h-32">
  <Image
    src="/assets/client-8.png"
    alt="Logo"
    width={120}
    height={80}
    className="object-contain shadow-md hover:shadow-lg transition-shadow rounded-lg"
  />
</div>
            <div className="flex items-center justify-center h-24 md:h-32">
              <Image
                src="/assets/client-9.png"
                alt="Logo"
                width={120}   
                height={80}   
                className="object-contain shadow-md hover:shadow-lg transition-shadow rounded-lg"
              />
            </div>
<div className="flex items-center justify-center h-24 md:h-32">
  <Image
    src="/assets/client-10.png"
    alt="Logo"
    width={120}
    height={80}
    className="object-contain shadow-md hover:shadow-lg transition-shadow rounded-lg"
  />
</div>
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base text-gray-600 font-medium">Trusted by Industry Leaders</p>
          </div>
        </div>
      </section>

{/* Gallery Section */}
<section id="gallery" className="py-8 md:py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="text-center mb-8 md:mb-12">
      <div className="inline-block">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#0C7178] border-2 border-[#2FE1EE] rounded-full px-6 md:px-8 py-3 md:py-4">
          Gallery
        </h2>
      </div>
    </div>
    <div className="relative">
      {/* Gallery Container */}
      <div className="flex items-center justify-center space-x-2 md:space-x-4 relative">
        {/* Left Arrow */}
        <button
          onClick={prevGalleryImage}
          className="bg-[#2DD8E5] hover:bg-[#25C4D1] text-white p-2 md:p-3 rounded-full shadow-lg transition-colors z-20 flex-shrink-0"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        
        {/* Gallery Images */}
        <div className="flex-1 overflow-hidden relative max-w-6xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentGalleryIndex * (100 / (
                window.innerWidth < 640 ? 1 : 
                window.innerWidth < 768 ? 2 : 
                window.innerWidth < 1024 ? 3 : 5
              ))}%)`,
              width: `${(galleryImages.length / (
                window.innerWidth < 640 ? 1 : 
                window.innerWidth < 768 ? 2 : 
                window.innerWidth < 1024 ? 3 : 5
              )) * 100}%`,
            }}
          >
            {galleryImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-1 sm:px-2">
                <div className="w-full h-48 sm:h-56 md:h-60 lg:h-72 rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Arrow */}
        <button
          onClick={nextGalleryImage}
          className="bg-[#2DD8E5] hover:bg-[#25C4D1] text-white p-2 md:p-3 rounded-full shadow-lg transition-colors z-20 flex-shrink-0"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>
      
      {/* Optional: Gallery Indicators for mobile */}
      <div className="flex justify-center mt-4 space-x-2 sm:hidden">
        {Array.from({ length: Math.ceil(galleryImages.length / 1) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentGalleryIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentGalleryIndex ? 'bg-[#2DD8E5]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
</section>



      {/* Contact Us Section */}
      <section id="contact" className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#0C7178] border-2 border-[#2FE1EE] rounded-full px-6 md:px-8 py-3 md:py-4">
                Contact Us
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name*</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2DD8E5] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name*</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2DD8E5] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gmail*</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2DD8E5] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number*</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2DD8E5] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject*</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2DD8E5] focus:border-transparent outline-none transition-all"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message*</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2DD8E5] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <Button className="bg-[#2DD8E5] hover:bg-[#25C4D1] text-white px-8 py-3 rounded-lg text-sm font-medium">
                Send Message
              </Button>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#02B6C3] to-[#67F0FA] rounded-2xl p-8 text-white">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg text-[#066067] md:text-xl font-medium mb-4">Address</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    W International Pvt Ltd, Kannur
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-[#066067] md:text-xl font-medium mb-4">Contact</h3>
                  <div className="space-y-2">
                    <p className="text-sm md:text-base">+91 7666957476</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-[#066067] md:text-xl font-medium mb-4">Email</h3>
                  <div className="space-y-2">
                    <p className="text-sm md:text-base">info@winternational.in</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-[#066067] md:text-xl font-medium mb-4">Stay Connected</h3>
 {/* Social icons */}
  <div className="flex   space-x-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Map Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-64 md:h-96 relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wo696Ns8IxUrPV0rNB8aybeADSIUku.png"
                alt="Map showing Caltex Junction, Kannur location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-[#67F0FA] to-[#02B6C3] text-[#000000]">
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
                <a href="#about" className="block text-sm hover:text-white/80 transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-sm hover:text-white/80 transition-colors">
                  Business
                </a>
                <a href="#" className="block text-sm hover:text-white/80 transition-colors">
                  Clients
                </a>
                <a href="#" className="block text-sm hover:text-white/80 transition-colors">
                  Gallery
                </a>
                <a href="#" className="block text-sm hover:text-white/80 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Contact & Newsletter */}
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <div className="space-y-3 mb-6">
                <p className="text-sm">+91 7666957476</p>
                <p className="text-sm">info@winternational.in</p>
                <p className="text-sm leading-relaxed">
                  W International Pvt Ltd, Kannur
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
        <div className="bg-[#066067]  border-t border-white/20 text-white">
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
