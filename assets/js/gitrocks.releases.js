var gitRocks = {
    currentTutorial: "releases",
    currentStep: 0,
    nbSteps: 19,
    releases: {
        step0: {
            intro: 'To start your release process, let\'s create a release branch.',
            command: 'git branch release',
            output: [
            ],
            success: 'You just created your release branch.'
        },
        step1: {
            intro: 'Let\'s checkout this release branch.',
            command: 'git checkout release',
            output: [
                'Switched to branch \'release\''
            ],
            success: 'You are now working on your release branch.'
        },
        step2: {
            intro: 'Let\'s push this branch to the remote repository.',
            command: 'git push origin release',
            output: [
                'Total 0 (delta 0), reused 0 (delta 0)',
                'To git@github.com:vlamanna/git-rocks-demo.git',
                ' * [new branch]      release -> release'
            ],
            success: 'You just pushed your release branch.'
        },
        step3: {
            intro: 'You can now create your first tag as a release candidate.',
            command: 'git tag 1.0.0.0',
            output: [
            ],
            success: 'Your first release candidate has been tagged.'
        },
        step4: {
            intro: 'Let\'s push this tag to the remote repository.',
            command: 'git push --tags',
            output: [
                'Total 0 (delta 0), reused 0 (delta 0)',
                'To git@github.com:vlamanna/git-rocks-demo.git',
                ' * [new tag]         1.0.0.0 -> 1.0.0.0'
            ],
            success: 'You just pushed your new tag.'
        },
        step5: {
            intro: 'There is a new commit on "master" that you would like to include in your release. First switch back to the "master" branch.',
            command: 'git checkout master',
            output: [
                'Switched to branch \'master\'',
                'Your branch is up-to-date with \'origin/master\'.'
            ],
            success: 'You are now working on "master".'
        },
        step6: {
            intro: 'Let\'s grab all the latest changes.',
            command: 'git pull --rebase origin master',
            output: [
                'remote: Counting objects: 4, done.',
                'remote: Compressing objects: 100% (4/4), done.',
                'remote: Total 4 (delta 1), reused 0 (delta 0), pack-reused 0',
                'Unpacking objects: 100% (4/4), done.',
                'From github.com:vlamanna/git-rocks-demo',
                ' * branch            master     -> FETCH_HEAD',
                '   a34775a..5e5f40c  master     -> origin/master',
                'Updating a34775a..5e5f40c',
                'Fast-forward',
                ' fix1.md | 1 +',
                ' fix2.md | 1 +',
                ' 2 files changed, 2 insertions(+)',
                ' create mode 100644 fix1.md',
                ' create mode 100644 fix2.md'
            ],
            success: 'You now have all the latest changes.'
        },
        step7: {
            intro: 'Let\'s go back to your release branch.',
            command: 'git checkout release',
            output: [
                'Switched to branch \'release\''
            ],
            success: 'You are now working in your release branch.'
        },
        step8: {
            intro: 'Let\'s grab the one change you want to include.',
            command: 'git cherry-pick 5e5f40cd9b8f4910cd3d1ec24dc9b1c0de59eb72',
            output: [
                '[release 4e77bf1] Create fix2.md',
                ' Author: Vincent Lamanna <vincent@git.rocks>',
                ' Date: Sun Aug 2 21:40:37 2015 -0400',
                ' 1 file changed, 1 insertion(+)',
                ' create mode 100644 fix2.md'
            ],
            success: 'You now have the fix you wanted.'
        },
        step9: {
            intro: 'You can now push it to the remote repository.',
            command: 'git push origin release',
            output: [
                'Counting objects: 2, done.',
                'Delta compression using up to 4 threads.',
                'Compressing objects: 100% (2/2), done.',
                'Writing objects: 100% (2/2), 245 bytes | 0 bytes/s, done.',
                'Total 2 (delta 1), reused 0 (delta 0)',
                'To git@github.com:vlamanna/git-rocks-demo.git',
                '   a34775a..4e77bf1  release -> release'
            ],
            success: 'Your fix has now been pushed.'
        },
        step10: {
            intro: 'Let\'s tag a new version.',
            command: 'git tag 1.0.0.1',
            output: [
            ],
            success: 'You now have a new tag.'
        },
        step11: {
            intro: 'You can now push that new version to the remote repository.',
            command: 'git push --tags',
            output: [
                'Total 0 (delta 0), reused 0 (delta 0)',
                'To git@github.com:vlamanna/git-rocks-demo.git',
                ' * [new tag]         1.0.0.1 -> 1.0.0.1'
            ],
            success: 'Your new tag has been pushed.'
        },
        step12: {
            intro: 'You are now ready to push to production, let\'s create your production tag.',
            command: 'git tag 1.0.0',
            output: [
            ],
            success: 'Your production tag has been created.'
        },
        step13: {
            intro: 'Let\'s push that production tag to the remote repository.',
            command: 'git push --tags',
            output: [
                'Total 0 (delta 0), reused 0 (delta 0)',
                'To git@github.com:vlamanna/git-rocks-demo.git',
                ' * [new tag]         1.0.0 -> 1.0.0'
            ],
            success: 'Your production tag can now be deployed.'
        },
        step14: {
            intro: 'You can now resume your work on "master".',
            command: 'git checkout master',
            output: [
                'Switched to branch \'master\'',
                'Your branch is up-to-date with \'origin/master\'.'
            ],
            success: 'You are now working on "master".'
        },
        step15: {
            intro: 'You can now delete your local release branch.',
            command: 'git branch -D release',
            output: [
                'Deleted branch release (was 4e77bf1).'
            ],
            success: 'Your release branch has been deleted.'
        },
        step16: {
            intro: 'Now let\'s delete it on the remote repository.',
            command: 'git push origin --delete release',
            output: [
                'To git@github.com:vlamanna/git-rocks-demo.git',
                ' - [deleted]         release'
            ],
            success: 'The release branch has been deleted.'
        },
        step17: {
            intro: 'What if you need to do a hotfix on that version. First checkout the tag.',
            command: 'git checkout 1.0.0',
            output: [
                'Note: checking out \'1.0.0\'.',
                '',
                'You are in \'detached HEAD\' state. You can look around, make experimental',
                'changes and commit them, and you can discard any commits you make in this',
                'state without impacting any branches by performing another checkout.',
                '',
                'If you want to create a new branch to retain commits you create, you may',
                'do so (now or later) by using -b with the checkout command again. Example:',
                '',
                '  git checkout -b new_branch_name',
                '',
                'HEAD is now at 4e77bf1... Create fix2.md',
            ],
            success: 'You now have the latest push to production checked out.'
        },
        step18: {
            intro: 'Create a hotfix branch from there.',
            command: 'git checkout -b hotfix',
            output: [
                'Switched to a new branch \'hotfix\''
            ],
            success: 'You have a new hotfix branch. From there you can make your changes and tag a new version.'
        }
    }
};