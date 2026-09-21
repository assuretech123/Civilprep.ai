"use client";

import React, { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleStartInterview = () => {
    setLoading(true);
    window.location.href = "/interview";
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Civilprep AI
        </h1>
        <p className="text-lg text-slate-300">
          MPSC आणि UPSC नागरी सेवा परीक्षांच्या मॉक मुलाखतींसाठी कृत्रिम बुद्धिमत्ता (AI) आधारित ऑनलाईन प्लॅटफॉर्म.
        </p>
        <div className="pt-4">
          <button
            onClick={handleStartInterview}
            disabled={loading}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
          >
            {loading ? "लोड होत आहे..." : "मुलाखत सुरू करा (Start Mock Interview)"}
          </button>
        </div>
      </div>
    </main>
  );
}
