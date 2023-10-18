import Image from "next/image";
import React from "react";
import Binance from "./Icons/Binance";
import Coinbase from "./Icons/Coinbase";
import TrustWallet from "./Icons/TrustWallet";
import TokenCrypto from "./Icons/TokenCrypto";
import Metamask from "./Icons/Metamask";
const imagesLink = [
  {
    link: "/images/bird_blue.png",
    alt: "Picture of the author",
  },
  {
    link: "/images/bird_lightblue.png",
    alt: "Picture of the author",
  },
  {
    link: "/images/bird_red.png",
    alt: "Picture of the author",
  },
];
//Component that renders the banner
const Banner = () => {
  const iconComponents = [
    {
      component: <Binance />,
      alt: "Binance",
    },
    {
      component: <TrustWallet />,
      alt: "TrustWallet",
    },
    {
      component: <Metamask />,
      alt: "Metamask",
    },
    {
      component: <Coinbase />,
      alt: "Coinbase",
    },
    {
      component: <TokenCrypto />,
      alt: "TokenCrypto",
    },
  ];

  return (
    <section className="my-8">
      <div className="flex flex-col md:flex-row gap-4">
        {imagesLink.map((image) => (
          <Image
            src={image.link}
            width={498}
            height={352}
            alt={image.alt}
            className="rounded-3xl object-cover"
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-12">
        {iconComponents.map((icon) => (
          <article>{icon.component}</article>
        ))}
      </div>
    </section>
  );
};

export default Banner;
