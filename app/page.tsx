import Image from "next/image";
import Header from "./Components/Header"; //Navigation
import Intro from "./Components/Intro";
import Banner from "./Components/Banner";
import Transaction from "./Components/Transaction";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen mx-10">
        <Intro />
        <Banner />
        <Transaction />
      </main>
    </>
  );
}
