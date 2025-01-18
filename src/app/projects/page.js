import React from "react";

const ProjectsPage = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
      </main>
    </div>
  );
};

export default ProjectsPage;
