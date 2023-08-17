import emailjs from 'emailjs-com';
import React from 'react'

function ReqestFormEmailJs() {
    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
       
            emailjs.sendForm('service_ia2f1st', 'template_73h01vg', form.current, 'HM4xy5fugu2lLLMLl')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
       
    };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="flex flex-col items-center justify-center"
    >
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        className="w-full max-w-xs py-2 px-4 m-1 rounded-md"
        required
      />
      
      <input
        type="email"
        id="email"
        placeholder="Your Email"
        className="w-full max-w-xs py-2 px-4 m-1 rounded-md"
        required
      />
     
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
        
        className="bg-lightBlue hover:opacity-50 w-1/3 text-white font-lato py-2 px-4 rounded-md"
      >
        Request Access
      </button>
    </form>
  )
}

export default ReqestFormEmailJs