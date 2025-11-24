import React, { useState, useEffect } from 'react';
import { Target, Clock, Star, Brain, TrendingUp, TrendingDown } from 'lucide-react';
import { closerxApi, DashboardStats } from '../../services/closerxApi';

const DashboardOverview: React.FC = () => {
  // Dashboard stats from API
  const [stats, setStats] = useState<DashboardStats>({
    total_agents: 0,
    active_agents: 0,
    inactive_agents: 0,
    active_campaigns: 0,
    total_campaigns: 0,
    paused_campaigns: 0,
    total_calls_today: 0,
    total_calls_week: 0,
    total_calls_month: 0,
    calls_completed: 0,
    calls_missed: 0,
    call_success_rate: 0,
    conversion_rate: 0,
    average_call_duration: 0,
    average_response_time: 0,
    ai_accuracy_rate: 90,
    sentiment_positive: 0,
    transcription_accuracy: 0,
    active_phone_numbers: 0,
    total_contacts: 0,
    credits_remaining: 10,
    credits_used_today: 0,
  });
  const [loadingStats, setLoadingStats] = useState(true);

  // Fetch dashboard stats on mount
  useEffect(() => {
    const fetchDashboardStats = async () => {
      setLoadingStats(true);
      const response = await closerxApi.getDashboardStats();
      if (response.success && response.data) {
        setStats(response.data);
      }
      setLoadingStats(false);
    };

    fetchDashboardStats();
  }, []);

  // Mock call volume data for the chart (12 months)
  const callVolumeData = [
    { month: 'JAN', total: 0, completed: 0, missed: 0 },
    { month: 'FEB', total: 0, completed: 0, missed: 0 },
    { month: 'MAR', total: 0, completed: 0, missed: 0 },
    { month: 'APR', total: 0, completed: 0, missed: 0 },
    { month: 'MAY', total: 0, completed: 0, missed: 0 },
    { month: 'JUN', total: 0, completed: 0, missed: 0 },
    { month: 'JUL', total: 0, completed: 0, missed: 0 },
    { month: 'AUG', total: 0, completed: 0, missed: 0 },
    { month: 'SEP', total: 0, completed: 0, missed: 0 },
    { month: 'OCT', total: 0, completed: 0, missed: 0 },
    { month: 'NOV', total: 0, completed: 0, missed: 0 },
    { month: 'DEC', total: 0, completed: 0, missed: 0 },
  ];

  const metricsCards = [
    {
      id: 'call-success',
      title: 'Call Success Rate',
      value: `${stats.call_success_rate}%`,
      icon: Target,
      iconColor: 'text-brand-teal',
      bgColor: 'bg-teal-50',
      change: 0,
      subMetrics: [
        { label: 'Daily', value: `${stats.call_success_rate}%` },
        { label: 'Weekly', value: `${stats.call_success_rate}%` },
        { label: 'Monthly', value: `${stats.call_success_rate}%` },
      ],
    },
    {
      id: 'response-time',
      title: 'Average Response Time',
      value: `${stats.average_response_time}s`,
      icon: Clock,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: 0,
      subMetrics: [
        { label: 'Peak', value: `${Math.round(stats.average_response_time * 1.2)}s` },
        { label: 'Low', value: `${Math.round(stats.average_response_time * 0.8)}s` },
        { label: 'Average', value: `${stats.average_response_time}s` },
      ],
    },
    {
      id: 'total-balance',
      title: 'Total Balance',
      value: stats.credits_remaining.toString(),
      icon: Star,
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      change: 0.2,
      subMetrics: [
        { label: 'Responses', value: stats.total_calls_today.toString() },
        { label: 'Trend', value: 'Upward' },
        { label: 'TopReason', value: 'AI Accuracy' },
      ],
    },
    {
      id: 'ai-accuracy',
      title: 'AI Accuracy Rate',
      value: `${stats.ai_accuracy_rate}%`,
      icon: Brain,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: 0,
      subMetrics: [
        { label: 'Sentiment', value: `${stats.sentiment_positive}%` },
        { label: 'Transcription', value: `${stats.transcription_accuracy}%` },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metricsCards.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              {/* Icon and Change Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${metric.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${metric.iconColor}`} />
                </div>
                {metric.change !== 0 && (
                  <div className="flex items-center gap-1 text-xs font-medium text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    +{metric.change}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                {metric.title}
              </h3>

              {/* Value */}
              <p className="text-3xl font-bold text-gray-900 mb-4">
                {loadingStats ? '...' : metric.value}
              </p>

              {/* Sub-metrics */}
              <div className="grid grid-cols-3 gap-3">
                {metric.subMetrics.map((sub, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xs text-gray-500 mb-1">{sub.label}</p>
                    <p className="text-xs font-semibold text-gray-900">
                      {loadingStats ? '...' : sub.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Call Volume Analytics Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Call Volume Analytics
          </h2>
          <p className="text-sm text-gray-600">
            Monthly breakdown of call activity
          </p>
        </div>

        {/* Chart Area */}
        <div className="relative h-80">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 pr-4">
            <span>4</span>
            <span>3</span>
            <span>2</span>
            <span>1</span>
            <span>0</span>
          </div>

          {/* Chart container */}
          <div className="ml-8 h-full border-l border-b border-gray-200 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="border-t border-gray-100" />
              ))}
            </div>

            {/* X-axis labels */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-gray-500">
              {callVolumeData.map((data) => (
                <span key={data.month} className="w-16 text-center">
                  {data.month}
                </span>
              ))}
            </div>

            {/* Empty state message */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm text-gray-400">No call data available yet</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-12 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-brand-teal" />
            <span className="text-sm text-gray-600">Total Calls</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm text-gray-600">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-sm text-gray-600">Missed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
