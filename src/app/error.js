
"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
        throw error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Something Went Wrong</h1>
            <p className="text-gray-600 mb-6">An unexpected error has occurred. Please try again.</p>
            <button
                onClick={() => reset()} // Attempt to recover by resetting the error boundary
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Try Again
            </button>
        </div>
    );
}
