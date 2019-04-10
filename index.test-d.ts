import {expectType} from 'tsd';
import devtools = require('.');

expectType<boolean>(devtools.open);
expectType<devtools.Orientation | null>(devtools.orientation);

window.addEventListener('devtoolschange', devtoolsEvent => {
	expectType<devtools.DevToolsEvent>(devtoolsEvent);
	expectType<boolean>(devtoolsEvent.detail.open);
	expectType<devtools.Orientation | null>(devtoolsEvent.detail.orientation);
});
