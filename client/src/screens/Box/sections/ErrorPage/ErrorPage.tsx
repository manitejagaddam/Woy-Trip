import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();

  const isErrorResponse = isRouteErrorResponse(error);
  const status = isErrorResponse ? error.status : 500;
  const message = isErrorResponse
    ? error.statusText
    : (error as Error)?.message || "Something went wrong.";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#42a7c3] to-[#38d4ff] text-center px-6">
      <div className="text-7xl text-blue-600 mb-4">
        <FaPlaneDeparture />
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">
        Oops! Flight Delayed 🚫
      </h1>
      <p className="text-xl text-gray-800">
        {status} - {message}
      </p>

      <p className="mt-6 text-lg text-gray-700 max-w-md">
        We couldn't take you to your dream destination at the moment. But no
        worries, let’s navigate back to safety.
      </p>

      <a
        href="/"
        className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg transition-all"
      >
        🏠 Back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
