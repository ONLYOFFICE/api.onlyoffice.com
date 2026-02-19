# onFocusAnnotation

The function called when an annotation receives focus.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| annotation | TextAnnotation | The annotation that received focus. |

```javascript
window.Asc.plugin.attachEditorEvent("onFocusAnnotation", (data) => {
    console.log("Annotation focused:", data.rangeId);
});
```

