export default function Navbar({ currentPage, setCurrentPage }) {
  const menu = ["About", "Experience", "Projects", "Blogs", "Contact"];

  return (
    <nav
      className="
    w-full flex items-center justify-between
    fixed bottom-0 left-0 z-50   /* mobile */
    md:relative md:bottom-auto md:left-auto md:z-auto  /* desktop fix */
    lg:hidden
    bg-neutral-800/60
    backdrop-blur-md
    border-t border-white/10
    shadow-[0_-8px_30px_rgba(0,0,0,0.3)]
    md:rounded-tl-4xl md:rounded-tr-4xl
    rounded-tl-4xl rounded-tr-4xl
    lg:visible
    "
    >
      {/* LEFT HEADING (hide on mobile) */}
      <div className="hidden md:flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-wide px-10 pt-6 text-neutral-100">
          {currentPage}
        </h1>
        <span className="w-10 h-1 rounded-full bg-yellow-400 mx-10"></span>
      </div>

      {/* RIGHT MENU */}
      <div className="w-full md:w-auto flex items-center justify-around md:ml-auto p-3 md:p-5 bg-neutral-700 rounded-tl-4xl rounded-tr-4xl border-t md:border-l md:border-b border-neutral-500 md:rounded-bl-4xl md:rounded-tr-4xl shadow-lg px-6 md:px-10">
        {/* MOBILE MENU */}
        <ul className="flex md:hidden justify-between w-full">
          {menu.map((item) => (
            <li key={item}>
              <button
                onClick={() => setCurrentPage(item)}
                className={`text-sm transition font-semibold ${
                  currentPage === item
                    ? "text-yellow-300"
                    : "text-neutral-300 opacity-70"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 md:gap-2">
          {menu.map((item) => (
            <li key={item}>
              <button
                onClick={() => setCurrentPage(item)}
                className={`py-2 px-3 text-base transition font-semibold ${
                  currentPage === item
                    ? "opacity-100 text-yellow-300"
                    : "opacity-70 hover:opacity-100 text-neutral-300"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
