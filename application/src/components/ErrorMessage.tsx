import React from 'react';

/**
 * Props for the ErrorMessage component.
 */
interface ErrorMessageProps {
  /** The error message to display to the user. */
  message: string;
}

/**
 * Displays an error message in a styled container with red text.
 * Used throughout the application for consistency.
 * @param {ErrorMessageProps} props The component props.
 * @return {JSX.Element} A styled error message display.
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="text-center text-red-600 font-medium py-4">{message}</div>
);

export default ErrorMessage;
