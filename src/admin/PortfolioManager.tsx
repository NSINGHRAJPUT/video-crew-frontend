import { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
  status: 'active' | 'draft';
}

export default function PortfolioManager() {
  const [items, setItems] = useState<PortfolioItem[]>([
    { id: 1, title: "Tech Startup Commercial", thumbnail: "/thumb1.jpg", videoUrl: "/video1.mp4", status: 'active' },
    { id: 2, title: "Corporate Training", thumbnail: "/thumb2.jpg", videoUrl: "/video2.mp4", status: 'active' }
  ]);

  const toggleStatus = (id: number) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, status: item.status === 'active' ? 'draft' : 'active' }
        : item
    ));
  };

  return (
    <div className="portfolio-manager">
      <h1>Portfolio Manager</h1>
      <button className="add-button">Add New Item</button>
      <div className="items-list">
        {items.map(item => (
          <div key={item.id} className="item-row">
            <img src={item.thumbnail} alt={item.title} width="100" />
            <div className="item-info">
              <h3>{item.title}</h3>
              <span className={`status ${item.status}`}>{item.status}</span>
            </div>
            <div className="item-actions">
              <button onClick={() => toggleStatus(item.id)}>
                {item.status === 'active' ? 'Deactivate' : 'Activate'}
              </button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}