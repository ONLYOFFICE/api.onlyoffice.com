# onClickAnnotation

The event fired when the user clicks an annotation in the document. Provides information about the annotation that was interacted with.

## Parameters

| **Name**    | **Data type** | **Description**                                |
| ----------- | ------------- | ---------------------------------------------- |
| paragraphId | `string`      | ID of the paragraph containing the annotation. |
| rangeId     | `string`      | ID of the annotation range that was clicked.   |
| name        | `string`      | Annotation type (e.g., `"grammar"`).           |

```javascript
window.Asc.plugin.attachEditorEvent("onClickAnnotation", (annotation) => {
    console.log("Annotation clicked:", annotation.rangeId);
});
```
