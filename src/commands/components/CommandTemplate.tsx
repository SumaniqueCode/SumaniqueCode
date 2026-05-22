import { useState } from 'react';
import { Copy } from 'lucide-react';
import { CommandTemplateProps } from '../../../interface/commandInterface'
import LazySection from '../../global/LazySection';
import { useThemeContext } from '../../ThemeContext';
import ShimmerGradientOverlay from '../../global/ui/ShimmerGradientOverlay';

const CommandTemplate = ({ section, secIdx }: CommandTemplateProps) => {
    const [copiedCommand, setCopiedCommand] = useState<string>("");
    const { darkMode } = useThemeContext();

    const copyToClipboard = (command: string) => {
        navigator.clipboard.writeText(command).then(() => {
            setCopiedCommand(command);
            setTimeout(() => setCopiedCommand(""), 2000);
        });
    };

    return (
        <div key={secIdx} className="mb-8">
            <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{section.title}</h3>
            <div className="space-y-4">
                {section.commands.map((cmd, index) => (
                    <LazySection key={index}>
                        <div
                            style={{ animation: "fadeInDown 0.6s ease-out" }}
                            className={`group relative p-3 rounded-lg transition-colors ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100 border border-gray-200'} hover:shadow-xl`}
                        >
                            <ShimmerGradientOverlay />

                            <div className='relative flex items-start justify-between gap-2 overflow-hidden'>
                                <div className="flex-1 overflow-x-auto scrollbar-thin">
                                    <code className="text-xs md:text-sm font-mono text-blue-700 dark:text-blue-300 block mb-1 whitespace-nowrap">
                                        {cmd.command}
                                    </code>
                                </div>
                                <button
                                    onClick={() => copyToClipboard(cmd.command)}
                                    className={`text-gray-500 hover:text-blue-600 dark:hover:text-blue-300 transition-colors flex-shrink-0 ${darkMode ? 'dark:text-gray-400' : ''}`}
                                    title="Copy command"
                                >
                                    {copiedCommand === cmd.command ? (
                                        <span className="text-xs text-green-600">Copied!</span>
                                    ) : (
                                        <Copy size={16} className="md:w-5 md:h-5" />
                                    )}
                                </button>
                            </div>

                            {cmd.alternateCommand && (
                                <div className='relative flex flex-col mt-2'>
                                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider">Alternate Command</p>
                                    <div className='flex items-start justify-between gap-2 overflow-hidden'>
                                        <div className="flex-1 overflow-x-auto scrollbar-thin">
                                            <code className="text-xs md:text-sm font-mono text-blue-700 dark:text-blue-300 block mb-1 whitespace-nowrap">
                                                {cmd.alternateCommand}
                                            </code>
                                        </div>
                                        <button
                                            onClick={() => copyToClipboard(cmd.alternateCommand || "")}
                                            className={`text-gray-500 hover:text-blue-600 dark:hover:text-blue-300 transition-colors flex-shrink-0 ${darkMode ? 'dark:text-gray-400' : ''}`}
                                            title="Copy alternate command"
                                        >
                                            {copiedCommand === cmd.alternateCommand ? (
                                                <span className="text-xs text-green-600">Copied!</span>
                                            ) : (
                                                <Copy size={16} className="md:w-5 md:h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}

                            <p className={`relative text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {cmd.description}
                            </p>

                            {cmd.note && (
                                <p className="relative text-xs text-orange-600 dark:text-orange-300 italic">
                                    Note: {cmd.note}
                                </p>
                            )}
                        </div>
                    </LazySection>

                ))}
            </div>
        </div>
    )
}

export default CommandTemplate
