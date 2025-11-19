# onBlurAnnotation

The event fired when an annotation loses focus. Provides information about the annotation that was previously focused.

## Parameters

| **Name**    | **Data type** | **Description**                                |
| ----------- | ------------- | ---------------------------------------------- |
| paragraphId | `string`      | ID of the paragraph containing the annotation. |
| rangeId     | `string`      | ID of the annotation range that lost focus.    |
| name        | `string`      | Annotation type (e.g., `"grammar"`).           |

```javascript
window.Asc.plugin.attachEditorEvent("onBlurAnnotation", (annotation) => {
    console.log("Annotation blur:", annotation.rangeId);
});
```
