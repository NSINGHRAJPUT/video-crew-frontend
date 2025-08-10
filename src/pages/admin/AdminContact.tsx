import { useState, useEffect } from 'react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  company: string;
  website: string;
  projectType: string;
  projectDetails: string;
  budget: string;
  timeline: string;
  referralSource: string;
  description: string;
  socialMedia: string;
  status: 'new' | 'processing' | 'completed';
  admin_notes: string;
  created_at: string;
  updated_at: string;
}

export default function AdminContact() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://video-crew-backend-production.up.railway.app/api/contact/', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };



  const updateContactStatus = async (contactId: string, newStatus: Contact['status']) => {
    try {
      await fetch(`https://video-crew-backend-production.up.railway.app/api/contact/${contactId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      
      fetchContacts();
    } catch (error) {
      console.error('Error updating contact status:', error);
    }
  };

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Management</h1>
        
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Company</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Project Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {contacts.map((contact) => (
                  <tr key={contact._id} className="hover:bg-gray-800">
                    <td className="px-4 py-3 text-sm">{contact.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-400">{contact.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-400">{contact.company}</td>
                    <td className="px-4 py-3 text-sm text-gray-400">{contact.projectType}</td>
                    <td className="px-4 py-3">
                      <select
                        value={contact.status}
                        onChange={(e) => updateContactStatus(contact._id, e.target.value as Contact['status'])}
                        className={`px-2 py-1 rounded text-xs border-none outline-none ${
                          contact.status === 'new' ? 'bg-blue-600' :
                          contact.status === 'processing' ? 'bg-yellow-600' :
                          'bg-green-600'
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="processing">Processing</option>
                        <option value="completed">Completed</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {new Date(contact.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleContactClick(contact)}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedContact && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-6 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Contact Details</h2>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm">Name:</span>
                    <p className="font-medium">{selectedContact.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Email:</span>
                    <p className="font-medium">{selectedContact.email}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Company:</span>
                    <p className="font-medium">{selectedContact.company}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Website:</span>
                    <p className="font-medium">{selectedContact.website}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Project Type:</span>
                    <p className="font-medium">{selectedContact.projectType}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Budget:</span>
                    <p className="font-medium">{selectedContact.budget}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm">Timeline:</span>
                    <p className="font-medium">{selectedContact.timeline}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Referral Source:</span>
                    <p className="font-medium">{selectedContact.referralSource}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Social Media:</span>
                    <p className="font-medium">{selectedContact.socialMedia}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Status:</span>
                    <p className={`font-medium ${
                      selectedContact.status === 'new' ? 'text-blue-400' :
                      selectedContact.status === 'processing' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>{selectedContact.status}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Created:</span>
                    <p className="font-medium">{new Date(selectedContact.created_at).toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Updated:</span>
                    <p className="font-medium">{new Date(selectedContact.updated_at).toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Project Details:</span>
                  <p className="font-medium mt-1">{selectedContact.projectDetails}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Description:</span>
                  <p className="font-medium mt-1">{selectedContact.description}</p>
                </div>
                {selectedContact.admin_notes && (
                  <div>
                    <span className="text-gray-400 text-sm">Admin Notes:</span>
                    <p className="font-medium mt-1">{selectedContact.admin_notes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}