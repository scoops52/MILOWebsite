import Image from "next/image";

export default function Home() {
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
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between my-12">
        <div className="flex flex-col justify-center z-10">
          <h1 className="text-6xl font-raleway text-white text-center">
            Train <span className="text-lightBlue">Smart</span>, Train{" "}
            <span className="text-lightBlue">Free</span>
          </h1>
          <h2 className="text-2xl font-raleway text-white text-center">
            Your Personalized Fitness Tracker, No Wearable Required
          </h2>
        </div>

        <div className="flex justify-center items-center z-10 mt-10 mb-12 md:mb-0 md:mr-10 mx-10">
          <Image
            src="/MILO_Dash_WebPic.png"
            alt="Mobile App Screenshot"
            height={0}
            width={400}
            layout="intrinsic"
            quality={100}
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-col items-center gap-20 my-12 md:my-24">
        <div className="flex flex-col justify-center z-10">
          <h1 className="text-4xl font-raleway text-white text-center mb-4">
            Introducing <span className="text-lightBlue font-thin">MILO</span>
          </h1>
          <p className="text-lg font-lato text-white text-center">
            Our mobile app empowers you to track your fitness journey all from you mobile device.
            With a user-friendly interface and personalized insights, you can
            achieve your fitness goals more effectively, without the need for extra hardware. 
          </p>
        </div>
        <div className="flex flex-col items-center z-10 gap-3">
          <h2 className="text-xl font-raleway text-white text-center m-5">
            Request to join the Beta today and get exclusive access.
          </h2>
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full max-w-xs py-2 px-4 m-1 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full max-w-xs py-2 px-4 m-1 rounded-md"
            required
          />
          <label className="text-white text-sm font-lato text-center">
            If you heard about MILO from a friend or associate, please enter their name below.
          </label>
          <input
            type="text"
            placeholder="Referral Name (Optional)"
            className="w-full max-w-xs py-2 px-4 m-1 rounded-md"
          />
          <button type="submit" className="bg-lightBlue hover:opacity-50 w-1/3 text-white font-lato py-2 px-4 rounded-md">
            Request Access
          </button>
          
        </div>
      </div>
    </main>
  );
}
