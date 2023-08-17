"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function RequestForm() {
  const [state, handleSubmit] = useForm("mrgwpndg");
  if (state.succeeded) {
    console.log("success");
    return (
      <p className="text-lg text-lightBlue">
        Thank you! We will process your request ASAP and send further
        instructions if approved.
      </p>
    );
  } else {
    console.log("fail");
    }
  return (
    <div className="flex flex-col items-center z-10 gap-3">
          <h2 className="text-xl font-raleway text-white text-center m-5">
            Request to join the Beta today and get exclusive access.
          </h2>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-3"
    >
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        className="w-full max-w-xs py-2 px-4 m-1 rounded-md"
        required
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        className="w-full max-w-xs py-2 px-4 m-1 rounded-md"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label className="text-white text-sm font-lato text-center">
        If you heard about MILO from a friend or associate, please enter their
        name below.
      </label>
      <input
        type="text"
        id="referral"
        name="referral"
        placeholder="Referral Name (Optional)"
        className="w-full max-w-xs py-2 px-4 m-1 rounded-md"
      />
      <textarea
        id="message"
        name="message"
        placeholder="Message (Optional)"
        className="w-full max-w-xs py-2 px-4 m-1 rounded-md"
        /> 
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-lightBlue hover:opacity-50 w-1/3 text-white font-lato py-2 px-4 rounded-md"
      >
        Request Access
      </button>
    </form>
    </div>
  
  );
}

export default RequestForm;
