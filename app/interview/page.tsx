'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InterviewPage() {
  const [lang, setLang] = useState<'mr' | 'en'>('mr');
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    {
      sender: 'ai',
      text: 'नमस्कार! मी तुमचा MPSC/UPSC AI मुलाखत पॅनेल सदस्य आहे. आपण सुरू करूया? कृपया तुमचा परिचय द्या.'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, language: lang }),
      });
      const data = await response.json();

      setMessages((prev) => [...prev, { sender: 'ai', text: data.reply || 'धन्यवाद. पुढील प्रश्नाकडे वळूया.' }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: lang === 'mr' ? 'त्रुटी आली. कृपया पुन्हा प्रयत्न करा.' : 'An error occurred. Please try again.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-between p-4 md:p-8">
      {/* Header */}
      <header className="w-full max-w-3xl flex justify-between items-center bg-white p-4 rounded-xl shadow-sm mb-4">
        <h1 className="text-xl font-bold text-blue-800">Civilprep.ai - Live Mock Interview</h1>
        <button
          onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
          className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded-md border"
        >
          🌐 {lang === 'mr' ? 'English' : 'मराठी'}
        </button>
      </header>

      {/* Chat Area */}
      <div className="w-full max-w-3xl flex-1 bg-white p-6 rounded-2xl shadow-md overflow-y-auto max-h-[60vh] space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl text-sm md:text-base ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'
              }`}
            >
              <p className="font-semibold text-xs mb-1 opacity-75">
                {msg.sender === 'user' ? (lang === 'mr' ? 'तुम्ही' : 'You') : (lang === 'mr' ? 'AI मुलाखतकार' : 'AI Panel')}
              </p>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-slate-400 text-sm italic">
            {lang === 'mr' ? 'AI विचार करत आहे...' : 'AI is thinking...'}
          </div>
        )}
      </div>

      {/* Input Form */}
      <div className="w-full max-w-3xl mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={lang === 'mr' ? 'तुमचे उत्तर टाईप करा...' : 'Type your answer here...'}
          className="flex-1 p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-xl shadow-md"
        >
          {lang === 'mr' ? 'पाठवा' : 'Send'}
        </button>
      </div>

      {/* Finish Button */}
      <div className="w-full max-w-3xl mt-4 text-right">
        <Link
          href="/report"
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-lg"
        >
          {lang === 'mr' ? 'मुलाखत पूर्ण करा व अहवाल पहा 📊' : 'Finish & View Report 📊'}
        </Link>
      </div>
    </main>
  );
}
