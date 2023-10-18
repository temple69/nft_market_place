import React from "react";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { BsPersonAdd } from "react-icons/bs";
import { FaAngellist } from "react-icons/fa";

const Transaction = () => {
  return (
    <section>
      <h2 className="text-base md:text-[3rem] font-bold  text-center my-10">
        Create and sell your NFTs
      </h2>

      <div className="flex gap-4">
        <article className="bg-[#272D37] rounded-2xl w-full md:w-[24rem] h-[23rem] px-4">
          <article className="flex justify-center  relative top-10">
            <button className="bg-[#1E50FF] w-[80px] h-[80px] rounded-[40px] flex justify-center items-center">
              <MdOutlinePhonelinkSetup size={34} />
            </button>
          </article>

          <h4 className="text-[0.8125rem] md:text-2xl font-bold text-center mt-[120px]">
            Set Up Your Wallet
          </h4>
          <p className="text-[0.875rem] text-[#ADB9C7] text-center w-[19.125rem] mt-4">
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </p>
        </article>
        <article className="bg-[#272D37] rounded-2xl w-full md:w-[24rem] h-[23rem] px-4">
          <article className="flex justify-center  relative top-10">
            <button className="bg-[#1E50FF] w-[80px] h-[80px] rounded-[40px] flex justify-center items-center">
              <BsPersonAdd size={34} />
            </button>
          </article>

          <h4 className="text-[0.8125rem] md:text-2xl font-bold text-center mt-[120px]">
            Add your NFTs
          </h4>
          <p className="text-[0.875rem] text-[#ADB9C7] text-center w-[19.125rem] mt-4">
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </p>
        </article>
        <article className="bg-[#272D37] rounded-2xl w-full md:w-[24rem] h-[23rem] px-4">
          <article className="flex justify-center  relative top-10">
            <button className="bg-[#1E50FF] w-[80px] h-[80px] rounded-[40px] flex justify-center items-center">
              <FaAngellist size={34} />
            </button>
          </article>

          <h4 className="text-[0.8125rem] md:text-2xl font-bold text-center mt-[120px]">
            List them for sale
          </h4>
          <p className="text-[0.875rem] text-[#ADB9C7] text-center w-[19.125rem] mt-4">
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Transaction;
