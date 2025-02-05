"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";
import Navigation from "../components/global/navigation";
import Footer from "../components/global/footer";

export default function ContactSales() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <Navigation />
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Contact sales
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {[
              {
                id: "first-name",
                name: "First name",
                autoComplete: "given-name",
              },
              {
                id: "last-name",
                name: "Last name",
                autoComplete: "family-name",
              },
              { id: "company", name: "Company", autoComplete: "organization" },
              {
                id: "email",
                name: "Email",
                type: "email",
                autoComplete: "email",
              },
            ].map(({ id, name, type = "text", autoComplete }) => (
              <div
                key={id}
                className={
                  id === "company" || id === "email" ? "sm:col-span-2" : ""
                }
              >
                <label
                  htmlFor={id}
                  className="block text-sm font-semibold text-gray-900"
                >
                  {name}
                </label>
                <div className="mt-2.5">
                  <input
                    id={id}
                    name={id}
                    type={type}
                    autoComplete={autoComplete}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
            ))}

            {/* Phone Number Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2.5 flex rounded-md border border-gray-300 bg-white">
                <select
                  id="country"
                  name="country"
                  className="w-18 rounded-l-md border-r border-gray-300 bg-gray-50 px-3 py-2 text-gray-500 focus:outline-none focus:ring-0"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block w-full rounded-r-md border-0 px-3 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* Switch */}
            <div className="sm:col-span-2 flex gap-x-4">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`group flex w-8 flex-none cursor-pointer rounded-full p-px transition-colors duration-200 ease-in-out ring-1 ring-gray-900/5 ${
                  enabled ? "bg-indigo-600" : "bg-gray-200"
                }`}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={`size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out ${
                    enabled ? "translate-x-3.5" : "translate-x-0"
                  }`}
                />
              </Switch>
              <label className="text-sm text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
