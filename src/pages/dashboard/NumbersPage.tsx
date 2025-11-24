import React, { useState, useEffect } from 'react';
import { Plus, Phone, MapPin, DollarSign, Edit, Trash2 } from 'lucide-react';
import { closerxApi, PhoneNumber } from '../../services/closerxApi';

const NumbersPage = () => {
  const [numbers, setNumbers] = useState<PhoneNumber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNumbers();
  }, []);

  const loadNumbers = async () => {
    setLoading(true);
    const response = await closerxApi.getPhoneNumbers();
    if (response.success && response.data) {
      setNumbers(response.data);
    }
    setLoading(false);
  };

  const mockNumbers: PhoneNumber[] = [
    {
      id: '1',
      number: '+15551234567',
      formatted_number: '+1 (555) 123-4567',
      type: 'local',
      location: 'New York, NY',
      assigned_agent: 'Property Inquiry Bot',
      monthly_cost: 1,
      status: 'active',
      created_at: '2024-01-15T10:00:00Z',
    },
    {
      id: '2',
      number: '+18002345678',
      formatted_number: '+1 (800) 234-5678',
      type: 'toll-free',
      location: 'US Toll-Free',
      monthly_cost: 2,
      status: 'active',
      created_at: '2024-01-16T10:00:00Z',
    },
  ];

  const displayNumbers = numbers.length > 0 ? numbers : mockNumbers;

  const getTypeColor = (type: string) => {
    return type === 'local'
      ? 'bg-blue-100 text-blue-800 border-blue-200'
      : 'bg-purple-100 text-purple-800 border-purple-200';
  };

  const getStatusColor = (status: string) => {
    return status === 'active'
      ? 'bg-green-100 text-green-800 border-green-200'
      : 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Phone Numbers</h1>
          <p className="text-gray-600">
            Manage your phone numbers and purchase new ones
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-teal to-brand-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all">
          <Plus className="w-5 h-5" />
          Buy Number
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Total Numbers</p>
          <p className="text-2xl font-bold">{displayNumbers.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Active</p>
          <p className="text-2xl font-bold text-green-600">
            {displayNumbers.filter(n => n.status === 'active').length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Local</p>
          <p className="text-2xl font-bold text-blue-600">
            {displayNumbers.filter(n => n.type === 'local').length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Monthly Cost</p>
          <p className="text-2xl font-bold text-purple-600">
            ${displayNumbers.reduce((sum, n) => sum + n.monthly_cost, 0)}
          </p>
        </div>
      </div>

      {/* Numbers Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Active Numbers</h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage your phone numbers and assignments
          </p>
        </div>

        {loading ? (
          <div className="p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-teal"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Assigned Agent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Monthly Cost</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {displayNumbers.map((number) => (
                  <tr
                    key={number.id}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-teal to-brand-blue flex items-center justify-center">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">{number.formatted_number}</p>
                          <p className="text-sm text-gray-600">{number.number}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(number.type)}`}>
                        {number.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {number.location}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-700">{number.assigned_agent || 'Unassigned'}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-gray-700">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        {number.monthly_cost}/month
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(number.status)}`}>
                        {number.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 rounded-lg hover:bg-gray-100 text-blue-500"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 rounded-lg hover:bg-gray-100 text-red-500"
                          title="Release"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && displayNumbers.length === 0 && (
          <div className="p-12 text-center">
            <Phone className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-semibold mb-2">No phone numbers yet</h3>
            <p className="text-gray-600">
              Purchase your first phone number to get started
            </p>
            <button className="mt-4 px-6 py-2 bg-brand-teal text-white rounded-lg font-medium hover:bg-opacity-90">
              Buy Number
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NumbersPage;
