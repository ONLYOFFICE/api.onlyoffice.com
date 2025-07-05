# onFocusContentControl

The function called to show which content control has been focused.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| control | [Event_ContentControl](../Enumeration/Event_ContentControl.md) | Defines the content control that has been focused. |

```javascript
window.Asc.plugin.attachEditorEvent("onFocusContentControl", (control) => {
    focusContentControl(control);
});
```

