import React from "react";
import Navigation from "../components/global/navigation";
import Footer from "../components/global/footer";
import Image from "next/image";

export default function AboutLauzaTech() {
  const features = [
    {
      name: "Who We Are:",
      description:
        "We are is dedicated to helping businesses streamline operations with smart, intuitive software solutions.",
    },
    {
      name: "What We Do:",
      description:
        "We build scalable, industry-focused SaaS platforms that simplify business management.",
    },
    {
      name: "Why Choose Us?",
      description: "Reliable, user-friendly, and designed to help you grow.",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-4">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold text-indigo-600">
                  Empowering Businesses
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  With Our ERP Solutions
                </p>
                <p className="mt-6 text-lg text-gray-600">
                  We create intuitive SaaS platforms that streamline business
                  operations, helping companies scale with ease.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
                  {features.map((feature, index) => (
                    <div key={index} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <span className="absolute top-1 left-1 size-5 text-indigo-600">
                          •
                        </span>
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="About LauzaTech"
              src="/carousel/hero-img-1.png"
              width={1280}
              height={769}
              className="w-full h-100 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
