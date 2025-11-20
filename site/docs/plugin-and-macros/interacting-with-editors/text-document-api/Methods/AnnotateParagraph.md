# AnnotateParagraph

Adds annotations to the specified paragraph.

## Syntax

```javascript
expression.AnnotateParagraph(obj);
```

`expression` - A variable that represents an 'Annotation' class.

## Parameters

| **Name**                    | **Required/Optional** | **Data type**   | **Description**                                             |
| --------------------------- | --------------------- | --------------- | ----------------------------------------------------------- |
| obj                         | Required              | `Object`        | The response object containing annotation data.             |
| type                        | Required              | `string`        | The type of annotation operation (e.g., `"highlightText"`). |
| name                        | Optional              | `string`        | Optional name of the annotation.                            |
| paragraphId                 | Required              | `string`        | ID of the paragraph being annotated (for `highlightText`).  |
| recalcId                    | Required              | `string`        | Recalculation ID for validation (for `highlightText`).      |
| [ranges](#range-parameters) | Optional              | `Array<Object>` | Array of text ranges to highlight (for `highlightText`).    |

### Range parameters

| **Name** | **Required/Optional** | **Data type** | **Description**                   |
| -------- | --------------------- | ------------- | --------------------------------- |
| start    | Required              | `number`      | Starting index of the text range. |
| length   | Required              | `number`      | Length of the text range.         |
| id       | Required              | `string`      | Unique identifier for the range.  |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod("AnnotateParagraph", [{
    type: "highlightText",
    name: "grammar",
    paragraphId: "p1",
    recalcId: "r12",
    ranges: [
        { start: 5, length: 10, id: "a1" }
    ]
}]);
```
