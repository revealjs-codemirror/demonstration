(function(Reveal){
    'use strict';

    Reveal.initialize();

    var textarea = document.getElementById('code');
    CodeMirror.fromTextArea(textarea, {
	mode: 'javascript'
    });
})(Reveal);
