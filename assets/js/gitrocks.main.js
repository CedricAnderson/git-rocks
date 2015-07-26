jQuery(function($, undefined) {
    gitRocks.evalCommand = function(command, term) {
        if (command === gitRocks.getCurrentCommand()) {
            term.echo(gitRocks.getCurrentSuccess());
            gitRocks.currentStep = gitRocks.currentStep + 1;
            term.echo('Type \'' + gitRocks.getCurrentCommand() + '\'.');
        } else {
            term.echo('Type \'' + gitRocks.getCurrentCommand() + '\'.');
        }
    };

    gitRocks.getCurrentCommand = function() {
        return gitRocks[gitRocks.currentTutorial][gitRocks.getCurrentStep()].command;
    };

    gitRocks.getCurrentSuccess = function() {
        return gitRocks[gitRocks.currentTutorial][gitRocks.getCurrentStep()].success;  
    };

    gitRocks.getCurrentStep = function() {
        return "step" + gitRocks.currentStep;
    };

    $('#gitrocks').terminal(function(command, term) {
        gitRocks.evalCommand(command, term);
    }, {
        greetings: 'Type \'' + gitRocks.getCurrentCommand() + '\'.',
        name: gitRocks.currentTutorial,
        height: 400,
        prompt: '> '});
});