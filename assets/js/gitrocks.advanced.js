var gitRocks = {
    currentTutorial: "advanced",
    currentStep: 0,
    nbSteps: 12,
    advanced: {
        step0: {
            intro: 'Now that we\'ve covered the basics, let\'s look at some more advanced commands. Let\'s create a new file.',
            command: 'touch advanced.md',
            output: [
            ],
            success: 'You just created a new file.'
        },
        step1: {
            intro: 'Let\'s add that file to the files to be committed.',
            command: 'git add advanced.md',
            output: [
            ],
            success: 'You added a file to be committed.'
        },
        step2: {
            intro: 'Before we commit our changes, let\'s pull the latest from the remote repository but before we do that we will stash our current work.',
            command: 'git stash',
            output: [
                'Saved working directory and index state WIP on master: 7d7ea02 Adding a new file',
                'HEAD is now at 7d7ea02 Adding a new file'
            ],
            success: 'You stashed your work.'
        },
        step3: {
            intro: 'Now let\'s pull the latest changes.',
            command: 'git pull --rebase origin master',
            output: [
                'From github.com:vlamanna/git-rocks-demo',
                ' * branch            master     -> FETCH_HEAD',
                'First, rewinding head to replay your work on top of it...',
                'Fast-forwarded master to ce2a60986683207ee1f8f3c189091de3a81be8b3.'
            ],
            success: 'You now have the latest changes.'
        },
        step4: {
            intro: 'Let\'s recover our work from the stash.',
            command: 'git stash pop',
            output: [
                'On branch master',
                'Your branch is up-to-date with \'origin/master\'.',
                'Changes to be committed:',
                '  (use "git reset HEAD <file>..." to unstage)',
                '',
                '    new file:   advanced.md',
                '',
                'Dropped refs/stash@{0} (12ec1d4f79a77bdcd79132a443bb62718f2e1b36)'
            ],
            success: 'You recovered your work.'
        },
        step5: {
            intro: 'Now let\'s take a look at our folder.',
            command: 'ls -l',
            output: [
                'total 24',
                '-rw-r--r--  1 vincentlamanna  staff   0 29 Jul 23:03 README.md',
                '-rw-r--r--  1 vincentlamanna  staff   0  1 Aug 13:32 advanced.md',
                '-rw-r--r--  1 vincentlamanna  staff   1 29 Jul 23:34 another.md',
                '-rw-r--r--  1 vincentlamanna  staff  17 29 Jul 23:23 demo.md',
                '-rw-r--r--  1 vincentlamanna  staff   1  1 Aug 13:31 more-advanced.md',
                '-rw-r--r--  1 vincentlamanna  staff   0 29 Jul 23:34 new.md'
            ],
            success: 'Looks like the file "more-advanced.md" is better than our file "advanced.md".'
        },
        step6: {
            intro: 'Let\'s unstage our changes.',
            command: 'git reset HEAD .',
            output: [
            ],
            success: 'You now have unstaged your new file.'
        },
        step7: {
            intro: 'Let\'s look at the status to make sure.',
            command: 'git status',
            output: [
                'On branch master',
                'Your branch is up-to-date with \'origin/master\'.',
                'Untracked files:',
                '  (use "git add <file>..." to include in what will be committed)',
                '',
                '    advanced.md',
                '',
                'nothing added to commit but untracked files present (use "git add" to track)'
            ],
            success: 'Our file is now untracked.'
        },
        step8: {
            intro: 'Let\'s remove it from our folder.',
            command: 'rm advanced.md',
            output: [
            ],
            success: 'You have removed the file.',
        },
        step9: {
            intro: 'Let\'s also remove "more-advanced.md" from the remote repository.',
            command: 'git rm more-advanced.md',
            output: [
                'rm \'more-advanced.md\''
            ],
            success: 'You have removed the file.'
        },
        step10: {
            intro: 'Now let\'s commit this change.',
            command: 'git commit -m "Removing a file."',
            output: [
                '[master e07e8cb] Removing a file.',
                ' 1 file changed, 1 deletion(-)',
                ' delete mode 100644 more-advanced.md'
            ],
            success: 'You have commited your changes.'
        },
        step11: {
            intro: 'Let\'s push this commit to the remote repository',
            command: 'git push origin master',
            output: [
                'Counting objects: 2, done.',
                'Delta compression using up to 4 threads.',
                'Compressing objects: 100% (2/2), done.',
                'Writing objects: 100% (2/2), 231 bytes | 0 bytes/s, done.',
                'Total 2 (delta 1), reused 0 (delta 0)',
                'To git@github.com:vlamanna/git-rocks-demo.git',
                '   ce2a609..e07e8cb  master -> master'
            ],
            success: 'You have pushed your changes.'
        }
    }
};