import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react"; // Lucide Icons and Search icon

function Header() {
  const [menutoggle, setMenutoggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenutoggle(!menutoggle);
  };

  const closeMenu = () => {
    setMenutoggle(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/books?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-[#10190D] shadow-md flex justify-between items-center px-4 md:px-10 h-16">
      <div className="flex items-center">
        <Link to="/" onClick={closeMenu}>
          <span className="text-[20px] font-extrabold text-[#E9534B] hover:text-[#F6E9CA] transition-all">LIBRARY</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-end md:justify-center max-w-4xl mx-auto">
        <form onSubmit={handleSearch} className="hidden md:flex w-full max-w-xl px-4 relative">
          <input
            className="w-full h-10 px-4 pr-12 text-lg rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#E9534B] transition-all"
            type="text"
            placeholder="Search a Book"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#E9534B] transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </form>

        <ul className={`absolute md:static bg-[#10190D] md:bg-transparent flex-col md:flex-row flex list-none md:flex ${menutoggle ? 'top-16 right-0 opacity-100' : 'top-16 right-[-100%] opacity-0'} md:opacity-100 md:right-0 transition-all w-full md:w-auto p-4 md:p-0`}>
          <li className="md:hidden w-full mb-4">
            <form onSubmit={handleSearch} className="flex relative">
              <input
                className="w-full h-10 px-4 pr-12 text-lg rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#E9534B] transition-all"
                type="text"
                placeholder="Search a Book"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#E9534B] transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </form>
          </li>
          <li className="flex justify-center items-center px-6 mt-4 md:mt-0" onClick={closeMenu}>
            <Link to="/">
              <span className="text-[#E9534B] hover:text-[#F6E9CA] font-bold text-lg transition-all">Home</span>
            </Link>
          </li>
          <li className="flex justify-center items-center px-6 mt-4 md:mt-0" onClick={closeMenu}>
            <Link to="/books">
              <span className="text-[#E9534B] hover:text-[#F6E9CA] font-bold text-lg transition-all">Books</span>
            </Link>
          </li>
          <li className="flex justify-center items-center px-6 mt-4 md:mt-0" onClick={closeMenu}>
            <Link to="/signin">
              <span className="text-[#E9534B] hover:text-[#F6E9CA] font-bold text-lg transition-all">SignIn</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="block md:hidden" onClick={toggleMenu}>
        {menutoggle ? (
          <X size={40} className="text-[#E9534B] bg-[#F6E9CA] p-1 rounded-md cursor-pointer mx-2" />
        ) : (
          <Menu size={40} className="text-[#E9534B] bg-[#F6E9CA] p-1 rounded-md cursor-pointer mx-2" />
        )}
      </div>
    </header>
  );
}

export default Header;
