# onParagraphText

The event fired when the paragraph text is updated in the editor. Triggers every time the content of a paragraph changes and provides updated annotation positions.

## Parameters

| **Name**                       | **Data type**   | **Description**                                                                                     |
| ------------------------------ | --------------- | --------------------------------------------------------------------------------------------------- |
| paragraphId          | `string`        | ID of the paragraph whose content was changed.                                                      |
| recalcId             | `string`        | ID used to validate recalculations for this paragraph.                                              |
| text                 | `string`        | The updated text content of the paragraph.                                                          |
| [annotations](#annotation-parameters)          | `Array<Object>` | Array of annotation range objects.                                    |

### Annotation parameters

| **Name** | **Data type** | **Description**                                      |
| -------- | ------------- | ---------------------------------------------------- |
| id       | `string`      | Unique annotation ID.                                |
| start    | `number`      | Start index of the annotation in the paragraph text. |
| length   | `number`      | Length of the annotated text range.                  |
| name     | `string`      | Annotation type (e.g., `"grammar"`).                 |

```javascript
window.Asc.plugin.attachEditorEvent("onParagraphText", (paragraph) => {
    console.log("Paragraph updated:", paragraph.paragraphId);

    paragraph.annotations.forEach(a => {
        console.log(`Annotation ${a.id}: ${a.name} at ${a.start} (${a.length} chars)`);
    });
});
```
