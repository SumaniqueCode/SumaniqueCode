import CommandTemplate from '../CommandTemplate';

const Laravel = () => {
  const sections = [
    {
      title: "Setting up Laravel for the first time on PC",
      commands: [
        {
          command: 'Install Composer',
          description: 'Download and install Composer from official website',
          note: 'Check getcomposer.org'
        },
        {
          command: 'Install Xampp',
          description: 'Xampp is used to store data in local server using MySQL',
          note:'check apachefriends.org'
        },
      ]
    },
    {
      title: "Important Laravel Commands",
      commands: [
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
          command: 'php artisan make:seeder UserSeeder',
          description: 'Create a new database seeder'
        },
        {
          command: 'php artisan migrate:fresh --seed',
          description: 'Refresh migrations and seed database'
        },
        {
          command: 'php artisan migrate:rollback',
          description: 'Rollback the last database migration'
        },
        {
          command: 'php artisan tinker',
          description: 'REPL for interacting with your application',
          note: 'Powerfull shell for testing models and relations'
        },
        {
          command: 'php artisan make:controller <Name> --resource',
          description: 'Create a controller with boilerplate for CRUD'
        },
        {
          command: 'php artisan key:generate',
          description: 'Generate and set the APP_KEY in .env'
        },
      ]
    },
    {
      title: "Models & Middlewares",
      commands: [
        {
          command: 'php artisan make:model <Name> -m',
          description: 'Create a model with its migration file',
        },
        {
          command: 'php artisan make:middleware <Name>',
          description: 'Create a new middleware class',
        },
        {
          command: 'php artisan make:request <Name>',
          description: 'Create a custom Form Request class for validation',
        },
        {
          command: 'php artisan make:mail <Name>',
          description: 'Create a new Mailable class'
        }
      ]
    },
    {
      title: "Installing Auth template",
        commands: [
        {
          command: 'composer require laravel/ui',
          description: 'Install Laravel UI package'
        },
        {
          command: 'php artisan ui bootstrap --auth',
          description: 'Set up Bootstrap with authentication',
          note: "Uses Bootstrap for CSS"
        },
        {
          command: 'npm install',
          description: 'Install npm dependencies'
        },
        {
          command: 'npm run dev',
          description: 'Compile frontend assets'
        },
      ],
    }
  ];

    return (
    <div id='laravel' className="p-4 md:p-6 mx-auto rounded-xl shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4">Laravel Commands Reference</h2>
      {sections.map((section, secIdx) => (
        <CommandTemplate secIdx={secIdx} section={section} />
      ))}
    </div>
  );
};

export default Laravel;