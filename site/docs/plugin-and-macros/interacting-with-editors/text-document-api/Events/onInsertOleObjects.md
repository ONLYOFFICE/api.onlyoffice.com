# onInsertOleObjects

The function called when the track of the content control hides.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| data | object[] | array with data of inserted ole-objects |

```javascript
window.Asc.plugin.attachEditorEvent("onInsertOleObjects", (arrData) => {
    afterInsertOleObjects(arrData);
});
```

