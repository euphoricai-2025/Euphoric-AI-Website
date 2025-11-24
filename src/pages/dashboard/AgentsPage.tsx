import React, { useState, useEffect } from 'react';
import { Bot, Play, Lock, Search, ChevronDown, Plus, Edit, Trash2 } from 'lucide-react';
import { closerxApi, Agent } from '../../services/closerxApi';

const AgentsPage = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    setLoading(true);
    const response = await closerxApi.getAgents();
    if (response.success && response.data) {
      setAgents(response.data);
    }
    setLoading(false);
  };

  const mockAgents: Agent[] = [
    {
      id: '1',
      name: 'add_agent_name',
      type: 'inbound',
      status: 'inactive',
      voice: 'Marissa',
      language: 'en-US',
      created_at: '2025-10-30T10:00:00Z',
      updated_at: '2025-10-30T10:00:00Z',
      prompt: 'gpt-4.1-nano',
    },
  ];

  const displayAgents = agents.length > 0 ? agents : mockAgents;

  // Calculate stats
  const totalAgents = displayAgents.length;
  const activeAgents = displayAgents.filter(a => a.status === 'active').length;
  const inactiveAgents = displayAgents.filter(a => a.status === 'inactive').length;

  // Filter agents based on search
  const filteredAgents = displayAgents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.voice.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-700 bg-green-50';
      case 'inactive':
        return 'text-amber-700 bg-amber-50';
      case 'draft':
        return 'text-gray-700 bg-gray-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Agents */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
              <Bot className="w-7 h-7 text-gray-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Total Agents</p>
              <p className="text-3xl font-bold text-gray-900">{totalAgents}</p>
            </div>
          </div>
        </div>

        {/* Active Agents */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center">
              <Play className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Active Agents</p>
              <p className="text-3xl font-bold text-gray-900">{activeAgents}</p>
            </div>
          </div>
        </div>

        {/* Inactive Agents */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
              <Lock className="w-7 h-7 text-gray-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Inactive Agents</p>
              <p className="text-3xl font-bold text-gray-900">{inactiveAgents}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions Bar */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Agents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          />
        </div>

        {/* Filter Dropdown */}
        <button className="px-6 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors flex items-center gap-2">
          <span className="font-medium text-gray-700">Filter</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

        {/* Create New Button */}
        <button className="px-6 py-3 rounded-xl bg-brand-teal hover:bg-opacity-90 text-white font-semibold transition-colors flex items-center gap-2">
          <span>Create New</span>
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Agents Table */}
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
                      Agent Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Model
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Voice
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Language
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Last Updated
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredAgents.map((agent) => (
                    <tr
                      key={agent.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">{agent.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700">{agent.prompt || 'gpt-4.1-nano'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700">{agent.voice}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700">{agent.language}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700">{formatDate(agent.updated_at)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-md text-xs font-medium capitalize ${getStatusColor(agent.status)}`}>
                          {agent.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                            title="Edit Agent"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                            title="Delete Agent"
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

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 p-6 border-t border-gray-200">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-brand-teal text-white font-medium hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <span className="text-sm">Previous</span>
              </button>
              <button className="px-4 py-2 rounded-lg bg-brand-teal text-white font-medium">
                1
              </button>
              <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-brand-teal text-white font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2"
              >
                <span className="text-sm">Next</span>
              </button>
            </div>
          </>
        )}

        {!loading && filteredAgents.length === 0 && (
          <div className="p-12 text-center">
            <Bot className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">No agents found</h3>
            <p className="text-gray-600">
              {searchQuery ? 'Try adjusting your search query' : 'Create your first agent to get started'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentsPage;
