import Image from "next/image";
import React from "react";
import GlobalFooter from "../components/global/footer";

const TestimonialsPage = () => {
  const pagetitle = "Testimonials";
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

        <div className="flex items-center gap-2">Content goes here</div>
      </main>
      <GlobalFooter />
    </div>
  );
};

export default TestimonialsPage;
