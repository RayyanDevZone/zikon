import React from 'react';

const Contact = () => {
  return (
    <div className="w-full bg-[#003049] px-4 py-16 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FDF0D5]">
            Get in Touch
          </h2>
          <p className="text-[#FDF0D5] mt-2">
            We'd love to hear from you! Reach out for inquiries, projects, or support.
          </p>
        </div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-[#FDF0D5] rounded-xl shadow-lg p-6 md:p-10 flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-[#C1121F] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-[#C1121F] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-[#C1121F] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#C1121F] hover:bg-[#780000] text-white font-semibold px-6 py-2 rounded transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Company Info */}
          <div className="bg-[#C1121F] text-[#FDF0D5] rounded-xl shadow-lg p-6 md:p-10 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Office Address</h3>
              <p>BP 76N/78K PRAYAGRAJ.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p>contact@zikon.in</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p>+91 6386535005</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Working Hours</h3>
              <p>Mon - Sat: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
