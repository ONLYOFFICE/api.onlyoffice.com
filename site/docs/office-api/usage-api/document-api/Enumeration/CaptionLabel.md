# CaptionLabel

Possible values for the caption label.

## Type

Enumeration

## Values

- "Table"
- "Equation"
- "Figure"

## Example

Add a cross-reference using the "Table" caption label.

```javascript editor-docx
// Add a reference to the page with a caption.

// Use caption to create a cross-reference.

paragraph.AddCaptionCrossRef("Table", "pageNum", caption);
```
