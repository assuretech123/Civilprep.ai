'use client';

import Link from 'next/link';

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-xl border border-slate-100 w-full text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          मुलाखत मूल्यमापन अहवाल (Interview Report)
        </h1>
        <p className="text-slate-600 mb-6">MPSC/UPSC AI Mock Assessment</p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <span className="text-4xl font-black text-blue-600">78 / 100</span>
          <p className="text-sm text-blue-800 font-semibold mt-1">एकूण गुण (Overall Score)</p>
        </div>

        <div className="space-y-4 text-left mb-8">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-800">✅ सकारात्मक बाजू (Strengths)</h3>
            <p className="text-sm text-slate-600 mt-1">
              विषयाची स्पष्टता उत्तम आहे आणि उत्तरे आत्मविश्वासाने दिली आहेत.
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-800">💡 सुधारणेसाठी क्षेत्रे (Areas for Improvement)</h3>
            <p className="text-sm text-slate-600 mt-1">
              प्रशासकीय दृष्टिकोनातून विश्लेषणात्मक उत्तरे देण्यावर अधिक भर द्या.
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-md"
        >
          पुन्हा प्रयत्न करा (Start Again)
        </Link>
      </div>
    </main>
  );
}
