"use client";

import Footer from "./components/global/footer";
import Navigation from "./components/global/navigation";
import Carousel from "./components/carousel";
import Products from "./components/products";
import Testimonials from "./components/testimonials";
import CTA from "./components/cta";
import Services from "./components/services";
import Brands from "./components/brands";

export default function Home() {
  return (
    <>
      <Navigation />
      {/* Hero */}
      <div id="hero" className="relative isolate px-4 pt-6 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto py-16 sm:py-24 lg:py-28">
          {/* Content Section */}
          <div className="order-1 lg:order-none">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.
                <a href="#" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="text-5xl font-semibold capitalize tracking-tight text-gray-900 sm:text-7xl">
              Helping business <span className="text-indigo-600">grow</span>{" "}
              with <span className="text-indigo-600">seamless</span> website
              solutions
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
              {/* Empower your business with cutting-edge ERP solutions designed
                to streamline operations, enhance productivity, and drive
                sustainable growth. Simplify workflows, improve collaboration,
                and scale effortlessly with our seamless technology. */}
              Empowering small businesses with powerful business website
              solutions designed for growth and efficiency.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="hover:shadow-xl hover:scale-105 transition transform rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Image First on Small Screens, Left on Large Screens */}
          <div className="flex items-center justify-center">
            <Carousel />
          </div>
        </div>
      </div>

      {/* Brands */}
      <Brands />

      {/* Services */}
      <Services />

      {/* Products */}
      <Products />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
}
