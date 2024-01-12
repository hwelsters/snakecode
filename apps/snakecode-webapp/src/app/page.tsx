import Link from "next/link";

import Banner from "@/components/common/banner";
import Navbar from "@/components/common/navbar";
import routes from "@/constants/routes";

export default function Home() {
  return (
    <div className="flex h-fit min-h-screen flex-col bg-bg">
      <Banner />
      <Navbar />

      <main className="flex h-full w-full flex-col content-center items-center justify-center font-sans text-pt">
        <span className="mt-28 flex h-96 w-full scale-90 flex-col content-center items-center justify-center sm:scale-100">
          <span className="mt-4 text-center font-display text-6xl tracking-wide sm:text-6xl">
            Learn Computer science <text className="text-pc">in style</text>
          </span>
          <span className="mt-8 max-w-4xl text-center font-sans text-2xl font-medium text-st">
            Short and sweet lessons in <text className="font-bold text-pc">computer science</text>. Master concepts one <text className="font-bold text-red">bite-sized</text> lesson at a time.
          </span>
          <Link className="mt-12 bg-green px-3 py-2 font-sans text-sm font-extrabold duration-100 hover:scale-[102.5%] hover:bg-pt hover:text-bg active:scale-100" href={routes.login}>
            GET STARTED
          </Link>
        </span>
      </main>
    </div>
  );
}
