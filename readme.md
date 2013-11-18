# devtools-detect

> Detect if DevTools is open

Useful for when you want something special to happen when DevTools is open. Like pausing canvas, adding style debug info, etc.


### [Demo](http://sindresorhus.com/devtools-detect)


## Install

Install with [Bower](https://github.com/bower/bower) `bower install devtools-detect` or [download](https://github.com/sindresorhus/devtools-detect/raw/gh-pages/devtools-detect.js) manually.


## Example

```html
<script src="devtools-detect.js"></script>
<script>
	// check if it's open
	console.log('is DevTools open?', window.devtools.open);

	// get notified when it's opened/closed
	window.addEventListener('devtoolschange', function (e) {
		console.log('is DevTools open?', e.detail.open);
	});
</script>
```


## Support

Works with:

- Chrome DevTools
- Safari DevTools
- Firefox DevTools
- Firebug
- Firebug Lite


## Caveats

Doesn't work if DevTools is undocked and will show false positive if you toggle any kind of sidebar.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
