import CommandTemplate from '../CommandTemplate';

const ReactJS = () => {
    const sections = [
        {
            title: "Creating a New React Project",
            commands: [
                {
                    command: 'npm create vite@latest projectName',
                    description: 'Creates a new React app using Vite, options will be given to select the package',
                    note: 'Add -- --template template_name to install template directly'
                },
                {
                    command: 'cd projectName',
                    description: 'Move into the project directory'
                },
                {
                    command: 'npm install',
                    description: 'Installs all dependencies listed in package.json'
                },
                {
                    command: 'npm run dev',
                    description: 'Starts development server for Vite projects'
                },
            ]
        },
        {
            title: "Installing Core Libraries",
            commands: [
                {
                    command: 'npm i react@latest react-dom@latest',
                    description: 'Installs the latest version of React and ReactDOM'
                },
                {
                    command: 'npm i react-router-dom',
                    description: 'Installs React Router for SPA routing'
                },
                {
                    command: 'npm i axios',
                    description: 'Installs Axios for HTTP API requests'
                },
                {
                    command: 'npm i react-redux @reduxjs/toolkit',
                    description: 'Installs React-Redux bindings along with Redux Toolkit',
                    note: 'Redux Toolkit is the official, recommended way to write Redux logic'
                },
                {
                    command: 'npm install @mui/material @emotion/react @emotion/styled',
                    description: 'Installs Material UI and its required styling packages'
                },
                {
                    command: 'npm i bootstrap',
                    description: 'Installs Bootstrap for UI components'
                },
                {
                    command: 'npm i react-icons',
                    description: 'Installs popular icon packs for React'
                },
            ]
        },
        {
            title: "Installing Tailwind CSS (Vite)",
            commands: [
                {
                    command: 'npm install -D tailwindcss postcss autoprefixer',
                    description: 'Installs Tailwind CSS and required PostCSS plugins'
                },
                {
                    command: 'npx tailwindcss init -p',
                    description: 'Generates Tailwind and PostCSS config files',
                    note: 'Creates tailwind.config.js and postcss.config.js automatically for Vite'
                },
                {
                    command: 'Configure tailwind.config.js',
                    description: 'Add "./index.html", "./src/**/*.{js,ts,jsx,tsx}" to content array'
                },
                {
                    command: 'Add Tailwind directives in src/index.css',
                    description: 'Include @tailwind base, components, and utilities'
                },
                {
                    command: 'npm install -D @tailwindcss/forms @tailwindcss/typography',
                    description: 'Installs official Tailwind plugins for forms and typography'
                },
            ]
        },
        {
            title: "Vite-Specific Clean-Up",
            commands: [
                {
                    command: 'Delete unnecessary files in src/',
                    description: 'Remove boilerplate like vite.svg, App.css, etc. for a clean start'
                },
                {
                    command: 'Update App.jsx and main.jsx',
                    description: 'Replace sample content with your own component setup'
                },
            ]
        },
        {
            title: "Other Useful Tools",
            commands: [
                {
                    command: 'npm install -D eslint prettier',
                    description: 'Installs ESLint and Prettier for code formatting and linting'
                },
                {
                    command: 'npm i zustand',
                    description: 'Installs lightweight state management tool'
                },
                {
                    command: 'npm i framer-motion',
                    description: 'Installs animation library for React'
                },
                {
                    command: 'npm i classnames',
                    description: 'Installs helper for dynamic className management'
                },
            ]
        },
        {
            title: "Additional & Optional Packages",
            commands: [
                {
                    command: 'npm i react-loading-skeleton',
                    description: 'Installs Skeleton Loader for content placeholders'
                },
                {
                    command: 'npm i leaflet react-leaflet',
                    description: 'Installs Leaflet and React wrapper for interactive maps',
                    note: 'Also include Leaflet CSS in your app manually'
                },
                {
                    command: 'npm i dayjs',
                    description: 'Installs lightweight date library (alternative to Moment.js)'
                },
                {
                    command: 'npm i react-hot-toast',
                    description: 'Installs toast notifications for feedback messages'
                },
                {
                    command: 'npm i react-select',
                    description: 'Installs customizable dropdown component'
                },
                {
                    command: 'npm i react-hook-form',
                    description: 'Installs library for form handling and validation'
                },
            ]
        }
    ];

    return (
        <div id='reactJS' className="p-6 mx-auto rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">React + Vite Commands Reference</h2>
            {sections.map((section, secIdx) => (
                <CommandTemplate secIdx={secIdx} section={section} />
            ))}
        </div>
    );
};

export default ReactJS;
