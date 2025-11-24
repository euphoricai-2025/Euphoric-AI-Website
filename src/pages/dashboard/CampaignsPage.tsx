import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Phone, RotateCcw, Plus } from 'lucide-react';
import { closerxApi, Campaign } from '../../services/closerxApi';

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
    setLoading(true);
    const response = await closerxApi.getCampaigns();
    if (response.success && response.data) {
      setCampaigns(response.data);
    }
    setLoading(false);
  };

  // Filter campaigns based on search
  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-700 bg-green-50';
      case 'paused':
        return 'text-yellow-700 bg-yellow-50';
      case 'completed':
        return 'text-blue-700 bg-blue-50';
      case 'scheduled':
        return 'text-purple-700 bg-purple-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6 space-y-6">
      {/* Search and Actions Bar */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          />
        </div>

        {/* Type Filter Dropdown */}
        <button className="px-6 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors flex items-center gap-2">
          <span className="font-medium text-gray-700">Type Filter</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

        {/* Status Filter Dropdown */}
        <button className="px-6 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors flex items-center gap-2">
          <span className="font-medium text-gray-700">Status Filter</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

        {/* View Callbacks Button */}
        <button className="px-6 py-3 rounded-xl bg-brand-teal hover:bg-opacity-90 text-white font-semibold transition-colors flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <span>View Callbacks</span>
        </button>

        {/* Redial Campaigns Button */}
        <button className="px-6 py-3 rounded-xl bg-brand-teal hover:bg-opacity-90 text-white font-semibold transition-colors flex items-center gap-2">
          <RotateCcw className="w-5 h-5" />
          <span>Redial Campaigns</span>
        </button>

        {/* Create New Button */}
        <button className="px-6 py-3 rounded-xl bg-brand-teal hover:bg-opacity-90 text-white font-semibold transition-colors flex items-center gap-2">
          <span>Create New</span>
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Campaigns Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-teal"></div>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Campaign Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Agent Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Phone Number
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Created At
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCampaigns.length === 0 && (
                    <tr>
                      <td colSpan={8} className="px-6 py-16 text-center">
                        <p className="text-gray-600 text-lg">
                          No campaigns available for this ID.
                        </p>
                      </td>
                    </tr>
                  )}
                  {filteredCampaigns.map((campaign) => (
                    <tr
                      key={campaign.id}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">{campaign.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700">Outbound</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700">-</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700">-</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700">-</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700">{formatDate(campaign.created_at)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-md text-xs font-medium capitalize ${getStatusColor(campaign.status)}`}>
                          {campaign.status}
                        </span>
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

export default CampaignsPage;
