# devtools-detect

> Detect if DevTools is open

Useful for when you want something special to happen when DevTools is open. Like pausing canvas, adding style debug info, etc.


### [Demo](http://sindresorhus.com/devtools-detect)


## Install

Download [manually](https://github.com/sindresorhus/devtools-detect/releases) or with a package-manager.

#### [npm](https://npmjs.org/package/devtools-detect)

```
npm install --save devtools-detect
```

#### [Bower](http://bower.io)

```
bower install --save devtools-detect
```

#### [Component](https://github.com/component/component)

```
component install sindresorhus/devtools-detect
```


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
