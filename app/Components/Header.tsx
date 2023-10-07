import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navigation = [
    { href: "/", label: "Home" },
    { href: "/discover", label: "Discover" },
    { href: "/docs", label: "Docs" },
    { href: "/about", label: "Blog" },
    ,
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];
  console.log(navigation);
  return (
    <header className="flex justify-between mx-10  pt-4 items-center">
      <article className="flex gap-4 items-center">
        <Image
          src="/images/Logo.png"
          alt="Picture of the author"
          width={43}
          height={40}
        />
        <h2 className="">Panda NFT</h2>
      </article>
      <ul className="flex gap-10">
        {navigation.map((nav) => (
          <li>
            <Link
              href={nav?.href as Url}
              key={nav?.label as string}
              legacyBehavior
            >
              <a>{nav?.label as string}</a>
            </Link>
          </li>
        ))}
      </ul>

      <article className="flex gap-4">
        <button className="bg-[#1E50FF] rounded-2xl h-10 px-4 hover:bg-transparent hover: border border-[#1E50FF]">
          Register
        </button>
        <button className="rounded-2xl border border-[#1E50FF] px-4 hover:bg-[#1E50FF] hover:border-none">
          Login
        </button>
      </article>
    </header>
  );
};

export default Header;
