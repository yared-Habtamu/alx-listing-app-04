import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              LuxStay
            </Link>
          </div>

          {/* Search Bar */}
          <div className="mt-4 md:mt-0 md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, properties..."
                className="w-full rounded-full border border-gray-300 py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="mt-4 flex items-center space-x-4 md:mt-0">
            <button className="rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100">
              Sign In
            </button>
            <button className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
              Sign Up
            </button>
          </div>
        </div>

        {/* Property Types */}
        <div className="mt-6 flex space-x-4 overflow-x-auto pb-2">
          {["Rooms", "Mansions", "Countryside", "Beach", "City", "Mountain"].map(
            (type) => (
              <button
                key={type}
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {type}
              </button>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;