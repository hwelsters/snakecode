import Link from "next/link";

import Navbar from "@/components/common/navbar";
import routes from "@/constants/routes";
import Banner from "@/components/common/banner";

export default function Custom404() {
  return (
    <div className="flex h-screen flex-col bg-bg">
      <Navbar />

      <main className="flex h-full w-full flex-col items-center justify-center font-sans text-pt">
        <span className="-mt-24 text-pc text-center font-sans font-extrabold text-2xl tracking-wide sm:text-2xl">
          404
        </span>
        <span className="mt-4 font-display text-5xl">Oh, hello!</span>
        <span className="mt-4 text-st font-sans font-bold text-xl">Looks like you might have gotten <span className="text-pc">a bit lost</span></span>
        <Link className="mt-10 font-black text-red text-lg" href={routes.root}>START HERE</Link>
      </main>
    </div>
  );
}
