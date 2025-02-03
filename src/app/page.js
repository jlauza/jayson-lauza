"use client";

import Footer from "./components/global/footer";
import Header from "./components/global/header";
import Carousel from "./components/carousel";
import Products from "./components/products";
import Testimonials from "./components/testimonials";
import CTA from "./components/cta";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Header />

        {/* Hero */}
        <div id="hero" className="relative isolate px-4 pt-10 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto py-25 sm:py-48 lg:py-45">
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
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Data to enrich your online business
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Image First on Small Screens, Left on Large Screens */}
            <div className="flex items-center justify-center">
              {/* <img
              src="https://via.placeholder.com/600x400"
              alt="Placeholder Image"
              className="w-full max-w-md rounded-lg shadow-lg"
            /> */}
              <Carousel />
            </div>
          </div>
        </div>

        {/* Features */}
        <Services />

        {/* Products */}
        <Products />

        {/* Testimonials */}
        <Testimonials />

        {/* CTA */}
        <CTA />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
