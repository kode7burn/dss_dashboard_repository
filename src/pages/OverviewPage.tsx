import React from 'react';
import { Users, Calendar, DollarSign, Shield, Clock, TrendingUp } from 'lucide-react';

const stats = [
  {
    label: 'Active Guards',
    value: '124',
    change: '+12%',
    icon: Users,
    trend: 'up'
  },
  {
    label: 'Monthly Revenue',
    value: '$156,240',
    change: '+8.2%',
    icon: DollarSign,
    trend: 'up'
  },
  {
    label: 'Upcoming Events',
    value: '18',
    change: '+4',
    icon: Calendar,
    trend: 'up'
  }
];

const recentActivity = [
  {
    id: 1,
    type: 'event_assigned',
    title: 'Tech Summit 2024',
    time: '2 hours ago',
    details: '8 guards assigned'
  },
  {
    id: 2,
    type: 'guard_check_in',
    title: 'Morning Shift Check-in',
    time: '4 hours ago',
    details: '12 guards checked in'
  },
  {
    id: 3,
    type: 'new_booking',
    title: 'Corporate Event Secured',
    time: '6 hours ago',
    details: 'Downtown Convention Center'
  }
];

export function OverviewPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          Last updated: Just now
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <stat.icon className="h-6 w-6 text-gray-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className={`h-4 w-4 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
              <span className={`ml-2 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} this month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Shield className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.details}</p>
                </div>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}