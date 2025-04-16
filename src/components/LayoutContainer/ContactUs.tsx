const ContactUs: React.FC = () => {
  return (
    <>
      <div className="font-mono bg-pink-50 text-gray-900 px-8 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          Contact Us
        </h2>

        <form className="max-w-2xl mx-auto p-6">
          <div className="space-y-6 text-left">
            <div className="flex">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                htmlFor="infoType"
                className="block text-sm font-medium text-gray-700"
              >
                Type
              </label>
              <select
                id="emailType"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="General">General</option>
                <option value="Wholesale">Wholesale</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                cols={30}
                rows={6}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
