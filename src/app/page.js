import Image from "next/image";
import Link from "next/link";
import {
  DoubleArrowRightIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import GlobalFooter from "./components/global-footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:filter-[invert(1)]"
          src="/netlauza.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            This website is intented to display the project collections
          </li>
          <li className="mb-2">Creator of this site is Jayson Lauza</li>
          <li className="mb-2">
            See the author's{" "}
            <Link href="https://github.com/jlauza" target="_blank">
              GitHub profile <DoubleArrowRightIcon className="inline" />
            </Link>
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-foreground gap-2 hover:bg-secondary dark:hover:bg-secondary text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/projects"
            rel="noopener noreferrer"
          >
            Explore Projects
            <DoubleArrowRightIcon className="inline" />
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#cecece] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvelopeClosedIcon className="inline mr-2" /> Contact Us
          </a>
        </div>
      </main>
      {/* Footer location */}
      <GlobalFooter />
    </div>
  );
}
