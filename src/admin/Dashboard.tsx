export default function Dashboard() {
  const stats = [
    { label: "Total Projects", value: "24" },
    { label: "Active Clients", value: "8" },
    { label: "Pending Inquiries", value: "5" },
    { label: "This Month Revenue", value: "$12,500" }
  ];

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <button>Add New Project</button>
        <button>View Messages</button>
        <button>Update Portfolio</button>
      </div>
    </div>
  );
}