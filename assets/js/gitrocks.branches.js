var gitRocks = {
    currentTutorial: "branches",
    currentStep: 0,
    nbSteps: 12,
    branches: {
        step0: {
            intro: 'Now let\'s assume you are multiple people working in the same repository, an easy way to avoid conflicts is to use branches. Create your first branch.',
            command: 'git branch feature1',
            output: [
            ],
            success: 'You just created your first branch.'
        },
        step1: {
            intro: 'Let\'s checkout this new branch.',
            command: 'git checkout feature1',
            output: [
                'Switched to branch \'feature1\''
            ],
            success: 'You just switched to your new branch.'
        },
        step2: {
            intro: 'You should now push this branch to the remote repository.',
            command: 'git push origin feature1',
            output: [
                'Total 0 (delta 0), reused 0 (delta 0)',
                'To git@github.com:vlamanna/git-rocks-demo.git',
                ' * [new branch]      feature1 -> feature1'
            ],
            success: 'You pushed your new branch to the remote repository.'
        },
        step3: {
            intro: 'Let\'s sync the changes of the "master" branch to your new branch.',
            command: 'git pull --rebase origin master',
            output: [
                'remote: Counting objects: 2, done.',
                'remote: Compressing objects: 100% (2/2), done.',
                'remote: Total 2 (delta 1), reused 0 (delta 0), pack-reused 0',
                'Unpacking objects: 100% (2/2), done.',
                'From github.com:vlamanna/git-rocks-demo',
                ' * branch            master     -> FETCH_HEAD',
                '   e07e8cb..5442045  master     -> origin/master',
                'First, rewinding head to replay your work on top of it...',
                'Fast-forwarded feature1 to 544204564160f3841e226f8a1142565445caab17.'
            ],
            success: 'Your branch is now in sync with the "master" branch.'
        },
        step4: {
            intro: 'Let\'s now create a new file.',
            command: 'touch feature1.md',
            output: [
            ],
            success: 'You just created a new file.'
        },
        step5: {
            intro: 'Let\'s add this file to be committed.',
            command: 'git add feature1.md',
            output: [
            ],
            success: 'Your new file is now ready to be committed.'
        },
        step6: {
            intro: 'Let\'s commit this new file.',
            command: 'git commit -m "Adding a new feature."',
            output: [
                '[feature1 a34775a] Adding a new feature.',
                ' 1 file changed, 0 insertions(+), 0 deletions(-)',
                ' create mode 100644 feature1.md'
            ],
            success: 'You just committed your new file.'
        },
        step7: {
            intro: 'Let\'s push you latest changes.',
            command: 'git push origin feature1',
            output: [
                'Counting objects: 2, done.',
                'Delta compression using up to 4 threads.',
                'Compressing objects: 100% (2/2), done.',
                'Writing objects: 100% (2/2), 248 bytes | 0 bytes/s, done.',
                'Total 2 (delta 1), reused 0 (delta 0)',
                'To git@github.com:vlamanna/git-rocks-demo.git',
                '   e07e8cb..a34775a  feature1 -> feature1'
            ],
            success: 'You pushed your latest changes to your branch.'
        },
        step8: {
            intro: 'Let\'s merge this change into the "master" branch. First, let\'s checkout "master".',
            command: 'git checkout master',
            output: [
                'Switched to branch \'master\'',
                'Your branch is behind \'origin/master\' by 1 commit, and can be fast-forwarded.',
                '  (use "git pull" to update your local branch)'
            ],
            success: 'You switched to the "master" branch'
        },
        step9: {
            intro: 'Let\'s grab the latest changes from "master".',
            command: 'git pull --rebase origin master',
            output: [
                'From github.com:vlamanna/git-rocks-demo',
                ' * branch            master     -> FETCH_HEAD',
                'First, rewinding head to replay your work on top of it...',
                'Fast-forwarded master to 544204564160f3841e226f8a1142565445caab17.'
            ],
            success: 'You now have the latest changes from "master"'
        },
        step10: {
            intro: 'Let\'s merge your new branch into "master".',
            command: 'git merge feature1',
            output: [
                'Updating 5442045..a34775a',
                'Fast-forward',
                ' feature1.md | 0',
                ' 1 file changed, 0 insertions(+), 0 deletions(-)',
                ' create mode 100644 feature1.md'
            ],
            success: 'You have merge your new branch.'
        },
        step11: {
            intro: 'Let\'s push your merge to the remote repository.',
            command: 'git push origin master',
            output: [
                'Total 0 (delta 0), reused 0 (delta 0)',
                'To git@github.com:vlamanna/git-rocks-demo.git',
                '   5442045..a34775a  master -> master'
            ],
            success: 'Your merge is now pushed.'
        }
    }
};