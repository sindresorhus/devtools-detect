import {expectType} from 'tsd';
import devtools, {Orientation, DevToolsEvent} from './index.js';

expectType<boolean>(devtools.isOpen);
expectType<Orientation | undefined>(devtools.orientation);

window.addEventListener('devtoolschange', devtoolsEvent => {
	expectType<DevToolsEvent>(devtoolsEvent);
	expectType<boolean>(devtoolsEvent.detail.isOpen);
	expectType<Orientation | undefined>(devtoolsEvent.detail.orientation);
});
