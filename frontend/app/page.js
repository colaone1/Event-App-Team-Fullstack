'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const token = Cookies.get('token');
    setIsAuthenticated(!!token);
  }, []);

  const handlePostEvent = () => {
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      router.push('/events/create');
    }
  };

  const handleBrowseEvents = () => {
    router.push('/events');
  };

  const handleCreateFirstEvent = () => {
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      router.push('/events/create');
    }
  };

  const handleLogout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
          Post Your Events, <span className="text-blue-600 dark:text-blue-400">Reach More</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          The simplest way to create and manage your events. Reach your target audience in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {!isAuthenticated ? (
            <>
              <button
                onClick={() => router.push('/login')}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Login to Post
              </button>
              <button
                onClick={handleBrowseEvents}
                className="px-8 py-3 bg-white text-black rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Browse Events
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handlePostEvent}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Post an Event
              </button>
              <button
                onClick={handleBrowseEvents}
                className="px-8 py-3 bg-white text-black rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Browse Events
              </button>
              <button
                onClick={handleLogout}
                className="px-8 py-3 bg-gray-300 text-black rounded-full font-medium border border-gray-200 hover:bg-gray-400 transition-colors"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Easy Posting</h3>
            <p className="text-gray-600 dark:text-gray-300">Create and publish your events in minutes with our simple interface.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Wide Reach</h3>
            <p className="text-gray-600 dark:text-gray-300">Get your events seen by thousands of potential attendees.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Secure & Reliable</h3>
            <p className="text-gray-600 dark:text-gray-300">Your events are safe with our secure and reliable platform.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already posting their events and reaching their target audience.
          </p>
          <button 
            onClick={handleCreateFirstEvent}
            className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            {isAuthenticated ? 'Create Your First Event' : 'Login to Get Started'}
          </button>
        </div>
      </div>
    </div>
  );
}
