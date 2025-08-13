import React from 'react';

/**
 * Loading spinner component that displays a rotating blue circle.
 * Used to indicate loading states throughout the application.
 * @return {JSX.Element} An animated loading spinner.
 */
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center py-8">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default LoadingSpinner;
