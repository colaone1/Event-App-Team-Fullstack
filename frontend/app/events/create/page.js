'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

function buildApiUrl(path) {
  const base = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
  return base + '/' + path.replace(/^\//, '');
}

export default function CreateEvent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    dateTime: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const token = Cookies.get('token');
      if (!token) {
        router.push('/login');
        return;
      }

      // Convert dateTime to ISO string if not already
      const eventData = {
        ...formData,
        dateTime: formData.dateTime ? new Date(formData.dateTime).toISOString() : ''
      };

      const response = await fetch(buildApiUrl('/events'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(eventData)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to create event');
      }

      // Redirect to events list
      router.push('/events');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Create New Event</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative mb-4" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Event Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
              value={formData.name}
              onChange={handleChange}
              placeholder="Event Name"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </div>

          <div>
            <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700">
              Date and Time
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              id="dateTime"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
              value={formData.dateTime}
              onChange={handleChange}
              placeholder="YYYY-MM-DDTHH:MM"
              onKeyDown={e => e.preventDefault()}
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => router.push('/events')}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 