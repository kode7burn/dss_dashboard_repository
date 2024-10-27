import React from 'react';
import { FileText, Download, Book } from 'lucide-react';

const documents = [
  {
    name: 'Employee Handbook 2024',
    icon: Book,
    size: '2.4 MB',
    updated: 'Jan 15, 2024'
  },
  {
    name: 'W-2 Form (2023)',
    icon: FileText,
    size: '245 KB',
    updated: 'Jan 31, 2024'
  },
  {
    name: 'Security Training Manual',
    icon: Book,
    size: '3.8 MB',
    updated: 'Dec 12, 2023'
  },
  {
    name: 'Benefits Guide 2024',
    icon: FileText,
    size: '1.2 MB',
    updated: 'Jan 1, 2024'
  }
];

export function GuardsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Guard Documents</h1>
      
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-medium mb-4">Important Documents</h2>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.name} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <doc.icon className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">{doc.name}</p>
                    <p className="text-sm text-gray-500">
                      {doc.size} • Updated {doc.updated}
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}