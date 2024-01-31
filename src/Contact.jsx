import React from "react";

const Contact = () => {
  return (
    <div className="mt-[4rem]">
      <h2 className="text-[2.5rem] font-semibold text-center">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26533.36846928159!2d72.80013973476565!3d33.76916509999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa5caff2ea959%3A0xeb84c469ecdd0c9a!2sUniversity%20of%20Engineering%20and%20Technology%2C%20Taxila%2C%20Pakistan!5e0!3m2!1sen!2s!4v1706700357355!5m2!1sen!2s"
        width="100%"
        height="380"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="mt-[2.6rem]"
      ></iframe>
      {/* Form    ================> */}
      <section className="my-[5rem]">
        <div className="max-w-[35rem] m-auto">
          <form action="" method="POST" className="flex  flex-col gap-6">
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              required
              autoComplete="off"
              className="border-[2px] border-slate-400 px-5 py-2 rounded-md"
            />

            <input
              type="email"
              name="Email"
              placeholder="Enter email"
              required
              autoComplete="off"
              className="border-[2px] border-slate-400 px-5 py-2 rounded-md"
            />
            <textarea
              name="Message"
              cols="30"
              rows="6"
              placeholder="Enter your message"
              required
              autoComplete="off"
              className="border-[2px] border-slate-400 px-5 py-2 rounded-md"
            ></textarea>
            <div className="grid place-content-start">
              <input
                type="submit"
                value="Send"
                className="bg-amber-400 grid justify-items-start py-1 px-5 text-[1.3rem] rounded-sm cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
