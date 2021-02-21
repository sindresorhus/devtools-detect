/*!
devtools-detect
Detect if DevTools is open
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/
(function () {
	'use strict';

	const devtools = {
		isOpen: false,
		orientation: undefined
	};

	const threshold = 160;

	const emitEvent = (isOpen, orientation) => {
		window.dispatchEvent(new CustomEvent('devtoolschange', {
			detail: {
				isOpen,
				orientation
			}
		}));
	};

	//function to check if the given device is a phone or ipad
	function isPhone() {
		if (
			(navigator.userAgent.toLowerCase().indexOf('android') > -1) || (navigator.userAgent.toLowerCase().indexOf('iphone') > -1) ||
			(navigator.userAgent.toLowerCase().indexOf('ipad') > -1)) {
			return true;
		} else {
			return false;
		}
	}

	//check how long its takes for the given code to execute 
	//It return a value after execution
	//if value is greater than 60 then dev tool is open
	//if value is less than 60 then dev tool is not open
	//since the time to execute cosole.log takes longer when dev tool is open
	function checkPerformance() {
		var start = performance.now();
		for (let i = 0; i < 100; i++) {
			console.log();
			console.clear();
		}
		var end = performance.now();
		return (end - start);
	}


	const main = ({
		emitEvents = true
	} = {}) => {


		const widthThreshold = window.outerWidth - window.innerWidth > threshold;
		const heightThreshold = window.outerHeight - window.innerHeight > threshold;
		const orientation = widthThreshold ? 'vertical' : 'horizontal';


		if (!(heightThreshold && widthThreshold) &&
			((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
			if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
				emitEvent(true, orientation);
			}

			devtools.isOpen = true;
			devtools.orientation = orientation;

		}
		//checking if the responsive device is phone
		else if (isPhone()) {
			if (parseInt(checkPerformance()) > 60) {
				if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
					emitEvent(true, '');
				}
				devtools.isOpen = true;
				devtools.orientation = '';

			} else {
				if (devtools.isOpen && emitEvents) {
					emitEvent(false, undefined);
				}
				devtools.isOpen = false;
				devtools.orientation = undefined;
			}

		} else {
			if (devtools.isOpen && emitEvents) {
				emitEvent(false, undefined);
			}

			devtools.isOpen = false;
			devtools.orientation = undefined;


		}

	};

	main({
		emitEvents: false
	});
	setInterval(main, 500);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}
})();
