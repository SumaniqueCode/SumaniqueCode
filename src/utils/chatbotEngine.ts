import Fuse from "fuse.js";
import { projects } from "@/data/ProjectData";
import { experiences } from "@/data/ExperienceData";
import { skills } from "@/data/SkillsData";
import { contacts } from "@/data/ContactData";
import { aboutBio } from "@/data/AboutData";

const FALLBACK_QUESTION =
    "I'm not sure about that question. Try asking me about Suman's projects, skills, work experience, or how to get in touch.";

const FALLBACK_STATEMENT =
    "I don't have anything to add to that, but feel free to ask me about Suman's projects, skills, work experience, or how to get in touch.";

const HELP =
    "I can answer questions about Suman's projects, skills, work experience, background, the developer command-reference page, or how to contact him. What would you like to know?";

const COMMANDS_INFO =
    "There's a Commands page (/commands) with quick-reference cheat sheets for Git/GitHub, Laravel, Django, and React.js.";

const GREETING =
    "Hi! I'm Suman's portfolio assistant. Ask me about his projects, skills, work experience, or how to get in touch.";

const WELLBEING =
    "I'm just a script, so I don't really have good or bad days! I'm here to help you learn about Suman - his projects, skills, experience, or how to reach him.";

const BOT_NAME =
    "I don't have a name of my own - I'm just Suman's portfolio assistant. Suman's the person I can tell you about!";

const THANKS =
    "You're welcome! Let me know if you have any other questions about Suman.";

const BYE =
    "Thanks for stopping by! Feel free to reach out to Suman anytime.";

const COMPLIMENT =
    "That's kind of you to say! I'm just here to help you learn about Suman though.";

const SUMAN_COMPLIMENT =
    "That's really kind - I'll let Suman know! Want to hear more about his projects, skills, or how to reach him?";

const TEACHING_INFO =
    "Suman has also been teaching at Him Shikhar English School in Tarahara, Itahari-20, Sunsari, since 2024.";

const ABOUT = aboutBio.join("\n\n");

// The experience whose year range is still open-ended (e.g. "Feb 2026 - Now").
const CURRENT_EXPERIENCE = experiences.find((e) => /now|present/i.test(e.year));

const CURRENT_WORK = CURRENT_EXPERIENCE
    ? `Currently, Suman works full-time as a ${CURRENT_EXPERIENCE.title} at ${CURRENT_EXPERIENCE.company}, and part-time as a teacher at Him Shikhar English School in Tarahara, Itahari-20, Sunsari (since 2024).`
    : TEACHING_INFO;

const WORK_ARRANGEMENT = CURRENT_EXPERIENCE
    ? `Suman's current role at ${CURRENT_EXPERIENCE.company} is ${CURRENT_EXPERIENCE.type.toLowerCase()}. He's also open to remote and freelance opportunities.`
    : "Suman is open to remote and freelance opportunities.";

const BOT_IDENTITY =
    "I'm an automated assistant built into Suman's portfolio site - not Suman himself! I only know what's written here, but you can reach the real Suman directly through the contact options if you'd like to chat with him.";

export const SUGGESTED_QUESTIONS = [
    "What projects have you built?",
    "What are your skills?",
    "How can I contact you?",
];

const normalize = (input: string): string =>
    input.trim().toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ");

// Word-boundary safe: a raw `input.includes("hi")` would also match "his",
// "this", "which"; `input.includes("hey")` would match "they"; etc. Padding
// both sides with spaces means a keyword only matches whole words/phrases.
// This also means "java" only matches the standalone word "java", never the
// "java" inside "javascript" - so tech names below are safe as keywords.
const includesAny = (input: string, keywords: string[]) =>
    keywords.some((kw) => ` ${input} `.includes(` ${kw} `));

// Lets "do you know react" / "are you good at django" resolve to skills,
// reusing the same tech names shown on the site instead of hand-maintaining
// a separate list that would drift out of sync with SkillsData. Multi-word
// names (e.g. "React JS", "Git & GitHub") also contribute just their first
// word, since that's the brand name people actually say ("react", "git").
const SKILL_NAMES = Array.from(
    new Set(
        skills.flatMap((group) =>
            group.techs.flatMap((t) => {
                const full = normalize(t.name);
                return [full, full.split(" ")[0]];
            }),
        ),
    ),
).filter((name) => name.length >= 2);

const QUESTION_STARTERS = new Set([
    "what", "how", "who", "where", "when", "why", "which",
    "do", "does", "did", "can", "could", "would", "should",
    "is", "are", "will", "am", "have", "has",
]);

