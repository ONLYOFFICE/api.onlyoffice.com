# onClickAnnotation

The function called when the user clicks an annotation.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| annotation | TextAnnotation | The annotation that was clicked. |

```javascript
window.Asc.plugin.attachEditorEvent("onClickAnnotation", (data) => {
    console.log("event: onClickAnnotation");
    console.log("paragraphId: " + data.paragraphId);
    for (let i = 0; i < data.ranges.length; i++) {
        console.log("rangeId: " + data.ranges[i]);
    }
});
```

