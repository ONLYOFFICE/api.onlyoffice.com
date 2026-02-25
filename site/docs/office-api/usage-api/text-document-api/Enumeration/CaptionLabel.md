# CaptionLabel

Possible values for the caption label.

## Type

Enumeration

## Values

- "Table"
- "Equation"
- "Figure"


## Example

This example add a cross-reference to the page containing a table caption.

```javascript editor-docx playground
// How to add reference to the page with caption.

// Use caption to create a cross-reference.

paragraph.AddCaptionCrossRef("Table", "pageNum", caption);
```
