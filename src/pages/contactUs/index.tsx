import LayoutContainer from "../../components/LayoutContainer";

const ContactUs: React.FC = () => {
  return (
    <>
      <LayoutContainer>
        <div className="font-mono text-gray-900 py-24 text-center">
          <div className="text-center text-4xl font-bold pb-8">
            <span className="underline-title">Contact Us</span>
          </div>

          <form className="max-w-2xl mx-auto p-6">
            <div className="space-y-6 text-left">
              <div className="block text-sm font-medium text-gray-700">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="TEXT"
                  id="phone"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone "
                />
              </div>
              <div>
                <label
                  htmlFor="infoType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type<span className="text-red-600">*</span>
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
                  Message<span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  cols={30}
                  rows={6}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-200 hover:text-gray-900 hover:font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </LayoutContainer>
    </>
  );
};

export default ContactUs;
