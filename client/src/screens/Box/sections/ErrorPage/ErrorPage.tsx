import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  // Defensive checks and fallback
  if (isRouteErrorResponse(error)) {
    return (
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-red-600">Oops! 😵</h1>
        <p className="text-xl mt-4">{error.status} - {error.statusText}</p>
      </div>
    );
  }

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-600">Something went wrong 😥</h1>
      <p className="text-xl mt-4">{(error as Error)?.message || "Unknown error occurred."}</p>
    </div>
  );
};

export default ErrorPage;
