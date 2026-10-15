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

Assign the default document paragraph style to the 'oNormalStyle' variable.

```javascript editor-docx
// How do I get the default paragraph style of a document?

// Return a paragraph default style.

let normalStyle = doc.GetDefaultStyle("paragraph");
```
