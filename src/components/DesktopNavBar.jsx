export default function DesktopNavbar({ currentPage, setCurrentPage }) {
  const menu = ["About", "Experience", "Projects", "Blogs", "Contact"];

  return (
    <div className="w-full max-w-6xl mx-auto hidden lg:flex items-center justify-between">
      
      {/* Left Section - Heading (NO background) */}
      <div className="px-8 pt-7">
        <h1 className="text-3xl font-bold tracking-wide text-neutral-100">
          {currentPage}
        </h1>
        <span className="block w-12 h-1 rounded-full bg-yellow-400 mt-2"></span>
      </div>

      {/* Right Section - Navbar with background */}
      <div className="flex gap-8 border-l border-b border-neutral-500 flex-wrap justify-end bg-neutral-700 px-10 py-6 rounded-bl-4xl rounded-tr-4xl">
        {menu.map((item) => (
          <button
            key={item}
            onClick={() => setCurrentPage(item)}
            className={`text-lg font-semibold whitespace-nowrap transition duration-300 ${
              currentPage === item
                ? "text-yellow-300"
                : "text-neutral-300 hover:text-yellow-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  );
}
