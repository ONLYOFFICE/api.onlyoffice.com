# onBlurAnnotation

The function called when an annotation loses focus.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| annotation | TextAnnotation | The annotation that lost focus. |

```javascript
window.Asc.plugin.attachEditorEvent("onBlurAnnotation", (data) => {
    console.log("Annotation blur:", data.rangeId);
});
```

