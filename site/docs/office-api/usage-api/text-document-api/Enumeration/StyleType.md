# StyleType

The style type used for the document element.

## Type

Enumeration

## Values

- "paragraph"
- "table"
- "run"
- "numbering"


## Example

This example assigns the default document paragraph style to the 'oNormalStyle' variable.

```javascript editor-docx playground
// How to get a default style of the paragraph from the document.

// Return a paragraph default style.

let normalStyle = doc.GetDefaultStyle("paragraph");
```
