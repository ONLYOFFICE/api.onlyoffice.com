# onClickAnnotation

The function called when the user clicks an annotation.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| annotation | TextAnnotation | The annotation that was clicked. |

```javascript
window.Asc.plugin.attachEditorEvent("onClickAnnotation", (data) => {
    console.log("Annotation clicked:", data.rangeId);
});
```

