import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HotCollections() {
  return (
    <section className="flex flex-col gap-5">
      <h2
        className="text-5xl max-md:text-center"
        data-aos="fade-right"
        data-aos-once>
        Hot Collections
      </h2>
      <div className="flex justify-between items-center flex-wrap max-md:flex-col">
        <p
          className="text-white/70 max-w-lg text-center"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-once>
          Explore our exclusive collections of digital art, music, and more. Discover unique NFTs that you can own and trade, each crafted with creativity and passion by talented artists from around the world.
        </p>
        <Link
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-once
          href={"/"}
          className="flex gap-2 items-center hover:text-pink-500 transition max-md:mt-2">
          View All <FaArrowRight />
        </Link>
      </div>
      <div className="mt-5 flex justify-between gap-5 flex-wrap max-md:flex-col items-center">
        <div className="border border-white/50 flex flex-col gap-3 p-5 rounded-sm w-full max-w-[300px] relative" data-aos="fade-up" data-aos-once>
          <Image
            src={"/images/c1.png"}
            alt="collection image"
            width={300}
            height={300}
            className="w-full"
          />
          <div className="flex justify-between gap-3">
            <Image
              src={"/images/c1-1.png"}
              alt="collection image"
              width={78}
              height={78}
            />
            <Image
              src={"/images/c1-2.png"}
              alt="collection image"
              width={78}
              height={78}
            />
            <Image
              src={"/images/c1-3.png"}
              alt="collection image"
              width={78}
              height={78}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <h5 className="text-xl">TaskTrack</h5> {/* Updated name */}
            <button className="px-7 py-1 rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-80">
              35+ items
            </button>
          </div>
          <Image
            src={"/images/user1.png"}
            alt="collection image"
            width={60}
            height={60}
            className="absolute left-1/2 -translate-x-1/2 top-56"
          />
        </div>
        <div className="border border-white/50 flex flex-col gap-3 p-5 rounded-sm w-full max-w-[300px] relative" data-aos="fade-up" data-aos-once>
          <Image
            src={"/images/c2.png"}
            alt="collection image"
            width={300}
            height={300}
            className="w-full"
          />
          <div className="flex justify-between gap-3">
            <Image
              src={"/images/c2-1.png"}
              alt="collection image"
              width={78}
              height={78}
            />
            <Image
              src={"/images/c2-2.png"}
              alt="collection image"
              width={78}
              height={78}
            />
            <Image
              src={"/images/c2-3.png"}
              alt="collection image"
              width={78}
              height={78}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <h5 className="text-xl">CodeCrafters</h5> {/* Updated name */}
            <button className="px-7 py-1 rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-80">
              35+ items
            </button>
          </div>
          <Image
            src={"/images/user2.png"}
            alt="collection image"
            width={60}
            height={60}
            className="absolute left-1/2 -translate-x-1/2 top-56"
          />
        </div>
        <div className="border border-white/50 flex flex-col gap-3 p-5 rounded-sm w-full max-w-[300px] relative" data-aos="fade-up" data-aos-once>
          <Image
            src={"/images/c3.png"}
            alt="collection image"
            width={300}
            height={300}
            className="w-full"
          />
          <div className="flex justify-between gap-3">
            <Image
              src={"/images/c3-1.png"}
              alt="collection image"
              width={78}
              height={78}
            />
            <Image
              src={"/images/c3-2.png"}
              alt="collection image"
              width={78}
              height={78}
            />
            <Image
              src={"/images/c3-3.png"}
              alt="collection image"
              width={78}
              height={78}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <h5 className="text-xl">BugBounty</h5> {/* Updated name */}
            <button className="px-7 py-1 rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-80">
              35+ items
            </button>
          </div>
          <Image
            src={"/images/user3.png"}
            alt="collection image"
            width={60}
            height={60}
            className="absolute left-1/2 -translate-x-1/2 top-56"
          />
        </div>
        <div className="border border-white/50 flex flex-col gap-3 p-5 rounded-sm w-full max-w-[300px] relative" data-aos="fade-up" data-aos-once>
          <Image
            src={"/images/c4.png"}
            alt="collection image"
            width={300}
            height={300}
            className="w-full"
          />
          <div className="flex justify-between gap-3">
            <Image
              src={"/images/c4-1.png"}
              alt="collection image"
              width={78}
              height={78}
            />
            <Image
              src={"/images/c4-2.png"}
              alt="collection image"
              width={78}
              height={78}
            />
            <Image
              src={"/images/c4-3.png"}
              alt="collection image"
              width={78}
              height={78}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <h5 className="text-xl">DevDocs</h5> {/* Updated name */}
            <button className="px-7 py-1 rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-80">
              35+ items
            </button>
          </div>
          <Image
            src={"/images/user4.png"}
            alt="collection image"
            width={60}
            height={60}
            className="absolute left-1/2 -translate-x-1/2 top-56"
          />
        </div>
      </div>
    </section>
  );
}
