declare global {
	interface Window {
		addEventListener(
			type: 'devtoolschange',
			listener: (event: DevToolsEvent) => unknown,
			options?: boolean | AddEventListenerOptions
		): void;
	}
}

export type Orientation = 'vertical' | 'horizontal';

export interface DevToolsEvent extends Event {
	detail: typeof devTools;
}

declare const devTools: {
	/**
	Whether DevTools is open.
	*/
	readonly isOpen: boolean;

	/**
	Orientation of the DevTools if it's open.
	*/
	readonly orientation?: Orientation;
};

export default devTools;
