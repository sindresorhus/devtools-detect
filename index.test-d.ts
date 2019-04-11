import {expectType} from 'tsd';
import devtools = require('.');

expectType<boolean>(devtools.isOpen);
expectType<devtools.Orientation | undefined>(devtools.orientation);

window.addEventListener('devtoolschange', devtoolsEvent => {
	expectType<devtools.DevToolsEvent>(devtoolsEvent);
	expectType<boolean>(devtoolsEvent.detail.isOpen);
	expectType<devtools.Orientation | undefined>(devtoolsEvent.detail.orientation);
});
