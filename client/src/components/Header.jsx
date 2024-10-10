import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track hamburger menu state
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Track search bubble state for small screens

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <nav className="border-b-2 flex items-center justify-between p-4 bg-white dark:bg-gray-800 relative">
      <Link
        to="/"
        className="text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Rohan's
        </span>
        Blog
      </Link>
      
      {/* Search Bar for Larger Screens */}
      <form onSubmit={handleSubmit} className={`hidden lg:flex items-center`}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pl-10 border rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
        </div>
      </form>

      {/* Navbar Links for Larger Screens */}
      <div className="hidden lg:flex gap-4">
        <Link to="/" className={`px-3 py-2 ${path === '/' ? 'font-bold text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}>
          Home
        </Link>
        <Link to="/about" className={`px-3 py-2 ${path === '/about' ? 'font-bold text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}>
          About
        </Link>
        <Link to="/projects" className={`px-3 py-2 ${path === '/projects' ? 'font-bold text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}>
          Projects
        </Link>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-2">
        {/* Search Bar Icon for Small Screens */}
        <button
          className="w-10 h-10 lg:hidden flex items-center justify-center"
          onClick={() => setIsSearchOpen(!isSearchOpen)} // Toggle search bubble
        >
          <AiOutlineSearch className="text-2xl dark:text-white" />
        </button>

        {/* Search Bubble for Small Screens */}
        {isSearchOpen && (
          <div className="absolute top-16 right-4 bg-white dark:bg-gray-700 shadow-lg rounded-lg p-2 z-50 lg:hidden">
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 pl-10 border rounded-lg focus:outline-none w-full dark:bg-gray-600 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="ml-2 p-2">
                <AiOutlineSearch className="text-gray-400 dark:text-white" />
              </button>
            </form>
          </div>
        )}

        <button
          className="w-12 h-10 hidden sm:flex items-center justify-center"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-300" />}
        </button>
        {currentUser ? (
          <div className="relative">
            <img
              alt="user"
              src={currentUser.profilePicture}
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <div className="p-4">
                <p className="text-sm dark:text-gray-300">@{currentUser.username}</p>
                <p className="text-sm font-medium truncate dark:text-gray-300">
                  {currentUser.email}
                </p>
              </div>
              <div className="border-t">
                <Link to="/dashboard?tab=profile" className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </Link>
                <button onClick={handleSignout} className="block p-4 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                  Sign out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/sign-in">
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
              Sign In
            </button>
          </Link>
        )}
      </div>

      {/* Hamburger Menu Icon */}
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
      >
        <HiMenu className="text-2xl dark:text-white" />
      </button>

      {/* Hamburger Menu Dropdown for Small Screens */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white dark:bg-gray-700 shadow-lg rounded-lg lg:hidden flex flex-col gap-2 py-2 px-4 animate-slide-in">
          <Link to="/" className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/projects" className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}
