import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white">Admin Panel</h2>
      </div>
      
      <nav className="flex-1 px-4">
        <Link
          to="/admin"
          className={`block py-3 px-4 rounded mb-2 transition ${
            isActive('/admin') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/admin/portfolio"
          className={`block py-3 px-4 rounded mb-2 transition ${
            isActive('/admin/portfolio') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
          }`}
        >
          Portfolio
        </Link>
        <Link
          to="/admin/contact"
          className={`block py-3 px-4 rounded mb-2 transition ${
            isActive('/admin/contact') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
          }`}
        >
          Contact
        </Link>
      </nav>

      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}