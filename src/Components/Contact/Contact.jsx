import React, { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsSubmitted(true); // Set the submitted state to true
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <p className="text-center mb-12">
        Feel free to get in touch! I’d love to hear from you.
      </p>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        {isSubmitted ? (
          <div className="text-center">
            <div className="mb-6 text-center bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 py-3 px-4 rounded-lg">
              Your form has been submitted successfully!
            </div>
            <p className="text-lg">
              Thank you for reaching out. I will get back to you soon.
            </p>
          </div>
        ) : (
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border dark:text-black border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block  text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border  dark:text-black border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300  dark:text-black dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Message"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
