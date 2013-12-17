/*!
	devtools-detect
	Detect if DevTools is open
	https://github.com/sindresorhus/devtools-detect
	by Sindre Sorhus
	MIT License
*/
(function () {
	/*global CustomEvent */
	'use strict';
	var devtools = window.devtools = {open: false};
	var threshold = 160;
	var emitEvent = function (state) {
		window.dispatchEvent(new CustomEvent('devtoolschange', {
			detail: {
				open: state
			}
		}));
	};
	var getPixelRatio = function() {
		return window.devicePixelRatio || 1;
	};

	setInterval(function () {
		if ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || window.outerWidth - window.innerWidth*getPixelRatio() > threshold ||
			window.outerHeight - window.innerHeight*getPixelRatio() > threshold) {
			if (!devtools.open) {
				emitEvent(true);
			}
			devtools.open = true;
		} else {
			if (devtools.open) {
				emitEvent(false);
			}
			devtools.open = false;
		}
	}, 500);
})();
