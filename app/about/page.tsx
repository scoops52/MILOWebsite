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
      <h1 className="text-6xl font-raleway text-white text-center">
        About <span className="text-lightBlue">MILO</span>
      </h1>
      <div className="container mx-auto grid md:grid-cols-2 gap-6 my-12">
        <div className="flex flex-col justify-center z-10">
          <h2 className="text-2xl font-raleway text-lightBlue text-center">
            How MILO Works
          </h2>
          <p className="text-xl text-white font-lato">
            Every time you complete a workout, all you need to do is input how you felt during the workout, which we call <span className="text-lightBlue">Effort Level</span>, and note the start and end times of your workout. MILO&apos;s intelligent algorithm takes care of the rest, providing you with personalized insights and recommendations to help you achieve your fitness goals.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-6 my-12">
        <div className="flex flex-col justify-center z-10 md:col-start-2">
          <h2 className="text-2xl font-raleway text-lightBlue text-center">
            What insights does MILO provide?
          </h2>
          <p className="text-xl text-white font-lato">
            MILO&apos;s magic lies in the information it provides based on your workout data. You will discover your <span className="text-lightBlue">Fit Load</span>, a measure of your current training load, and your <span className="text-lightBlue">Fit Capacity</span>, a reflection of your long-term training adaptation. From these, your <span className="text-lightBlue">Performance Index</span> is calculated, helping identify the optimal balance for your fitness journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-6 my-12">
        <div className="flex flex-col justify-center z-10 md:col-start-1">
          <h2 className="text-2xl font-raleway text-lightBlue text-center">
            How do these insights help me on my fitness journey?
          </h2>
          <p className="text-xl text-white font-lato">
            MILO goes beyond mere numbers. Based off of your data, MILO places you in specific  <span className="text-lightBlue">Zones</span>: <span className="text-green">Undertraining</span>, <span className="text-cyan">Maintaining</span>, <span className="text-lightBlue">Optimal</span>, <span className="text-orange">Overreaching</span>, and <span className="text-red">Overtraining</span>. Each of these coming with recommendations on how to adjust your training to reach your goals. Whether you are aiming to optimize your performance, maintain your gains, or avoid overtraining— MILO&apos;s user-friendly system helps you navigate your fitness path with confidence.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-6 my-12">
        <div className="flex flex-col justify-center z-10 md:col-start-2">
          <h2 className="text-2xl font-raleway text-lightBlue text-center">
            MILO can tell all that just from my Effort Level and Workout Duration?
          </h2>
          <p className="text-xl text-white font-lato">
          Absolutely! MILO&apos;s ability to derive meaningful insights from your Effort Level and workout duration is firmly grounded in sports science. Research has demonstrated the scientific validity of Rating of Perceived Exertion (RPE) as a robust and intuitive measure of exercise intensity. By incorporating your Effort Level, MILO taps into your body's internal cues, providing a holistic view of how each workout is impacting your body. When combined with workout duration, MILO creates a comprehensive training load calculation that aligns with established principles of exercise physiology. This amalgamation of RPE and duration forms the bedrock of MILO&apos;s accurate and personalized fitness assessments, paving the way for a smarter, more effective fitness journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-6 my-12">
        <div className="flex flex-col justify-center z-10 md:col-start-1">
          <h2 className="text-2xl font-raleway text-lightBlue text-center">
            How is this different from using a Fitness Wearable?
          </h2>
          <p className="text-xl text-white font-lato">
          While fitness wearables offer valuable data, MILO stands apart with its unique focus on your individual perception of effort.  External metrics such as heart rate, hrv, and step count can be very insightful. However, MILO aims to approach fitness from a global perspective, tapping in to your own internal feedback system. This personalized approach captures the nuances of your workout intensity, accounting for factors such as fatigue, motivation, and additional stressors. 
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;
