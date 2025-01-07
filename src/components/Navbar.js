"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { fetchData } from "@/lib/api";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  // Get current path
  const pathname = usePathname();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData("/acf-options/header");
        if (!response) {
          throw new Error("Failed to fetch data");
        }
        setData(response.header);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    getData();
  }, []);

  if (pathname === "/the-pm-newsletter" || pathname === "/srk") {
    return null;
  }

  return (
    <header className="flex items-center justify-between absolute px-4 sm:px-6 lg:px-8 bg-transparent w-[100%] z-10">
      <Link href="/">
        <div className="mt-6 flex items-center cursor-pointer">
          <img
            src={data?.header_logo?.logo_image?.image}
            srcSet={`${
              data?.header_logo?.logo_image?.image
            } 1x, ${data?.header_logo?.logo_image?.image.replace(
              ".jpg",
              "@2x.jpg"
            )} 2x`}
            width={144}
            height={80}
            alt="Logo"
            loading="lazy"
          />
        </div>
      </Link>
      <nav className="flex items-center space-x-4 md:space-x-6 lg:space-x-10">
        <div className="flex flex-row items-center gap-1 md:gap-3 lg:gap-4">
          {data?.social_media_sections &&
            data?.social_media_sections.map((icon, index) => (
              <div key={index} className="p-2 rounded-full">
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="inline-block !h-5 !w-5"
                    src={icon.social_media_icon}
                    alt={icon.social_media_name}
                  />
                </a>
              </div>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
