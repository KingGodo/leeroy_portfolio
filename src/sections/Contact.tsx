// sections/Contact.tsx

"use client";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 bg-gray-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Have a project in mind, want to collaborate, or just want to say hello?
              Feel free to reach out anytime. I usually respond within 24 hours.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-600">yourname@example.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-600">+123 456 7890</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-600">Harare, Zimbabwe</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-2xl shadow-lg space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
