import React from 'react';
import { TrendingUp, Mail, Users, MousePointer } from 'lucide-react';

const emailLeads = [
  {
    email: 'contact@techconf.com',
    subject: 'Security Quote Request',
    date: '2 hours ago',
    status: 'New'
  },
  {
    email: 'events@summerfest.org',
    subject: 'Event Security Inquiry',
    date: '5 hours ago',
    status: 'Replied'
  },
  {
    email: 'hr@corporate.com',
    subject: 'Guard Services Quote',
    date: '1 day ago',
    status: 'New'
  }
];

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Analytics & Leads</h1>
      
      {/* Website Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <MousePointer className="h-4 w-4" />
            Website Visits
          </div>
          <p className="mt-2 text-3xl font-semibold">12,543</p>
          <p className="text-sm text-green-600">+18.2% this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <Mail className="h-4 w-4" />
            Email Leads
          </div>
          <p className="mt-2 text-3xl font-semibold">284</p>
          <p className="text-sm text-green-600">+24.5% this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <Users className="h-4 w-4" />
            Job Applications
          </div>
          <p className="mt-2 text-3xl font-semibold">156</p>
          <p className="text-sm text-green-600">+12.1% this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <TrendingUp className="h-4 w-4" />
            Conversion Rate
          </div>
          <p className="mt-2 text-3xl font-semibold">4.2%</p>
          <p className="text-sm text-green-600">+1.1% this month</p>
        </div>
      </div>

      {/* Email Leads */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium mb-4">Recent Email Leads</h2>
          <div className="space-y-4">
            {emailLeads.map((lead, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">{lead.email}</p>
                    <p className="text-sm text-gray-500">{lead.subject}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    lead.status === 'New' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {lead.status}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">{lead.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}