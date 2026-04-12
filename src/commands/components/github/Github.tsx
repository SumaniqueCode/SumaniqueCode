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
            title: "Getting a Repository",
            commands: [
                {
                    command: 'git clone <url>',
                    description: "Clone a remote GitHub repository to your local machine"
                },
                {
                    command: 'git init',
                    description: "Initialize a new local Git repository"
                },
                {
                    command: 'git remote add origin <url>',
                    description: "Connect your local repository to a remote server"
                },
            ]
        },
        {
            title: "Basic Git Workflow",
            commands: [
                {
                    command: 'git status',
                    description: "Check which files Git is tracking"
                },
                {
                    command: 'git add <filename>',
                    description: "Add a specific file to the staging area"
                },
                {
                    command: 'git add .',
                    description: "Add all new and changed files to staging"
                },
                {
                    command: 'git commit -m "Your message"',
                    description: "Record your staged changes with a descriptive message"
                },
                {
                    command: 'git push -u origin main',
                    description: "Upload local commits to the remote main branch"
                },
            ]
        },
        {
            title: "Remote & Syncing Commands",
            commands: [
                {
                    command: 'git remote -v',
                    description: "View remote URLs (fetch & push)"
                },
                {
                    command: 'git fetch',
                    description: "Get updates from remote but don't merge"
                },
                {
                    command: 'git pull origin branch-name',
                    description: "Update your local branch with remote changes"
                },
                {
                    command: 'git remote set-url origin New-URL',
                    description: "Change the URL of the remote origin"
                }
            ]
        },
        {
            title: "Working with Branches in Git",
            commands: [
                {
                    command: 'git branch',
                    description: "List all local branches"
                },
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
        },
        {
            title: "Stashing & Comparing",
            commands: [
                {
                    command: 'git stash',
                    description: "Temporarily save changed tracked files"
                },
                {
                    command: 'git stash pop',
                    description: "Apply and remove the last stashed changes"
                },
                {
                    command: 'git diff',
                    description: "Show changes between commits, commit and working tree"
                },
                {
                    command: 'git diff --staged',
                    description: "Show differences between staged files and last commit"
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
                    command: 'git reset --hard <sha>',
                    description: "Revert to a specific commit version using its SHA code"
                },
            ]
        }
    ];

    return (
        <div id='github' className="p-4 md:p-6 mx-auto rounded-xl shadow-md w-full">
            <h2 className="text-2xl font-bold mb-6">GitHub Commands Reference</h2>
            {sections.map((section, secIdx) => (
                <CommandTemplate secIdx={secIdx} section={section} />
            ))}
        </div>
    );
};

export default Github;
