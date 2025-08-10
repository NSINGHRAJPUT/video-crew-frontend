import { useState } from 'react';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
}

export default function ContactManager() {
  const [messages] = useState<ContactMessage[]>([
    { id: 1, name: "John Doe", email: "john@example.com", message: "Interested in corporate video services", date: "2024-01-15", status: 'new' },
    { id: 2, name: "Jane Smith", email: "jane@company.com", message: "Need quote for commercial production", date: "2024-01-14", status: 'read' }
  ]);

  return (
    <div className="contact-manager">
      <h1>Contact Messages</h1>
      <div className="messages-list">
        {messages.map(message => (
          <div key={message.id} className={`message-card ${message.status}`}>
            <div className="message-header">
              <h3>{message.name}</h3>
              <span className="date">{message.date}</span>
              <span className={`status ${message.status}`}>{message.status}</span>
            </div>
            <p className="email">{message.email}</p>
            <p className="message-text">{message.message}</p>
            <div className="message-actions">
              <button>Reply</button>
              <button>Mark as Read</button>
              <button>Archive</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}