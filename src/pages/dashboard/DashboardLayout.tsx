import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Bot,
  Megaphone,
  Phone,
  BarChart3,
  Globe,
  Bell,
  User,
  LogOut,
  Menu,
  X as CloseIcon,
  ChevronDown,
  Settings,
  Users,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const DashboardLayout = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState('Real Estate');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDomainMenuOpen, setIsDomainMenuOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, title: 'Campaign Completed', message: 'Property Follow-ups campaign has finished successfully', time: '1/20/2024, 3:30:00 PM', read: false },
    { id: 2, title: 'High Call Volume', message: 'Unusual spike in inbound calls detected', time: '1/20/2024, 3:15:00 PM', read: false },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Agents', path: '/dashboard/agents', icon: Bot },
    { name: 'Phone Number', path: '/dashboard/numbers', icon: Phone },
    { name: 'Contacts', path: '/dashboard/contacts', icon: Users },
    { name: 'Credits', path: '/dashboard/credits', icon: BarChart3 },
    { name: 'Campaign', path: '/dashboard/campaigns', icon: Megaphone },
  ];

  const domains = ['Real Estate', 'Healthcare', 'E-commerce'];

  const isActivePath = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  const handleSignOut = async () => {
    // Clear CloserX API key and user data from localStorage
    localStorage.removeItem('closerx_api_key');
    localStorage.removeItem('closerx_user');

    await signOut();
    navigate('/dashboard-login');
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar - Fixed Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 lg:px-6">
        {/* Left: Hamburger + Logo + Domain Selector */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <CloseIcon className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
          </button>

          <Link to="/dashboard" className="flex items-center gap-2">
            <img src="/euphoric-logo-final.png" alt="Euphoric AI" className="h-8" />
          </Link>

          <div className="relative hidden md:block">
            <button
              onClick={() => setIsDomainMenuOpen(!isDomainMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-white border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Globe className="w-4 h-4 text-brand-teal" />
              <span className="font-medium text-gray-900">{selectedDomain}</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>

            {isDomainMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                {domains.map((domain) => (
                  <button
                    key={domain}
                    onClick={() => {
                      setSelectedDomain(domain);
                      setIsDomainMenuOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                      selectedDomain === domain
                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    {domain}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Search + Notifications + User */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search agents, campaigns..."
            className="hidden md:block w-64 lg:w-80 px-4 py-2 rounded-lg border bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow"
          />

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-gray-700" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <button className="text-sm text-brand-blue hover:underline">Mark all read</button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${notif.read ? 'bg-gray-400' : 'bg-brand-blue'}`}></div>
                        <div className="flex-1">
                          <p className="font-medium text-sm text-gray-900">{notif.title}</p>
                          <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white transition-colors"
              aria-label="User menu"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center text-sm font-semibold">
                {user?.email?.charAt(0).toUpperCase() || 'U'}
              </div>
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="font-semibold text-gray-900">John Smith</p>
                  <p className="text-sm text-gray-600">{user?.email || 'john@company.com'}</p>
                </div>
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left flex items-center gap-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    <User className="w-4 h-4" />
                    Profile Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left flex items-center gap-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    <Settings className="w-4 h-4" />
                    Account Settings
                  </button>
                </div>
                <div className="border-t border-gray-200 py-2">
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-2 text-left flex items-center gap-3 text-red-500 hover:bg-gray-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Collapsible Sidebar */}
      <aside className={`fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActivePath(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  active
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => window.innerWidth < 1024 && setIsSidebarOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content - Fixed padding to prevent header overlap */}
      <main className={`pt-16 ${isSidebarOpen ? 'lg:ml-64' : ''} transition-all duration-300 min-h-screen`}>
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      {/* Mobile overlay for sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
