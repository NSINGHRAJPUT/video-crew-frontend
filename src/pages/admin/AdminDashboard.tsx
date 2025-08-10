import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/admin/portfolio" className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition">
            <h2 className="text-xl font-semibold mb-2">Portfolio Management</h2>
            <p className="text-gray-400">Manage portfolio items</p>
          </Link>
          <Link to="/admin/contact" className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition">
            <h2 className="text-xl font-semibold mb-2">Contact Management</h2>
            <p className="text-gray-400">View and manage contact inquiries</p>
          </Link>
        </div>
      </div>
    </div>
  );
}