// A "?" is the clearest signal (checked on the raw, pre-normalize input since
// normalize() strips punctuation). Otherwise fall back to whether the
// message starts with a question word/auxiliary verb - covers questions
// typed without a "?", while plain statements ("nice website", "nothing
// much") get a different, non-question-shaped fallback reply.
const looksLikeQuestion = (rawInput: string, normalizedInput: string): boolean => {
    if (rawInput.includes("?")) return true;
    const firstWord = normalizedInput.split(" ")[0];
    return QUESTION_STARTERS.has(firstWord);
};

// Generic connector words are excluded from the project/company name
// matching below - a bare "your" or "are you" scores a deceptively good
// fuzzy match against short strings in general, regardless of whether it
// actually resembles the name being searched for.
const STOPWORDS = new Set([
    "a", "an", "the", "is", "are", "am", "was", "were", "be", "been", "being",
    "i", "you", "he", "she", "it", "we", "they", "your", "my", "his", "her", "its", "our", "their", "yours", "me", "him", "us", "them",
    "do", "does", "did", "doing", "done",
    "what", "when", "where", "why", "how", "which",
    "can", "could", "would", "should", "shall", "will", "may", "might", "must",
    "to", "of", "in", "on", "at", "for", "with", "and", "or", "but", "so", "as",
    "this", "that", "these", "those", "there", "here",
]);

const hasContentWord = (gram: string): boolean =>
    gram.split(" ").some((word) => !STOPWORDS.has(word));

/**
 * Splits input into words plus 2-3 word windows so multi-word names
 * (e.g. "Skill Karma") can still be fuzzy-matched against a project/company
 * name. Fuse scores a search query poorly when it's much longer than the
 * text being searched, so matching a whole raw sentence against a short name
 * doesn't work - matching short, comparable-length windows against it does.
 * Tokens shorter than 5 chars are dropped - short common words are prone to
 * being a clean prefix of an unrelated name (e.g. "work" is a near-perfect
 * fuzzy match for "Workhub", "your" for nothing in particular but still
 * scores deceptively well against short strings in general). Windows made
 * entirely of stopwords (e.g. "how are", "are you") are dropped too - see
 * STOPWORDS above.
 */
const tokenize = (input: string): string[] => {
    const words = input.split(/\s+/).filter(Boolean);
    const grams: string[] = [...words];
    for (let n = 2; n <= 3; n++) {
        for (let i = 0; i + n <= words.length; i++) {
            grams.push(words.slice(i, i + n).join(" "));
        }
    }
    return grams.filter((token) => token.length >= 5 && hasContentWord(token));
};

const fuzzyFind = <T>(fuse: Fuse<T>, tokens: string[], threshold = 0.2): T | undefined => {
    let best: { item: T; score: number } | undefined;
    for (const token of tokens) {
        const [hit] = fuse.search(token);
        if (hit?.score !== undefined && hit.score <= threshold && (!best || hit.score < best.score)) {
            best = { item: hit.item, score: hit.score };
        }
    }
    return best?.item;
};

// Fuzzy matching here is deliberately reserved for typo-tolerance on
// proper-noun project/company names (e.g. "workhbu" -> Workhub). Intent
// classification (does this message mean "skills"? "contact"?) is handled
// with plain keyword matching further down - fuzzy-scoring short phrases
// against generic words caused more false-positive collisions than it fixed.
const projectFuse = new Fuse(projects, {
    keys: ["name"],
    includeScore: true,
    threshold: 0.2,
    ignoreLocation: true,
    minMatchCharLength: 5,
});

const experienceFuse = new Fuse(experiences, {
    keys: ["company"],
    includeScore: true,
    threshold: 0.2,
    ignoreLocation: true,
    minMatchCharLength: 5,
});

const findProjectMatch = (input: string) => fuzzyFind(projectFuse, tokenize(input));
const findExperienceMatch = (input: string) => fuzzyFind(experienceFuse, tokenize(input));

const describeProject = (project: (typeof projects)[number]): string => {
    const lines = [
        `${project.name}: ${project.description}`,
        `Tech stack: ${project.techs.join(", ")}`,
    ];
    if (project.livelink && project.livelink !== "#") {
        lines.push(`Live: ${project.livelink}`);
    }
    if (project.codelink && project.codelink !== "#") {
        lines.push(`Code: ${project.codelink}`);
    }
    return lines.join("\n");
};

const describeExperience = (experience: (typeof experiences)[number]): string => {
    return [
        `${experience.title} at ${experience.company} (${experience.year})`,
        experience.description,
        `Key work: ${experience.achievements.join("; ")}`,
    ].join("\n");
};

const listProjects = (): string => {
    const names = projects.map((p) => p.name).join(", ");
    return `Suman has built projects including: ${names}. Ask me about any one of them by name for more details.`;
};

