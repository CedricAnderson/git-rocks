jQuery(function($, undefined) {
    gitRocks.evalCommand = function(command, term) {
        if (gitRocks.currentStep >= gitRocks.nbSteps) {
            return;
        }

        if (command === gitRocks.getCurrentCommand()) {
            var output = gitRocks.getCurrentOutput();
            for (var line in output) {
                if (output.hasOwnProperty(line)) {
                    term.echo(output[line]);
                }
            }
            term.echo(' ');
            term.echo('**********');
            term.echo(gitRocks.getCurrentSuccess());

            gitRocks.currentStep = gitRocks.currentStep + 1;

            if (gitRocks.currentStep >= gitRocks.nbSteps) {
                term.echo('* Congratulation, you just finished this tutorial.');
                $('#gitrocks-next').removeClass('hide');
            } else {
                term.echo(gitRocks.getCurrentIntro());
                term.echo('* ');
                term.echo(gitRocks.getCurrentCommandString());
            }
            term.echo('**********');
        } else {
            term.echo('**********');
            term.echo(gitRocks.getCurrentCommandString());
            term.echo('**********');
        }
    };

    gitRocks.getCurrentIntro = function() {
        return '* ' + gitRocks[gitRocks.currentTutorial][gitRocks.getCurrentStep()].intro;
    };

    gitRocks.getCurrentCommand = function() {
        return gitRocks[gitRocks.currentTutorial][gitRocks.getCurrentStep()].command;
    };

    gitRocks.getCurrentCommandString = function() {
        return '* Type \'' + gitRocks.getCurrentCommand() + '\'.';
    };

    gitRocks.getCurrentOutput = function() {
        return gitRocks[gitRocks.currentTutorial][gitRocks.getCurrentStep()].output;
    };

    gitRocks.getCurrentSuccess = function() {
        return '* ' + gitRocks[gitRocks.currentTutorial][gitRocks.getCurrentStep()].success;  
    };

    gitRocks.getCurrentStep = function() {
        return "step" + gitRocks.currentStep;
    };

    $('#gitrocks').terminal(function(command, term) {
        gitRocks.evalCommand(command, term);
    }, {
        greetings: false,
        name: gitRocks.currentTutorial,
        height: 400,
        prompt: '> ',
        onInit: function(term) {
            term.echo('**********');
            term.echo(gitRocks.getCurrentIntro());
            term.echo('* ');
            term.echo(gitRocks.getCurrentCommandString());
            term.echo('**********');
        }
    });
});