import { useState } from 'react';
import { Copy } from 'lucide-react';

const Laravel = () => {
  const [copiedCommand, setCopiedCommand] = useState<string>("");

  const commands = [
    {
      command: 'composer create-project laravel/laravel project_name',
      description: 'Creating a new Laravel project'
    },
    {
      command: 'php artisan serve',
      description: 'Running project on localhost'
    },
    {
      command: 'php artisan migrate',
      description: 'Migrate default tables in database'
    },
    {
      command: 'php artisan make:model model_name -mcr',
      description: 'Create models with MVC (Model, View, Controller)'
    },
    {
      command: 'php artisan optimize',
      description: 'Remove cached bootstrap files'
    },
    {
      command: 'php artisan migrate:fresh',
      description: 'Migrate created tables in database'
    },
    {
      command: 'composer require laravel/ui',
      description: 'Install Laravel UI package'
    },
    {
      command: 'php artisan ui bootstrap --auth',
      description: 'Set up Bootstrap with authentication'
    },
    {
      command: 'npm install',
      description: 'Install npm dependencies'
    },
    {
      command: 'npm run dev',
      description: 'Compile frontend assets'
    },
    {
      command: 'php artisan make:seeder UserSeeder',
      description: 'Create a new database seeder'
    },
    {
      command: 'php artisan migrate:fresh --seed',
      description: 'Refresh migrations and seed database'
    }
  ];

  const copyToClipboard = (command:string) => {
    navigator.clipboard.writeText(command).then(() => {
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(""), 2000);
    });
  };

  return (
    <div id='laravel' className="p-6 mx-auto rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Laravel Commands Reference</h2>
      <div className="space-y-4">
        {commands.map((cmd, index) => (
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
    </div>
  );
};

export default Laravel;