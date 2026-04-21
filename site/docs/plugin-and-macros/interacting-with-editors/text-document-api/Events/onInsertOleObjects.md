# onInsertOleObjects

The function called when one or more OLE objects are inserted into the document.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| data | object[] | An array containing information about the inserted OLE objects. |

## Example

```javascript
window.Asc.plugin.attachEditorEvent("onInsertOleObjects", (arrData) => {
    console.log("event: onInsertOleObjects");
    for (let i = 0; i < arrData.length; i++) {
        let oleObject = arrData[i];
        console.log("ApplicationId: " + oleObject.ApplicationId);
        console.log("InternalId: " + oleObject.InternalId);
        console.log("Width: " + oleObject.Width);
        console.log("Height: " + oleObject.Height);
        console.log("WidthPix: " + oleObject.WidthPix);
        console.log("HeightPix: " + oleObject.HeightPix);
        console.log("ParaDrawingId: " + oleObject.ParaDrawingId);
        console.log("Data: " + oleObject.Data);
    }
});
```
