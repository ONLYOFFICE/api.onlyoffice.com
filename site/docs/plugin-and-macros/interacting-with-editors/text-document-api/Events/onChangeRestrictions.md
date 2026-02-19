# onChangeRestrictions

The function called when the restrictions in the editor are changed.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| value | number | The restrictions value. |

```javascript
window.Asc.plugin.attachEditorEvent("onChangeRestrictions", (value) => {
    if (value == 0) {
        console.log('You are able to edit the document');
    }
});
```

