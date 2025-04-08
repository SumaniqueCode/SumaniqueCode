import CommandTemplate from '../CommandTemplate';

const Github = () => {

    const sections = [
        {
            title: "Setting up GitHub for the first time on PC",
            commands: [
                {
                    command: 'git config --global user.email "youremail@email.com"',
                    description: "Set your GitHub email globally"
                },
                {
                    command: 'git config --global user.name "yourusername"',
                    description: "Set your GitHub username globally"
                },
                {
                    command: 'git config --global user.password "yourpassword"',
                    description: "Set your GitHub password globally"
                }
            ]
        },
        {
            title: "Initializing Git in a File",
            commands: [
                {
                    command: 'git init',
                    description: "Initialize a new Git repository"
                },
                {
                    command: 'git remote add origin https://github.com/username/repo-name',
                    description: "Connect to remote GitHub repository"
                },
                {
                    command: 'git branch -M main',
                    description: "Rename current branch to main"
                },
                {
                    command: 'git add filename',
                    description: "Add a specific file to staging"
                },
                {
                    command: 'git add *',
                    description: "Add all files to staging"
                },
                {
                    command: 'git commit -m "Your message"',
                    description: "Commit your changes with a message"
                },
                {
                    command: 'git push -u origin main',
                    description: "Push commits to GitHub"
                },
            ]
        },
        {
            title: "Pushing to GitHub Repository",
            commands: [
                {
                    command: 'git status',
                    description: "Check the status of your files"
                },
                {
                    command: 'git add filename',
                    description: "Add a specific file to staging"
                },
                {
                    command: 'git add *',
                    description: "Add all files to staging"
                },
                {
                    command: 'git commit -m "Commit message"',
                    description: "Set Commit message"
                },
                {
                    command: 'git push -u origin main',
                    description: "Push commits to GitHub"
                },
            ]
        },
        {
            title: "Working with Branches in Git",
            commands: [
                {
                    command: 'git checkout -b branch-name',
                    description: "Create and switch to a new branch"
                },
                {
                    command: 'git checkout main',
                    description: "Switch back to main branch"
                },
                {
                    command: 'git branch -d branch-name',
                    description: "Delete a branch"
                },
                {
                    command: 'git push origin branch-name',
                    description: "Push a new branch to GitHub"
                },
                {
                    command: 'git merge branch-name',
                    description: "Merge branch into current branch"
                },
                {
                    command: 'git pull',
                    description: "Pull latest changes"
                },
                {
                    command: 'git pull origin branch-name',
                    description: "Pull latest changes from a specific branch"
                },
                {
                    command: 'git tag version-name commit-sha',
                    description: "Tag a specific commit version"
                }
            ]
        }, {
            title: "Other Git Commands",
            commands: [
                {
                    command: 'git log',
                    description: "View commit history"
                },
                {
                    command: 'q / z',
                    description: "Exit from git log view"
                },
                {
                    command: 'git commit --amend',
                    description: "Amend the previous commit"
                },
                {
                    command: 'git reset --hard sha-code-from-github',
                    description: "Revert to a specific commit version"
                },
                {
                    command: 'git clone username@host:/path/to/repository',
                    description: "Clone a remote GitHub repository"
                },
            ]
        }
    ];

    return (
        <div id='github' className="p-6 mx-auto rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">GitHub Commands Reference</h2>
            {sections.map((section, secIdx) => (
                <CommandTemplate secIdx={secIdx} section={section} />
            ))}
        </div>
    );
};

export default Github;
