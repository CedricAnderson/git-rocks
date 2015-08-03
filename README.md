# Git Rocks - Interactive tutorials to learn Git.

## Basics

Git Rocks uses [Jekyll](http://jekyllrb.com/), so if you want to develop new tutorials or extend the existing ones, make sure you download and install it.

## Adding a tutorial

The first step is to create a new folder that is the short name of the tutorial at the root of the repository. Then, in this folder, you will need to create a `index.html`.

In this `index.html` you will put the following at the top:

    ---
    layout: tutorial
    title: <title of the tutorial> - Git Rocks
    headline: <title of the tutorial>
    excerpt: <description of the tutorial>
    tutorial: <short name of the tutorial>
    ---
    
Then, in `assets/js` you will need to create a new file `gitrocks.<short name>.js`. This will be the file that drives the tutorial.

The format of the file is the following:

    var gitRocks = {
        currentTutorial: "<short name of the tutorial>",
        currentStep: 0,
        nbSteps: <number of steps of the tutorial>,
        gettingStarted: {
            step<x>: {
                intro: '<short intro message of the step>',
                command: '<command to type>',
                output: [
                    <output of the command, 1 entry in array = 1 line>
                ],
                success: '<message to show when the command is typed>'
            }
            ...
        }
    };
    
## License

The MIT License (MIT)

Copyright (c) 2015 Vincent Lamanna

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
