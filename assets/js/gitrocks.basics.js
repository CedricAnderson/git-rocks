var gitRocks = {
    currentTutorial: "basics",
    currentStep: 0,
    nbSteps: 9,
    basics: {
        step0: {
            intro: 'Now that we\'ve covered setting up a new repository, let\'s look at how to contribute to an existing one.',
            command: 'git clone git@github.com:vlamanna/git-rocks-demo.git',
            output: [
                'Cloning into \'git-rocks-demo\'...',
                'remote: Counting objects: 3, done.',
                'remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0',
                'Receiving objects: 100% (3/3), done.',
                'Checking connectivity... done.'
            ],
            success: 'You just cloned the repository.'
        },
        step1: {
            intro: 'Go to the newly created folder.',
            command: 'cd git-rocks-demo',
            output: [],
            success: 'You are now in the folder of the repository.'
        },
        step2: {
            intro: 'Someone else made commited some changes to the repository, let\'s grab the latest changes.',
            command: 'git pull origin master',
            output: [
                'remote: Counting objects: 3, done.',
                'remote: Compressing objects: 100% (2/2), done.',
                'remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0',
                'Unpacking objects: 100% (3/3), done.',
                'From github.com:vlamanna/git-rocks-demo',
                ' * branch            master     -> FETCH_HEAD',
                '   e8c0456..0de38e3  master     -> origin/master',
                'Updating e8c0456..0de38e3',
                'Fast-forward',
                ' demo.md | 1 +',
                ' 1 file changed, 1 insertion(+)',
                ' create mode 100644 demo.md'
            ],
            success: 'You just pulled the latest changes.'
        },
        step3: {
            intro: 'Now let\'s add a new file.',
            command: 'touch new.md',
            output: [],
            success: 'You just created a new file.'
        },
        step4: {
            intro: 'Let\'s stage that new file for commit.',
            command: 'git add new.md',
            output: [],
            success: 'You just added a new file to be committed.'
        },
        step5: {
            intro: 'Let\'s commit that new file.',
            command: 'git commit -m "Adding a new file"',
            output: [
                '[master 77ccd8e] Adding a new file',
                ' 1 file changed, 0 insertions(+), 0 deletions(-)',
                ' create mode 100644 new.md'
            ],
            success: 'You just committed a new file.'
        },
        step6: {
            intro: 'Let\'s push that new file.',
            command: 'git push origin master',
            output: [
                'To git@github.com:vlamanna/git-rocks-demo.git',
                ' ! [rejected]        master -> master (fetch first)',
                'error: failed to push some refs to \'git@github.com:vlamanna/git-rocks-demo.git\'',
                'hint: Updates were rejected because the remote contains work that you do',
                'hint: not have locally. This is usually caused by another repository pushing',
                'hint: to the same ref. You may want to first integrate the remote changes',
                'hint: (e.g., \'git pull ...\') before pushing again.',
                'hint: See the \'Note about fast-forwards\' in \'git push --help\' for details.'
            ],
            success: 'Looks like someone pushed something in between.'
        },
        step7: {
            intro: 'Let\'s grab those latest changes.',
            command: 'git pull --rebase origin master',
            output: [
                'remote: Counting objects: 3, done.',
                'remote: Compressing objects: 100% (2/2), done.',
                'remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0',
                'Unpacking objects: 100% (3/3), done.',
                'From github.com:vlamanna/git-rocks-demo',
                ' * branch            master     -> FETCH_HEAD',
                '   0de38e3..793a1ea  master     -> origin/master',
                'First, rewinding head to replay your work on top of it...',
                'Applying: Adding a new file'
            ],
            success: 'You just pulled those latest changes and rebased your local repository.'
        },
        step8: {
            intro: 'Now let\'s commit your new file.',
            command: 'git push origin master',
            output: [
                'Counting objects: 2, done.',
                'Delta compression using up to 4 threads.',
                'Compressing objects: 100% (2/2), done.',
                'Writing objects: 100% (2/2), 249 bytes | 0 bytes/s, done.',
                'Total 2 (delta 1), reused 0 (delta 0)',
                'To git@github.com:vlamanna/git-rocks-demo.git',
                '   793a1ea..7d7ea02  master -> master'
            ],
            success: 'You just pushed your new file.'
        }
    }
};