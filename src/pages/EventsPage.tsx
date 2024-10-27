import React from 'react';
import { Calendar, DollarSign, Users, MapPin } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    name: 'Tech Conference 2024',
    date: 'Mar 15-17, 2024',
    location: 'Convention Center',
    revenue: 12500,
    guardsNeeded: 8
  },
  {
    id: 2,
    name: 'Summer Music Festival',
    date: 'Apr 5-7, 2024',
    location: 'Central Park',
    revenue: 18750,
    guardsNeeded: 12
  },
  {
    id: 3,
    name: 'Corporate Summit',
    date: 'Apr 20, 2024',
    location: 'Grand Hotel',
    revenue: 5800,
    guardsNeeded: 4
  }
];

export function EventsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Event Security</h1>
      
      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <DollarSign className="h-4 w-4" />
            Monthly Revenue
          </div>
          <p className="mt-2 text-3xl font-semibold">$37,050</p>
          <p className="text-sm text-green-600">+12.5% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <Calendar className="h-4 w-4" />
            Upcoming Events
          </div>
          <p className="mt-2 text-3xl font-semibold">8</p>
          <p className="text-sm text-gray-600">Next 30 days</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <Users className="h-4 w-4" />
            Guards Assigned
          </div>
          <p className="mt-2 text-3xl font-semibold">24</p>
          <p className="text-sm text-gray-600">Across all events</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Calendar className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">{event.name}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{event.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">${event.revenue.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{event.guardsNeeded} guards needed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}