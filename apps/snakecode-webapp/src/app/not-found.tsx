import Link from "next/link";

import Banner from "@/components/common/banner";
import Navbar from "@/components/common/navbar";
import routes from "@/constants/routes";

export default function Custom404() {
  return (
    <div className="flex h-screen flex-col bg-bg">
      <Navbar />

      <main className="flex h-full w-full flex-col items-center justify-center font-sans text-pt">
        <span className="-mt-24 text-center font-sans text-2xl font-extrabold tracking-wide text-pc sm:text-2xl">404</span>
        <span className="mt-4 font-display text-5xl">Oh, hello!</span>
        <span className="mt-4 font-sans text-xl font-bold text-st">
          Looks like you might have gotten <span className="text-pc">a bit lost</span>
        </span>
        <Link className="mt-10 text-lg font-black text-red" href={routes.root}>
          START HERE
        </Link>
      </main>
    </div>
  );
}