const listSkills = (): string => {
    const summary = skills
        .map((group) => `${group.name}: ${group.techs.map((t) => t.name).join(", ")}`)
        .join("\n");
    return `Here's Suman's tech stack:\n${summary}`;
};

const listExperience = (): string => {
    const summary = experiences
        .map((e) => `${e.title} at ${e.company} (${e.year})`)
        .join("\n");
    return `Suman's work experience:\n${summary}\nAsk me about a specific company for more details.`;
};

const listContacts = (): string => {
    const summary = contacts
        .map((c) => `${c.type}: ${c.displayValue}`)
        .join("\n");
    return `Here's how you can reach Suman:\n${summary}`;
};

export const getBotResponse = (userInput: string): string => {
    const input = normalize(userInput);
    if (!input) return FALLBACK_STATEMENT;

    const project = findProjectMatch(input);
    if (project) return describeProject(project);

    const experience = findExperienceMatch(input);
    if (experience) return describeExperience(experience);

    // Plain word-boundary keyword matching, checked in an order that resolves
    // overlaps (e.g. "teaching career" must be checked before the generic
    // "career" keyword below would claim it as work experience).
    if (includesAny(input, [
        "are you a bot", "are you a real person", "are you human", "are you ai",
        "are you an ai", "are you real", "is this suman", "am i talking to suman",
        "are you suman",
    ])) {
        return BOT_IDENTITY;
    }

    if (includesAny(input, ["about suman", "who is suman", "about him", "who are you", "about yourself", "your background", "introduce yourself", "study", "studied", "education", "know suman", "are you a developer", "are you a programmer", "can you code", "do you code", "full stack", "fullstack"])) {
        return ABOUT;
    }

    if (includesAny(input, [
        "currently working", "where are you working", "current job", "current work",
        "what do you do now", "working currently", "currently doing", "work for",
    ])) {
        return CURRENT_WORK;
    }

    if (includesAny(input, ["work remotely", "work remote", "remote work", "work from home", "onsite or remote"])) {
        return WORK_ARRANGEMENT;
    }

    if (includesAny(input, ["teaching", "teacher", "teach at", "you teach", "where teach", "english school", "teaching experience", "teaching career"])) {
        return TEACHING_INFO;
    }

    if (includesAny(input, ["worked on", "have you built", "project", "projects", "portfolio", "built", "app", "apps", "favorite project", "best project", "proudest project", "demo", "live link", "live site", "see it live"])) {
        return listProjects();
    }

    if (includesAny(input, [
        "skill", "skills", "stack", "stacks", "tech stack", "technology", "technologies", "tool", "tools",
        "programming language", "programming languages", "good at", "familiar with",
        "favorite technology", "favorite language", "favorite tech",
        ...SKILL_NAMES,
    ])) {
        return listSkills();
    }

    if (includesAny(input, ["experience", "experienced", "have you worked", "worked", "job", "career", "work history", "how long"])) {
        return listExperience();
    }

    if (includesAny(input, ["contact", "email", "reach", "in touch", "hire", "linkedin", "github", "social media", "where are you based", "where are you located", "where are you from", "located", "based", "phone number", "resume", "cv", "freelance", "available for hire", "available for work", "open to opportunities", "looking for a job", "taking new clients", "for hire"])) {
        return listContacts();
    }

    if (includesAny(input, ["cheat sheet", "command", "commands", "reference sheet"])) {
        return COMMANDS_INFO;
    }

    if (includesAny(input, ["hi", "hello", "hey", "good morning", "good evening"])) {
        return GREETING;
    }

    if (includesAny(input, ["how are you", "hows it going", "how you doing"])) {
        return WELLBEING;
    }

    if (includesAny(input, ["what is your name", "whats your name", "do you have a name", "what should i call you"])) {
        return BOT_NAME;
    }

    if (includesAny(input, ["thank you", "thanks", "appreciate it"])) {
        return THANKS;
    }

    if (includesAny(input, ["goodbye", "bye", "see you", "see ya"])) {
        return BYE;
    }

    if (includesAny(input, ["i like you", "you are nice", "youre nice", "you are cool", "youre cool", "you are awesome", "youre awesome", "good bot"])) {
        return COMPLIMENT;
    }

    if (includesAny(input, ["like suman", "love suman", "suman is awesome", "suman is great", "suman is amazing", "suman is cool", "suman is the best", "suman rocks"])) {
        return SUMAN_COMPLIMENT;
    }

    if (includesAny(input, ["help", "what can you", "what can i ask"])) {
        return HELP;
    }

    return looksLikeQuestion(userInput, input) ? FALLBACK_QUESTION : FALLBACK_STATEMENT;
};
