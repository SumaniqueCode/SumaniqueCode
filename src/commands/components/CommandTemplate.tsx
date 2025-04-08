import { useState } from 'react';
import { Copy } from 'lucide-react';
import { CommandTemplateProps } from '../../../interface/commandInterface'

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
                    <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <div>
                            <code className="text-sm font-mono text-blue-700 block mb-1">
                                {cmd.command}
                            </code>
                            <p className="text-xs text-gray-600">
                                {cmd.description}
                            </p>
                            {cmd.note && (
                                <p className="text-xs text-orange-600 italic">
                                    Note: {cmd.note}
                                </p>
                            )}
                        </div>
                        <button
                            onClick={() => copyToClipboard(cmd.command)}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            title="Copy command"
                        >
                            {copiedCommand === cmd.command ? (
                                <span className="text-xs text-green-600">Copied!</span>
                            ) : (
                                <Copy size={20} />
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>)
}

export default CommandTemplate