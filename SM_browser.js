(function(ext) {
    ext.alert = function(message) {
        alert(message);
    };

    ext.confirm = function(question) {
        return confirm(question);
    };

    ext.ask = function(question) {
        return prompt(question);
    };

    ext.setTitle = function(title) {
        window.document.title = title;
    };

    ext.openTab = function(location) {
        window.open(location, '_blank');
    };

    ext._shutdown = function() {
        console.log('Shutting down...');
    };

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    var descriptor = {
        blocks: [
            [' ', 'alert %s', 'alert', 'Hello'],
            ['b', 'confirm %s', 'confirm', 'Are you sure?'],
            ['r', 'ask %s', 'ask', 'How are you?'],
            [' ', 'set tab name to %s', 'setTitle', 'Hello world'],
            [' ', 'open new tab URL: %s', 'openTab', 'https://scratch.mit.edu/']
        ]
    };

    ScratchExtensions.register('ScratchMeow - Browser', descriptor, ext);
})({});
