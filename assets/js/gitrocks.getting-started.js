var gitRocks = {
    currentTutorial: "gettingStarted",
    currentStep: 0,
    nbSteps: 10,
    gettingStarted: {
        step0: {
            intro: 'Let\'s configure your Git. First setup your name.',
            command: 'git config --global user.name "Vincent L"',
            output: [
            ],
            success: 'You just setup your name.'
        },
        step1: {
            intro: 'Now let\'s setup your email.',
            command: 'git config --global user.email "vincent@git.rocks"',
            output: [
            ],
            success: 'Your email is now setup in Git.'
        },
        step2: {
            intro: 'Let\'s create your first repository.',
            command: 'git init',
            output: [
                'Initialized empty Git repository in ~/git-rocks-demo/.git/'
            ],
            success: 'You just created your first repository.'
        },
        step3: {
            intro: 'Now let\'s add a file.',
            command: 'touch README.md',
            output: [],
            success: 'You created a README.md file.'
        },
        step4: {
            intro: 'Check the current status of your repository.',
            command: 'git status',
            output: [
                'On branch master',
                '',
                'Initial commit',
                '',
                'Untracked files:',
                '  (use "git add <file>..." to include in what will be committed)',
                '',
                '    README.md',
                '',
                'nothing added to commit but untracked files present (use "git add" to track)'
            ],
            success: 'We see that README.md is new and not part of your repository.'
        },
        step5: {
            intro: 'It\'s now time to add that file to be committed.',
            command: 'git add README.md',
            output: [],
            success: 'You just added README.md to be committed.'
        },
        step6: {
            intro: 'Check the status of your repository again.',
            command: 'git status',
            output: [
                'On branch master',
                '',
                'Initial commit',
                '',
                'Changes to be committed:',
                '  (use "git rm --cached <file>..." to unstage)',
                '',
                '    new file:   README.md'
            ],
            success: 'README.md is now ready to be committed.'
        },
        step7: {
            intro: 'Let\'s do an initial commit.',
            command: 'git commit -m "first commit"',
            output: [
                '[master (root-commit) e8c0456] first commit',
                ' 1 file changed, 0 insertions(+), 0 deletions(-)',
                ' create mode 100644 README.md'
            ],
            success: 'You just made your first commit.'
        },
        step8: {
            intro: 'Before we can push to your remote repository, you need to add a new origin.',
            command: 'git remote add origin git@github.com:vlamanna/git-rocks-demo.git',
            output: [
            ],
            success: 'You are now ready to push your commit.'
        },
        step9: {
            intro: 'Push your commit to your remote repository.',
            command: 'git push origin master',
            output: [
                'Counting objects: 3, done.',
                'Writing objects: 100% (3/3), 215 bytes | 0 bytes/s, done.',
                'Total 3 (delta 0), reused 0 (delta 0)',
                'To git@github.com:vlamanna/git-rocks-demo.git',
                ' * [new branch]      master -> master'
            ],
            success: 'You just made your first push.'
        }
    }
};