import Image from "next/image";

export default function Brands() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-2 lg:px-6">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Frameworks trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <Image
            alt="WordPress"
            src="/service-logos/wordpress-logo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="NextJS"
            src="/service-logos/nextjs-logo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="ReactJS"
            src="/service-logos/react-logo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="NestJS"
            src="/service-logos/nestjs-logo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="PHP"
            src="/service-logos/php-logo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="ExpressJS"
            src="/service-logos/expressjs-logo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
