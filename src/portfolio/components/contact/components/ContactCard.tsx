import { CheckCircle, Copy } from "lucide-react";
import { useState } from "react";

interface ContactProps {
  darkMode: boolean;
  info: {
    type: string;
    value: string;
    icon: React.ReactNode;
    link?: string;
    color: string;
    bgColor: string;
    hoverColor: string;
  }
}

const ContactCard = ({ darkMode, info }: ContactProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [hoverCard, setHoverCard] = useState<string | null>(null);

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
      key={info.type}
      className={`rounded-lg shadow-md overflow-hidden transition-all duration-1000 ${
        hoverCard === info.type ? 'shadow-lg transform translate-y-px' : ''
      } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
      onMouseEnter={() => setHoverCard(info.type)}
      onMouseLeave={() => setHoverCard(null)}
    >
      <div className={`p-4 transition-colors duration-800 ${
        darkMode 
          ? (hoverCard === info.type ? 'bg-gray-700' : 'bg-gray-800')
          : (hoverCard === info.type ? info.hoverColor : info.bgColor)
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`p-3 rounded-full mr-2 ${
              darkMode 
                ? 'bg-gray-700 text-gray-300' 
                : `${info.color} bg-white shadow-sm`
            }`}>
              {info.icon}
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${
                darkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>{info.type}</h3>
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode 
                    ? 'text-blue-300 hover:text-blue-200' 
                    : `${info.color} hover:underline`
                }`}
              >
                {info.value}
              </a>
            </div>
          </div>

          <button
            onClick={() => copyToClipboard(info.value, info.type)}
            className={`p-1 rounded-full transition-colors duration-600 ${
              copiedField === info.type
                ? 'bg-green-100 text-green-600'
                : `${
                    darkMode
                      ? 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`
            }`}
            aria-label={`Copy ${info.type}`}
          >
            {copiedField === info.type ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactCard