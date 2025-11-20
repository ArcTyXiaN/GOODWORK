import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Menu, X, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-neutral-900 shadow-lg sticky top-0 z-50 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-neutral-800 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Briefcase className="h-6 w-6 text-amber-500" />
            </div>
            <span className="text-neutral-100 font-bold text-2xl tracking-tight">
              GOODWORK
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-neutral-100 hover:text-neutral-400 transition-colors font-medium"
            >
              Find Jobs
            </Link>

            {user ? (
              <>
                {user.role === 'employer' && (
                  <Link
                    to="/post-job"
                    className="bg-amber-500 text-neutral-900 px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                  >
                    Post Job
                  </Link>
                )}

                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-neutral-800 px-3 py-2 rounded-lg">
                    <User className="h-4 w-4 text-neutral-100" />
                    <span className="text-neutral-100 text-sm font-medium">
                      {user.fullname}
                    </span>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 bg-red-600 text-neutral-100 px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-neutral-100 hover:text-neutral-400 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-amber-500 text-neutral-900 px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-100 hover:text-neutral-400"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-800 border-t border-neutral-700">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block text-neutral-100 hover:bg-neutral-700 px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Find Jobs
            </Link>

            {user ? (
              <>
                {user.role === 'employer' && (
                  <Link
                    to="/post-job"
                    className="block text-neutral-100 hover:bg-neutral-700 px-3 py-2 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Post Job
                  </Link>
                )}

                <div className="border-t border-neutral-700 pt-2 mt-2">
                  <p className="text-neutral-100 text-sm px-3 py-1">
                    {user.fullname}
                  </p>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full text-left text-neutral-100 hover:bg-red-600 px-3 py-2 rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-neutral-100 hover:bg-neutral-700 px-3 py-2 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block text-neutral-100 hover:bg-neutral-700 px-3 py-2 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
