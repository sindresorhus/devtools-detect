/// <reference lib="dom"/>

declare namespace devTools {
	type Orientation = 'vertical' | 'horizontal';

	interface DevTools {
		/**
		Whether DevTools is open.
		*/
		readonly open: boolean;

		/**
		Orientaion of the DevTools or `null` if not open.
		*/
		readonly orientation: Orientation | null;
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
