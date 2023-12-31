import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <div className="absolute z-0 bg-black opacity-10">
        <Image
          src="/MiloSymbolHighRes.png"
          alt="Milo Logo"
          height={1000}
          width={1000}
          layout="fixed"
          objectFit="cover"
          quality={100}
        />
      </div>
      <h1 className="text-6xl font-raleway text-white text-center">
        Team <span className="text-lightBlue">MILO</span>
      </h1>
      <div className="container mx-auto grid md:grid-cols-2 gap-6 my-12">
        <div className="flex flex-col justify-center gap-3 z-10">
          <h2 className="text-5xl font-raleway text-lightBlue text-center">
            Sean Cooper{" "}
            <span className="text-white text-2xl">
              Founder, Software Engineer
            </span>
          </h2>
          <p className="text-xl text-white font-lato">
            A Certified Strength and Conditioning Specialist (CSCS) with his B.S
            in Human Biology from the University of Southern California and over
            7 years in the health and fitness industry, Sean has an extensive
            background in sports science and exercise physiology. He has worked
            with athletes of all levels, from weekend warriors to NFL athletes.
            He is also proficient in Software Engineering and has a strong
            passion for finding cutting edge technological solutions to improve
            human performance. Sean is a former collegiate athlete, having
            played rugby at the USC.
          </p>
          {/* <p className="text-xl text-lightBlue font-lato">
            seancooper@milofit.app
          </p> */}
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-6 my-12">
        <div className="flex flex-col justify-center gap-3 z-10 md:col-start-2">
          <h2 className="text-5xl font-raleway text-lightBlue text-center">
            Drew Busbee{" "}
            <span className="text-white text-2xl">Business Operations</span>
          </h2>
          <p className="text-xl text-white font-lato">
            With an impressive track record encompassing almost a decade in
            technical program management and executive leadership, Drew
            spearheads business development and operational strategies at MILO.
            His extensive background includes supporting founders and dual-use
            startups to navigate early-stage funding opportunities and grow
            their federal and defense lines of effort, successfully supporting
            them from ideation to exit. Drew is currently a United States Space
            Force veteran and high performance athlete.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-6 my-12">
        <div className="flex flex-col justify-center z-10 gap-3 md:col-start-1">
          <h2 className="text-5xl font-raleway text-lightBlue text-center">
            Eric Pawlakos{" "}
            <span className="text-white text-2xl">Data Scientist</span>
          </h2>
          <p className="text-xl text-white font-lato">
            Eric is an accomplished Engineering Data Scientist with a Master of
            Science in Analytics from North Western University. An expert in
            data visualization and analytics, Eric has contributed to
            companies such as Activision, the makers of the popular video game franchise Call
            of Duty. Eric is also a former collegiate athlete, having played
            rugby at UC Davis.
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;
