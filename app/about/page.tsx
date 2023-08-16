import React from "react";
import Image from "next/image";

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
      <div className="container mx-auto grid md:grid-cols-2 gap-6 my-12">
  <div className="flex flex-col justify-center z-10">
    <h2 className="text-2xl font-raleway text-lightBlue text-center">
      How MILO Works
    </h2>
    <p className="text-xl text-white font-lato">
      MILO uses your phone's camera to track your movements and provide you with personalized insights. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia odio nesciunt recusandae autem sint ipsum, laudantium, cupiditate velit tempore ex modi nihil ut voluptatibus, esse fuga mollitia quas numquam.
    </p>
  </div>
</div>

<div className="container mx-auto grid md:grid-cols-2 gap-6 my-12">
  <div className="flex flex-col justify-center z-10 md:col-start-2">
    <h2 className="text-2xl font-raleway text-lightBlue text-center">
      Wearables
    </h2>
    <p className="text-xl text-white font-lato">
      MILO uses your phone's camera to track your movements and provide you with personalized insights. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia odio nesciunt recusandae autem sint ipsum, laudantium, cupiditate velit tempore ex modi nihil ut voluptatibus, esse fuga mollitia quas numquam.
    </p>
  </div>
</div>

    </main>
  );
}

export default page;
