# devtools-detect

> Detect if DevTools is open and its orientation

Useful for when you want something special to happen when DevTools is open. Like pausing canvas, adding style debug info, etc.


## [Demo](https://sindresorhus.com/devtools-detect)


## Install

```
$ npm install devtools-detect
```


## Usage

```html
<script src="node_modules/devtools-detect/index.js"></script>
<script type="module">
	// Check if it's open
	console.log('Is DevTools open:', window.devtools.open);

	// Check it's orientation, null if not open
	console.log('DevTools orientation:', window.devtools.orientation);

	// Get notified when it's opened/closed or orientation changes
	window.addEventListener('devtoolschange', event => {
		console.log('Is DevTools open:', event.detail.open);
		console.log('DevTools orientation:', event.detail.orientation);
	});
</script>
```


## Support

- Chrome DevTools
- Safari DevTools
- Firefox DevTools
- Opera DevTools
- Firebug
- Firebug Lite


## Caveats

Doesn't work if DevTools is undocked and will show false positive if you toggle any kind of sidebar.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
