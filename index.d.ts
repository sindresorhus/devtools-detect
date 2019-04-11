/// <reference lib="dom"/>

declare namespace devTools {
	type Orientation = 'vertical' | 'horizontal';

	interface DevTools {
		/**
		Whether DevTools is open.
		*/
		readonly isOpen: boolean;

		/**
		Orientation of the DevTools if it's open.
		*/
		readonly orientation?: Orientation;
	}

	interface DevToolsEvent extends Event {
		detail: DevTools;
	}
}

declare const devTools: devTools.DevTools;

export = devTools;
export as namespace devTools;

declare global {
	interface Window {
		addEventListener(
			type: 'devtoolschange',
			listener: (event: devTools.DevToolsEvent) => unknown,
			options?: boolean | AddEventListenerOptions
		): void;
	}
}
