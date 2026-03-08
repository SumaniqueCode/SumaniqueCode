import { CheckCircle, Copy, ExternalLink, LucideIcon } from "lucide-react";
import { useState } from "react";

interface ContactProps {
  darkMode: boolean;
  info: {
    type: string;
    value: string;
    displayValue: string;
    icon: LucideIcon;
    link?: string;
    gradient: string;
    color: string;
  };
  index: number;
}

const ContactCard = ({ darkMode, info, index }: ContactProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const Icon = info.icon;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedField(type);
        setTimeout(() => setCopiedField(null), 2000);
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
        } backdrop-blur-sm border shadow-lg hover:shadow-2xl`}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Gradient Background on Hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${info.gradient}`}
      />

      {/* Animated Border Effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(45deg, transparent 30%, ${info.color}20 50%, transparent 70%)`,
            animation: 'shimmer 3s infinite',
          }}
        />
      </div>

      <div className="relative p-4">
        {/* Icon and Type */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${info.gradient} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {info.type}
              </h3>
              {/* Value/Link */}
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block mb-2 text-sm font-medium transition-all duration-300 group/link ${darkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
                  }`}
              >
                <span className="group-hover/link:underline">{info.displayValue}</span>
                <ExternalLink className="w-3 h-3 inline ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex flex-col">
            <button
              onClick={() => copyToClipboard(info.value, info.type)}
              className={`p-2 ml-auto rounded-lg transition-all duration-300 ${copiedField === info.type
                ? 'bg-green-500 text-white scale-110'
                : `${darkMode
                  ? 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`
                }`}
              aria-label={`Copy ${info.type}`}
              title="Copy to clipboard"
            >
              {copiedField === info.type ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>

            {copiedField &&
              <div className={`text-xs transition-all duration-300 mt-1.5 ${copiedField === info.type
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-2'
                }`}>
                <span className="text-green-500 font-medium flex items-center gap-1">
                  Copied to clipboard!
                </span>
              </div>
            }
          </div>
        </div>
      </div>

      {/* Side Accent */}
      <div className={`absolute left-0 top-0 w-1 h-full ${info.gradient} opacity-50`}></div>
    </div>
  );
};

export default ContactCard;