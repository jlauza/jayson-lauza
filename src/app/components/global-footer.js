import React from "react";
import {
  HomeIcon,
  CrumpledPaperIcon,
  ChatBubbleIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

const GlobalFooter = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center fixed bottom-0 w-full p-4 bg-foreground text-background">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
        rel="noopener noreferrer"
      >
        <HomeIcon className="inline" />
        Home
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/projects"
        rel="noopener noreferrer"
      >
        <CrumpledPaperIcon />
        Projects
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/testimonials"
        rel="noopener noreferrer"
      >
        <ChatBubbleIcon />
        Testimonails
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EnvelopeClosedIcon />
        Contact Us
      </a>
    </footer>
  );
};

export default GlobalFooter;
