# onInsertOleObjects

The function called when one or more OLE objects are inserted into the document.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| data | object[] | An array containing information about the inserted OLE objects. |

```javascript
window.Asc.plugin.attachEditorEvent("onInsertOleObjects", (arrData) => {
    afterInsertOleObjects(arrData);
});
```

