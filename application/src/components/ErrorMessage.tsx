import React from 'react';

interface ErrorMessageProps {
  message: string;
}

/**
 * Displays an error message.
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="text-center text-red-600 font-medium py-4">{message}</div>
);

export default ErrorMessage;