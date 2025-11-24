import React, { useState, useEffect } from 'react';
import { FileSpreadsheet, Database, ArrowRightLeft, UserPlus, Search } from 'lucide-react';
import { closerxApi, Contact } from '../../services/closerxApi';

const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setLoading(true);
    const response = await closerxApi.getContacts();
    if (response.success && response.data) {
      setContacts(response.data);
    }
    setLoading(false);
  };

  // Filter contacts based on search
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.company?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1400px] mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-brand-teal mb-2">Contact Management</h1>
        <p className="text-gray-600 text-lg">Manage and import your contacts</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button className="px-6 py-3 rounded-xl bg-brand-teal hover:bg-opacity-90 text-white font-semibold transition-colors flex items-center gap-2">
          <FileSpreadsheet className="w-5 h-5" />
          <span>Import CSV</span>
        </button>
        <button className="px-6 py-3 rounded-xl bg-brand-teal hover:bg-opacity-90 text-white font-semibold transition-colors flex items-center gap-2">
          <Database className="w-5 h-5" />
          <span>Import from CRM</span>
        </button>
        <button className="px-6 py-3 rounded-xl bg-brand-teal hover:bg-opacity-90 text-white font-semibold transition-colors flex items-center gap-2">
          <ArrowRightLeft className="w-5 h-5" />
          <span>Transfer Contacts</span>
        </button>
        <button className="px-6 py-3 rounded-xl bg-brand-teal hover:bg-opacity-90 text-white font-semibold transition-colors flex items-center gap-2">
          <UserPlus className="w-5 h-5" />
          <span>Add Contact</span>
        </button>
      </div>

      {/* Contacts Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Contacts</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                No tags available
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent w-64"
                />
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-teal"></div>
          </div>
        ) : (
          <>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-4 text-left">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Company
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContacts.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-32">
                        <div className="flex flex-col items-center justify-center text-center">
                          <div className="w-20 h-20 rounded-full border-4 border-gray-300 flex items-center justify-center mb-6">
                            <Search className="w-10 h-10 text-gray-400" />
                          </div>
                          <p className="text-gray-600 text-lg">
                            No contacts found. Try adjusting your search or add a new contact.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                  {filteredContacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">{contact.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <p className="text-gray-700">{contact.phone}</p>
                          {contact.email && (
                            <p className="text-sm text-gray-500">{contact.email}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700">{contact.company || '-'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-brand-teal hover:text-opacity-80 font-medium">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 p-6 border-t border-gray-200">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="px-4 py-2 rounded-lg bg-brand-teal text-white font-medium hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <span className="text-sm">Previous</span>
              </button>
              <button className="px-4 py-2 rounded-lg bg-brand-teal text-white font-medium">
                1
              </button>
              <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="px-4 py-2 rounded-lg bg-brand-teal text-white font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2"
              >
                <span className="text-sm">Next</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
