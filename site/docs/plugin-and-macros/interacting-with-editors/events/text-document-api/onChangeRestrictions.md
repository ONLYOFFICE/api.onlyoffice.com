# onChangeRestrictions

The function called when the restrictions in the editor is changed.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| value | number | restrictions value. |

```javascript
window.Asc.plugin.attachEditorEvent("onChangeRestrictions", (value) => {
    if (value == 0) {
        console.log('You are able to edit the document');
    }
});
```

