"use client";
import React, { useState } from "react";
import Image from "next/image";
import GlobalFooter from "../components/global/footer"; // Make sure to adjust the import path

const ProjectFullDescription = ({ project, onClose }) => {
  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <button className="absolute top-2 right-2 text-red-500" onClick={onClose}>
        Close
      </button>
      <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: "Pro Dance Suite",
      description:
        "This software is intended for dance studios to manage their class bookings, private lessons, and events. A complete tool for dance studio owners.",
      thumbnail: "https://placehold.co/600x400?text=No+Thumbnail",
    },
    {
      title: "Pro Dance Suite Mobile",
      description:
        "This software is intended for dance studios to manage their class bookings, private lessons, and events. A complete tool for dance studio owners.",
      thumbnail: "https://placehold.co/600x400?text=No+Thumbnail",
    },
  ];

  const handleViewDescription = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDescription = () => {
    setSelectedProject(null);
  };

  return (
    <>
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
          <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
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
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded p-4 flex flex-col sm:flex-row gap-4 items-center"
              >
                <img
                  src={project.thumbnail}
                  alt="Thumbnail"
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
                  <button
                    onClick={() => handleViewDescription(project)}
                    className="mt-2 inline-block bg-blue-500 text-white rounded px-4 py-2"
                  >
                    View Full Description
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
        <GlobalFooter />
      </div>

      {selectedProject && (
        <ProjectFullDescription
          project={selectedProject}
          onClose={handleCloseDescription}
        />
      )}
    </>
  );
};

export default ProjectsPage;
