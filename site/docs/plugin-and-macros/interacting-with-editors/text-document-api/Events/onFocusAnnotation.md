# onFocusAnnotation

The function called when an annotation receives focus.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| annotation | TextAnnotation | The annotation that received focus. |

## Example

```javascript
window.Asc.plugin.attachEditorEvent("onFocusAnnotation", (data) => {
    console.log("event: onFocusAnnotation");
    console.log("paragraphId: " + data.paragraphId);
    console.log("rangeId: " + data.rangeId);
});
```
