"use client";

import React from "react";

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full bg-slate-950 border border-slate-800 rounded-2xl p-8 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-teal-400">मुलाखतीचे मूल्यमापन पूर्ण झाले!</h2>
        <p className="text-slate-300">
          तुमच्या उत्थानांचे तपशीलवार विश्लेषण, गुण आणि अभिप्राय रिपोर्ट तयार आहे.
        </p>

        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-left space-y-2">
          <p className="text-sm text-slate-400">एकूण गुण: <span className="text-white font-bold">७५ / १००</span></p>
          <p className="text-sm text-slate-400">संभाषण कौशल्य: <span className="text-green-400 font-semibold">उत्तम</span></p>
          <p className="text-sm text-slate-400">सुधारणेची गरज: <span className="text-yellow-400 font-semibold">तथ्यात्मक स्पष्टता</span></p>
        </div>

        <button
          onClick={() => alert("पेमेंट गेटवे सुरू होत आहे...")}
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-xl shadow-lg transition"
        >
          पूर्ण PDF रिपोर्ट डाऊनलोड करा
        </button>
      </div>
    </div>
  );
}
