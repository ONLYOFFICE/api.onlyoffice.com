# onExternalMouseUp

The function called when the mouse button is released outside the plugin iframe.

## Parameters

This event has no parameters.

```javascript
window.Asc.plugin.attachEditorEvent("onExternalMouseUp", () => {
    let evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mouseup", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.dispatchEvent(evt);
});
```

