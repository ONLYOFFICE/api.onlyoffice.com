# onTargetPositionChanged

The function called when the target position in the editor is changed.

## Parameters

This event has no parameters.

```javascript
window.Asc.plugin.attachEditorEvent("onTargetPositionChanged", () => {
    if (!fClickLabel) {
        window.Asc.plugin.executeMethod("GetCurrentContentControl");
    }
    fClickLabel = false;
});
```

