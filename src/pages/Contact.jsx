import React from "react";

function Contact() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              id="contact-form-name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              id="contact-form-email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              id="comment"
              placeholder="Enter your comment"
              name="comment"
              rows="5"
              cols="40"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
