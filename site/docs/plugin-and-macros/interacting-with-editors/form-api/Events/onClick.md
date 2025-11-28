# onClick

The function called when the user clicks the element.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| isSelectionUse | boolean | Defines if the selection is used or not. |

```javascript
window.Asc.plugin.attachEditorEvent("onClick", (isSelectionUse) => {
    window.Asc.plugin.executeMethod("GetCurrentContentControlPr", [], function(obj) {
        window.Asc.plugin.currentContentControl = obj;
        var controlTag = obj ? obj.Tag : "";
        if (isSelectionUse)
            controlTag = "";

    });
});
```

