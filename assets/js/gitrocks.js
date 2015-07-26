jQuery(function($, undefined) {
    var gitRocks = {
        currentTutorial: "gettingStarted",
        currentStep: 0,
        gettingStarted: {
            step0: {
                command: "git init",
                success: "You just created your first repository. Now let's add some files."
            },
            step1: {
                command: "touch README.md",
                success: "You created a README file. Now let's commit it."
            }
        },
        evalCommand: function(command, term) {
            if (command === gitRocks.getCurrentCommand()) {
                term.echo(gitRocks.getCurrentSuccess());
                gitRocks.currentStep = gitRocks.currentStep + 1;
                term.echo('Type \'' + gitRocks.getCurrentCommand() + '\'.');
            } else {
                term.echo('Type \'' + gitRocks.getCurrentCommand() + '\'.');
            }
        },
        getCurrentCommand: function() {
            return gitRocks[gitRocks.currentTutorial][gitRocks.getCurrentStep()].command;
        },
        getCurrentSuccess: function() {
            return gitRocks[gitRocks.currentTutorial][gitRocks.getCurrentStep()].success;  
        },
        getCurrentStep: function() {
            return "step" + gitRocks.currentStep;
        }
    };

    $('#getting-started').terminal(function(command, term) {
        gitRocks.evalCommand(command, term);
    }, {
        greetings: 'Type \'' + gitRocks.getCurrentCommand() + '\'.',
        name: gitRocks.currentTutorial,
        height: 400,
        prompt: '> '});
});