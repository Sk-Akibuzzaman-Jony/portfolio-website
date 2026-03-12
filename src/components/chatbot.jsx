import React, { useState, useRef, useEffect } from "react";
import { LuBotMessageSquare } from "react-icons/lu";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi, how can I help you to know more about my portfolio?",
    },
  ]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  const API_BASE = "http://127.0.0.1:8000";

  // Load session from localStorage
  useEffect(() => {
    const savedSession = localStorage.getItem("chat_session_id");
    if (savedSession) {
      setSessionId(savedSession);
    }
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setInput("");

    // Add user message + loader
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "ai", loading: true },
    ]);

    try {
      const response = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userText,
          session_id: sessionId,
        }),
      });

      const data = await response.json();

      // Save new session ID if created
      if (!sessionId && data.session_id) {
        localStorage.setItem("chat_session_id", data.session_id);
        setSessionId(data.session_id);
      }

      // Replace loader with real answer
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          sender: "ai",
          text: data.answer,
        };
        return updated;
      });
    } catch (error) {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          sender: "ai",
          text: "Server error. Please try again.",
        };
        return updated;
      });
    }
  };

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="
        fixed bottom-16 right-12
        w-16 h-16
        flex items-center justify-center
        rounded-full
        bg-neutral-600 hover:bg-gray-700
        text-white shadow-lg
        transition-all duration-300
        hover:scale-110 active:scale-95
        hover:shadow-2xl
        md:right-30
        md:bottom-20
        opacity-100
        z-20
        "
      >
        <LuBotMessageSquare className="text-3xl text-amber-400 transition-transform duration-300 hover:rotate-12" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed md:bottom-40 bottom-36 md:right-28 mx-6 
          bg-white p-6 rounded-2xl border border-gray-200 
          md:w-110 md:h-158.5 shadow-lg flex flex-col h-[calc(100vh-210px)]
          "
        >
          {/* Header */}
          <div className="pb-4 border-b">
            <h2 className="font-semibold text-lg">Chatbot</h2>
            <p className="text-sm text-gray-500">
              Here to help you with any questions about my portfolio or
              projects!
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto pr-2 mt-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 text-sm ${
                  msg.sender === "user" ? "justify-end" : ""
                }`}
              >
                {msg.sender === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">
                    AI
                  </div>
                )}

                <div
                  className={`px-4 py-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.loading ? (
                    <div className="flex flex-row gap-2">
                      <div className="w-3 h-3 rounded-full bg-neutral-500 animate-bounce"></div>
                      <div className="w-3 h-3 rounded-full bg-neutral-500 animate-bounce [animation-delay:-.3s]"></div>
                      <div className="w-3 h-3 rounded-full bg-neutral-500 animate-bounce [animation-delay:-.5s]"></div>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                    You
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="flex items-center gap-2 pt-4 border-t"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message"
              className="flex-1 h-10 rounded-md border border-gray-200 px-3 
              text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white 
              px-4 h-10 rounded-md text-sm"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
