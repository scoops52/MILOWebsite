"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function RequestForm() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    console.log("success");
    return (
      <p className="text-lg text-lightBlue">
        Thank you! We will process your request ASAP and send further
        instructions if approved.
      </p>
    );
  }
  return (
    
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <input
        type="text"
        id="name"
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
        placeholder="Referral Name (Optional)"
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
  
  );
}

export default RequestForm;
