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
    <div id='laravel' className="p-6 mx-auto rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Laravel Commands Reference</h2>
      {sections.map((section, secIdx) => (
        <CommandTemplate secIdx={secIdx} section={section} />
      ))}
    </div>
  );
};

export default Laravel;