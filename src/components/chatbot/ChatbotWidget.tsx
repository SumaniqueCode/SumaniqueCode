import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Trash2 } from "lucide-react";
import { useThemeContext } from "../../ThemeContext";
import { getBotResponse, SUGGESTED_QUESTIONS } from "../../utils/chatbotEngine";
import {
    ChatMessage,
    clearMessages,
    loadMessages,
    saveMessages,
} from "../../utils/chatStorage";
import { playReceiveSound, playSendSound } from "../../utils/chatSound";

const GREETING_MESSAGE: ChatMessage = {
    id: "greeting",
    role: "bot",
    text: "Hi! I'm Jarvis, Suman's AI assistant. Ask me about his projects, skills, work experience, or how to get in touch.",
    timestamp: Date.now(),
};

const ChatbotWidget = () => {
    const { darkMode } = useThemeContext();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const stored = loadMessages();
        setMessages(stored.length > 0 ? stored : [GREETING_MESSAGE]);
    }, []);

    // Clarifies the floating icon is a chatbot - shown a couple seconds after
    // the page settles, on every visit, so it keeps inviting engagement
    // rather than only appearing once. Dismissible per-visit via its close
    // button.
    useEffect(() => {
        const showTimer = setTimeout(() => setShowTooltip(true), 2500);
        return () => clearTimeout(showTimer);
    }, []);

    const openChat = () => {
        setIsOpen(true);
        setShowTooltip(false);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const sendMessage = (override?: string) => {
        const text = (override ?? input).trim();
        if (!text) return;

        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            text,
            timestamp: Date.now(),
        };

        const withUserMessage = [...messages, userMessage];
        setMessages(withUserMessage);
        saveMessages(withUserMessage);
        setInput("");
        setIsTyping(true);
        playSendSound();

        setTimeout(() => {
            const botMessage: ChatMessage = {
                id: crypto.randomUUID(),
                role: "bot",
                text: getBotResponse(text),
                timestamp: Date.now(),
            };
            const withBotMessage = [...withUserMessage, botMessage];
            setMessages(withBotMessage);
            saveMessages(withBotMessage);
            setIsTyping(false);
            playReceiveSound();
        }, 900);
    };

    const handleClear = () => {
        clearMessages();
        setMessages([GREETING_MESSAGE]);
    };

    const askQuick = (question: string) => {
        setShowTooltip(false);
        setIsOpen(true);
        sendMessage(question);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute bottom-0 right-0 flex flex-col w-[min(90vw,22rem)] h-[28rem] rounded-2xl shadow-2xl overflow-hidden border ${
                            darkMode
                                ? "bg-gray-900 border-gray-700"
                                : "bg-white border-gray-200"
                        }`}
                    >
                        <div
                            className={`flex items-center justify-between px-4 py-3 ${
                                darkMode
                                    ? "bg-[var(--color-primary-dark)] text-white"
                                    : "bg-[var(--color-primary)] text-white"
                            }`}
                        >
                            <span className="font-medium">Jarvis AI Assistant</span>
                            <div className="flex items-center gap-1">
                                <button
                                    type="button"
                                    aria-label="Clear chat"
                                    onClick={handleClear}
                                    className="p-1.5 rounded-md hover:bg-white/20 transition-colors cursor-pointer"
                                >
                                    <Trash2 size={16} />
                                </button>
                                <button
                                    type="button"
                                    aria-label="Close chat"
                                    onClick={() => setIsOpen(false)}
                                    className="p-1.5 rounded-md hover:bg-white/20 transition-colors cursor-pointer"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        <div
                            className={`flex-1 overflow-y-auto px-3 py-3 space-y-2 ${
                                darkMode ? "bg-gray-900" : "bg-gray-50"
                            }`}
                        >
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${
                                        msg.role === "user" ? "justify-end" : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`max-w-[80%] whitespace-pre-line break-words rounded-lg px-3 py-2 text-sm ${
                                            msg.role === "user"
                                                ? darkMode
                                                    ? "bg-[var(--color-primary-dark)] text-white"
                                                    : "bg-[var(--color-primary)] text-white"
                                                : darkMode
                                                    ? "bg-gray-800 text-gray-100"
                                                    : "bg-white text-gray-800 shadow-sm"
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div
                                        className={`rounded-lg px-3 py-2 text-sm ${
                                            darkMode
                                                ? "bg-gray-800 text-gray-400"
                                                : "bg-white text-gray-500 shadow-sm"
                                        }`}
                                    >
                                        Typing...
                                    </div>
                                </div>
                            )}

                            {!messages.some((msg) => msg.role === "user") && (
                                <div className="flex flex-col items-end gap-2">
                                    {SUGGESTED_QUESTIONS.map((question) => (
                                        <button
                                            key={question}
                                            type="button"
                                            onClick={() => sendMessage(question)}
                                            className={`text-xs px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
                                                darkMode
                                                    ? "border-[var(--color-primary)] text-blue-300 hover:bg-gray-800"
                                                    : "border-[var(--color-primary)] text-blue-700 hover:bg-blue-50"
                                            }`}
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        <div
                            className={`flex items-center gap-2 p-2 border-t ${
                                darkMode
                                    ? "border-gray-700 bg-gray-900"
                                    : "border-gray-200 bg-white"
                            }`}
                        >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") sendMessage();
                                }}
                                placeholder="Ask about projects, skills..."
                                className={`flex-1 rounded-lg px-3 py-2 text-sm outline-none ${
                                    darkMode
                                        ? "bg-gray-800 text-white placeholder-gray-500"
                                        : "bg-gray-100 text-gray-900 placeholder-gray-400"
                                }`}
                            />
                            <button
                                type="button"
                                aria-label="Send message"
                                onClick={() => sendMessage()}
                                className={`p-2 rounded-lg text-white transition-colors cursor-pointer ${
                                    darkMode
                                        ? "bg-[var(--color-primary-dark)] hover:bg-blue-900"
                                        : "bg-[var(--color-primary)] hover:bg-blue-700"
                                }`}
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!isOpen && showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-16 right-0 flex flex-col items-end gap-2 w-64"
                    >
                        {SUGGESTED_QUESTIONS.map((question) => (
                            <button
                                key={question}
                                type="button"
                                onClick={() => askQuick(question)}
                                className={`text-xs px-3 py-1.5 rounded-full border shadow-sm transition-colors cursor-pointer ${
                                    darkMode
                                        ? "bg-gray-800 border-[var(--color-primary)] text-blue-300 hover:bg-gray-700"
                                        : "bg-white border-[var(--color-primary)] text-blue-700 hover:bg-blue-50"
                                }`}
                            >
                                {question}
                            </button>
                        ))}

                        <div
                            onClick={openChat}
                            className={`flex items-center gap-2 w-full rounded-2xl rounded-br-md shadow-xl p-3 text-sm cursor-pointer border ${
                                darkMode
                                    ? "bg-gray-800 text-gray-100 border-gray-700"
                                    : "bg-white text-gray-800 border-gray-200"
                            }`}
                        >
                            <span className="flex-1">Have a question about Suman?</span>
                            <button
                                type="button"
                                aria-label="Dismiss"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowTooltip(false);
                                }}
                                className={`shrink-0 rounded-md p-0.5 transition-colors cursor-pointer ${
                                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                                }`}
                            >
                                <X size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isOpen && (
                <button
                    type="button"
                    aria-label="Open chat"
                    onClick={openChat}
                    className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white transition-all duration-300 cursor-pointer ${
                        darkMode
                            ? "bg-[var(--color-primary-dark)] hover:bg-blue-900"
                            : "bg-[var(--color-primary)] hover:bg-blue-700"
                    }`}
                >
                    <MessageCircle size={24} />
                </button>
            )}
        </div>
    );
};

export default ChatbotWidget;
