// sections/Testimonials.tsx

"use client";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full py-20 bg-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/assets/images/user1.jpg"
                alt="User"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Alex M.</h4>
                <p className="text-sm text-gray-500">Project Manager</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              “Professional, reliable, and extremely talented. Delivered far
              beyond expectations and always kept communication clear.”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/assets/images/user2.jpg"
                alt="User"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Samantha L.</h4>
                <p className="text-sm text-gray-500">Startup Founder</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              “A true problem solver. The system built for our company runs
              smoothly and has improved our operations dramatically.”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/assets/images/user3.jpg"
                alt="User"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Michael T.</h4>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              “Great collaborator and always dedicated to quality work. Would
              definitely work together again on future projects.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
