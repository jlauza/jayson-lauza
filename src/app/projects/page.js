import Image from "next/image";
import React from "react";
import GlobalFooter from "../components/global-footer";

const ProjectsPage = () => {
  const pagetitle = "Projects";
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:filter-[invert(1)]"
          src="/netlauza.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold">{pagetitle}</h1>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search projects..."
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button className="bg-blue-500 text-white rounded px-4 py-2">
            Search
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="border border-gray-300 rounded p-4 flex flex-col sm:flex-row gap-4 items-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Thumbnail"
              className="w-24 h-24 object-cover rounded"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold">Pro Dance Suite</h2>
              <p className="text-gray-600">
                This software is intended for dance studios to manage their
                class bookings, private lessons, and events.
                <br />A complete tool for dance studio owners.
              </p>
              <a
                href="#"
                className="mt-2 inline-block bg-blue-500 text-white rounded px-4 py-2"
              >
                View Full Description
              </a>
            </div>
          </div>

          <div className="border border-gray-300 rounded p-4 flex flex-col sm:flex-row gap-4 items-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Thumbnail"
              className="w-24 h-24 object-cover rounded"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold">Pro Dance Suite Mobile</h2>
              <p className="text-gray-600">
                This software is intended for dance studios to manage their
                class bookings, private lessons, and events.
                <br />A complete tool for dance studio owners.
              </p>
              <a
                href="#"
                className="mt-2 inline-block bg-blue-500 text-white rounded px-4 py-2"
              >
                View Full Description
              </a>
            </div>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
};

export default ProjectsPage;
