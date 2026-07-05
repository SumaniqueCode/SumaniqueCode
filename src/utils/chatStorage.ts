export interface ChatMessage {
    id: string;
    role: "user" | "bot";
    text: string;
    timestamp: number;
}

const STORAGE_KEY = "sumanr_chatbot_history";
const EXPIRY_MS = 3 * 24 * 60 * 60 * 1000;
const MAX_MESSAGES = 50;

export const loadMessages = (): ChatMessage[] => {
    if (typeof window === "undefined") return [];

    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];

        const parsed = JSON.parse(raw) as ChatMessage[];
        if (!Array.isArray(parsed)) return [];

        const now = Date.now();
        const fresh = parsed.filter((msg) => now - msg.timestamp < EXPIRY_MS);

        if (fresh.length !== parsed.length) {
            saveMessages(fresh);
        }

        return fresh;
    } catch {
        return [];
    }
};

export const saveMessages = (messages: ChatMessage[]): void => {
    if (typeof window === "undefined") return;

    try {
        const trimmed = messages.slice(-MAX_MESSAGES);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    } catch {
        // localStorage unavailable (e.g. private browsing quota) - fail silently
    }
};

export const clearMessages = (): void => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(STORAGE_KEY);
};
