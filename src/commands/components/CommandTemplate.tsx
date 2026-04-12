import { useState } from 'react';
import { Copy } from 'lucide-react';
import { CommandTemplateProps } from '../../../interface/commandInterface'
import LazySection from '../../global/LazySection';

const CommandTemplate = ({ section, secIdx }: CommandTemplateProps) => {
    const [copiedCommand, setCopiedCommand] = useState<string>("");
    const copyToClipboard = (command: string) => {
        navigator.clipboard.writeText(command).then(() => {
            setCopiedCommand(command);
            setTimeout(() => setCopiedCommand(""), 2000);
        });
    };
    return (
        <div key={secIdx} className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
            <div className="space-y-4">
                {section.commands.map((cmd, index) => (
                    <LazySection>
                        <div
                            key={index} style={{ animation: "fadeInDown 0.6s ease-out" }}
                            className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <div className='flex items-start justify-between gap-2 overflow-hidden'>
                                <div className="flex-1 overflow-x-auto scrollbar-thin">
                                    <code className="text-xs md:text-sm font-mono text-blue-700 block mb-1 whitespace-nowrap">
                                        {cmd.command}
                                    </code>
                                </div>
                                <button
                                    onClick={() => copyToClipboard(cmd.command)}
                                    className="text-gray-500 hover:text-blue-600 transition-colors flex-shrink-0"
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
                                <div className='flex flex-col mt-2'>
                                    <p className="text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-wider">Alternate Command</p>
                                    <div className='flex items-start justify-between gap-2 overflow-hidden'>
                                        <div className="flex-1 overflow-x-auto scrollbar-thin">
                                            <code className="text-xs md:text-sm font-mono text-blue-700 block mb-1 whitespace-nowrap">
                                                {cmd.alternateCommand}
                                            </code>
                                        </div>
                                        <button
                                            onClick={() => copyToClipboard(cmd.alternateCommand || "")}
                                            className="text-gray-500 hover:text-blue-600 transition-colors flex-shrink-0"
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
                            <p className="text-xs text-gray-600">
                                {cmd.description}
                            </p>
                            {cmd.note && (
                                <p className="text-xs text-orange-600 italic">
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