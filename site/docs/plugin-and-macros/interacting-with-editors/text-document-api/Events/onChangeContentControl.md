# onChangeContentControl

The function called to show which content control has been changed.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| control | [Event_ContentControl](../Enumeration/Event_ContentControl.md) | Defines the content control that has been changed. |

```javascript
window.Asc.plugin.attachEditorEvent("onChangeContentControl", (control) => {
    changeContentControl(control);
});
```

