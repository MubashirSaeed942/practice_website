import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-50 shadow-lg fixed top-0 left-0 right-0  z-50" >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              BLOGsite
            </Link>
          </div>

          {/* Links Section */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-gray-900">
              Blogs
            </Link>

          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
