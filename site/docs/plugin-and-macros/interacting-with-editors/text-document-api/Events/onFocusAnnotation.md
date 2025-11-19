# onFocusAnnotation

The event fired when an annotation receives focus (e.g., hovered or selected). Provides information about the annotation that gained focus.

## Parameters

| **Name**    | **Data type** | **Description**                                 |
| ----------- | ------------- | ----------------------------------------------- |
| paragraphId | `string`      | ID of the paragraph containing the annotation.  |
| rangeId     | `string`      | ID of the annotation range that received focus. |
| name        | `string`      | Annotation type (e.g., `"grammar"`).            |

```javascript
window.Asc.plugin.attachEditorEvent("onFocusAnnotation", (annotation) => {
    console.log("Annotation focused:", annotation.rangeId);
});
```
