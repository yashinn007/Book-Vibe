import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* 404 */}
        <h1 className="text-[120px] md:text-[180px] font-extrabold leading-none bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-base md:text-lg mt-4 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or may have been
          moved to another location.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition"
          >
            ← Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold shadow-lg shadow-purple-200 hover:scale-105 transition"
          >
            Go Home
          </button>
        </div>

        {/* Small text */}
        <p className="text-sm text-gray-400 mt-10">Error code: 404</p>
      </div>
    </div>
  );
};

export default ErrorPage;
