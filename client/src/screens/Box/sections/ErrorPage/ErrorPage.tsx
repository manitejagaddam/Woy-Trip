import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-red-800 p-4">
      <h1 className="text-4xl font-bold">Oops! 🧨</h1>
      <p className="text-xl mt-2">Something went wrong or the page doesn't exist.</p>
      <p className="mt-4 text-sm italic">{error.statusText || error.message}</p>
      <a href="/" className="mt-6 text-blue-500 underline">Go back to Home</a>
    </div>
  );
};

export default ErrorPage;
