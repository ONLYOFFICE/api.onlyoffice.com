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

```javascript editor-docx
paragraph.AddCaptionCrossRef("Table", "pageNum", caption);
```
