# onParagraphText

The function called when the paragraph text is updated in the document.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| data | Object | Event data containing information about the updated paragraph. |

```javascript
window.Asc.plugin.attachEditorEvent("onParagraphText", (data) => {
    console.log("Paragraph updated:", data.paragraphId);
    data.annotations.forEach(a => {
        console.log(`Annotation ${a.id}: ${a.name} at ${a.start} (${a.length} chars)`);
    });
});
```

