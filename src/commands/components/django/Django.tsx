import { useState } from 'react';
import { Copy } from 'lucide-react';

const Django = () => {
  const [copiedCommand, setCopiedCommand] = useState<string>("");

  const commands = [
    {
      command: 'Install python',
      description: 'Download and install Python from official website',
      note: 'Check python.org or use package manager'
    },
    {
      command: 'Install pip',
      description: 'Pip comes bundled with Python 3.4+',
      note: 'Use "python -m ensurepip --upgrade" if needed'
    },
    {
      command: 'pip install virtualenv',
      description: 'Installing virtual environment globally'
    },
    {
      command: 'mkdir myproject',
      description: 'Creating project directory'
    },
    {
      command: 'cd myproject',
      description: 'Changing path to project folder'
    },
    {
      command: 'virtualenv env',
      alternateCommand: 'python -m virtualenv env',
      description: 'Creating the virtual environment in project'
    },
    {
      command: 'cd env/Scripts/activate',
      description: 'Activating virtual environment (Windows)',
      alternateCommand: 'source env/bin/activate',
      note: 'Use alternate command for macOS/Linux'
    },
    {
      command: 'pip install django',
      description: 'Installing Django in project'
    },
    {
      command: 'django-admin startproject <project_name>',
      description: 'Creating a new Django project'
    },
    {
      command: 'cd <project_name>',
      description: 'Change to project directory'
    },
    {
      command: 'python manage.py runserver',
      description: 'Running Django development server'
    },
    {
      command: 'python manage.py startapp <new_app_name>',
      description: 'Creating a new app in Django project'
    },
    {
      command: 'python manage.py makemigrations',
      description: 'Preparing database migrations'
    },
    {
      command: 'python manage.py migrate',
      description: 'Applying database migrations'
    },
    {
      command: 'python manage.py createsuperuser',
      description: 'Creating an admin user'
    },
    {
      command: 'python -m pip install Pillow',
      description: 'Install Pillow for image field support in models'
    },
    {
      command: 'pip install djangorestframework',
      description: 'Installing Django REST Framework'
    }
  ];

  const copyToClipboard = (command:string) => {
    navigator.clipboard.writeText(command).then(() => {
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(""), 2000);
    });
  };

  return (
    <div id='django' className="p-6 mx-auto rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 ">Python & Django Commands Reference</h2>
      <div className="space-y-4">
        {commands.map((cmd, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <div className="flex-grow pr-4">
              <code className="text-sm font-mono text-blue-700 block mb-1">
                {cmd.command}
              </code>
              {cmd.alternateCommand && (
                <code className="text-sm font-mono text-gray-500 block mb-1">
                  Alt: {cmd.alternateCommand}
                </code>
              )}
              <p className="text-xs text-gray-600 mb-1">
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
    </div>
  );
};

export default Django;