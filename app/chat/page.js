"use client"
import { useState } from 'react';


export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">🎓 Studenko</h1>
        <span className="text-gray-500 text-sm">AI pomoćnik za studente</span>
      </header>

      {messages.length === 0 ? (
        // 📍 Prikaz kada još nema poruka
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pitaj Studenka bilo što o studiranju</h2>
          <div className="w-full max-w-xl">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Npr. Gdje mogu pronaći studentski dom u Zagrebu?"
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Chat messages */}
          <main className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow max-w-xl mx-auto">
                <p className="text-gray-800">{msg}</p>
              </div>
            ))}
          </main>

          {/* Input (zaobljen i ovde) */}
          <footer className="bg-white border-t px-4 py-4">
            <div className="flex items-center gap-2 max-w-4xl mx-auto">
              <input
                type="text"
                placeholder="Upiši novo pitanje..."
                className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition"
              >
                ➤
              </button>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
