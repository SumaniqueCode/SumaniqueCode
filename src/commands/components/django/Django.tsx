import CommandTemplate from '../CommandTemplate';

const Django = () => {
  const sections = [
    {
      title: "Setting up Django for the first time on PC",
      commands: [
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
      ]
    },
    {
      title: "Setting up Django Project",
      commands: [
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
          description: 'Creating the virtual environment in project',
          note: 'Use alternate command if virtualenv is not found'

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
      ]
    },
    {
      title: "Important Django Commands",
      commands: [
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
        }]
    }
  ];
  return (
    <div id='django' className="p-6 mx-auto rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 ">Python & Django Commands Reference</h2>
      {sections.map((section, secIdx) => (
        <CommandTemplate secIdx={secIdx} section={section} />
      ))}
    </div>
  );
};

export default Django;