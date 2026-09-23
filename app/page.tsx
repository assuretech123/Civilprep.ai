'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [lang, setLang] = useState<'mr' | 'en'>('mr');

  const content = {
    mr: {
      badge: "MPSC & UPSC AI Mock Interview",
      title: "Civilprep.ai मध्ये आपले स्वागत आहे",
      subtitle: "आपल्या स्वप्नातील प्रशासकीय सेवेच्या तयारीसाठी AI-आधारित सर्वोत्तम मार्गदर्शक आणि मॉक मुलाखत प्लॅटफॉर्म.",
      feature1Title: "🎯 सानुकूल प्रश्न",
      feature1Desc: "मराठी व इंग्रजी दोन्ही भाषांमध्ये तुमच्या घटकांवर आधारित प्रश्न.",
      feature2Title: "🎙️ AI मुलाखत",
      feature2Desc: "वास्तविक मुलाखतीचा अनुभव आणि व्हॉईस/टेक्स्ट संवाद.",
      feature3Title: "📊 सखोल फीडबॅक",
      feature3Desc: "मुलाखतीनंतर लगेच गुण आणि सुधारणांसाठी मोलाचा सल्ला.",
      btnText: "मुलाखत सुरू करा 🚀",
      toggleBtn: "English"
    },
    en: {
      badge: "MPSC & UPSC AI Mock Interview",
      title: "Welcome to Civilprep.ai",
      subtitle: "The ultimate AI-driven mock interview platform for your civil services preparation.",
      feature1Title: "🎯 Targeted Questions",
      feature1Desc: "Customized questions based on your syllabus in Marathi & English.",
      feature2Title: "🎙️ AI Interviewer",
      feature2Desc: "Real-time interview experience with voice and text response.",
      feature3Title: "📊 Detailed Report",
      feature3Desc: "Instant scoring and actionable suggestions post-interview.",
      btnText: "Start Interview 🚀",
      toggleBtn: "मराठी"
    }
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center relative">
      {/* Language Toggle Button */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
          className="bg-white border border-slate-300 text-slate-800 font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-slate-100 transition-all"
        >
          🌐 {t.toggleBtn}
        </button>
      </div>

      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          {t.badge}
        </span>
        
        <h1 className="text-4xl font-extrabold text-slate-900 mt-4 mb-2">
          {t.title}
        </h1>
        
        <p className="text-lg text-slate-600 mb-8">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-1">{t.feature1Title}</h3>
            <p className="text-sm text-slate-600">{t.feature1Desc}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-1">{t.feature2Title}</h3>
            <p className="text-sm text-slate-600">{t.feature2Desc}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-1">{t.feature3Title}</h3>
            <p className="text-sm text-slate-600">{t.feature3Desc}</p>
          </div>
        </div>

        <Link 
          href="/interview" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          {t.btnText}
        </Link>
      </div>
    </main>
  );
}
