# onBlurAnnotation

The function called when an annotation loses focus.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| annotation | TextAnnotation | The annotation that lost focus. |

## Example

```javascript
window.Asc.plugin.attachEditorEvent("onBlurAnnotation", (data) => {
    console.log("event: onBlurAnnotation");
    console.log("paragraphId: " + data.paragraphId);
    console.log("rangeId: " + data.rangeId);
});
```
