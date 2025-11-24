import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Phone, Users, DollarSign, Clock } from 'lucide-react';
import { closerxApi, DashboardStats } from '../../services/closerxApi';

const AnalyticsPage = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setLoading(true);
    const response = await closerxApi.getDashboardStats();
    if (response.success && response.data) {
      setStats(response.data);
    }
    setLoading(false);
  };

  const mockStats: DashboardStats = {
    total_agents: 1,
    active_campaigns: 1,
    total_calls_today: 42,
    total_calls_month: 856,
    conversion_rate: 23.5,
    average_call_duration: 180,
    active_phone_numbers: 2,
    credits_remaining: 1500,
  };

  const displayStats = stats || mockStats;

  const metricsCards = [
    {
      title: 'Total Calls (Month)',
      value: displayStats.total_calls_month.toLocaleString(),
      change: '+12.5%',
      trend: 'up',
      icon: Phone,
      color: 'blue',
    },
    {
      title: 'Calls Today',
      value: displayStats.total_calls_today.toLocaleString(),
      change: '+5.2%',
      trend: 'up',
      icon: Phone,
      color: 'green',
    },
    {
      title: 'Conversion Rate',
      value: `${displayStats.conversion_rate}%`,
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'purple',
    },
    {
      title: 'Avg Call Duration',
      value: `${Math.floor(displayStats.average_call_duration / 60)}m ${displayStats.average_call_duration % 60}s`,
      change: '-8.3%',
      trend: 'down',
      icon: Clock,
      color: 'orange',
    },
    {
      title: 'Active Agents',
      value: displayStats.total_agents.toString(),
      change: '0%',
      trend: 'neutral',
      icon: Users,
      color: 'teal',
    },
    {
      title: 'Credits Remaining',
      value: displayStats.credits_remaining.toLocaleString(),
      change: '-15.2%',
      trend: 'down',
      icon: DollarSign,
      color: 'indigo',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-gray-600">
          Track your performance metrics and insights
        </p>
      </div>

      {loading ? (
        <div className="p-12 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-teal"></div>
        </div>
      ) : (
        <>
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metricsCards.map((metric) => {
              const Icon = metric.icon;
              const colors = getColorClasses(metric.color);
              const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;

              return (
                <div
                  key={metric.title}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    {metric.trend !== 'neutral' && (
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        metric.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        <TrendIcon className="w-3 h-3" />
                        {metric.change}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                  <p className="text-3xl font-bold">{metric.value}</p>
                </div>
              );
            })}
          </div>

          {/* Campaign Performance */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Campaign Performance</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">Property Follow-ups</p>
                  <p className="text-sm text-gray-600">142 calls • 98 answered • 23 converted</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">23.5%</p>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call Volume Chart Placeholder */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Call Volume (Last 7 Days)</h2>
            <div className="h-64 flex items-end justify-around gap-2">
              {[42, 38, 51, 45, 62, 58, 67].map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-brand-teal to-brand-blue rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${(value / 70) * 100}%` }}
                  />
                  <p className="text-xs text-gray-600 font-medium">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-around mt-4 text-xs text-gray-600">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AnalyticsPage;
