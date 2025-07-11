# captionRefTo

Available values of the "equation"/"figure"/"table" reference type:\
-**"entireCaption"**- the entire caption text;\
-**"labelNumber"** - the label and object number only, e.g. "Table 1.1";\
-**"captionText"** - the caption text only;\
-**"pageNum"** - the page number containing the referenced object;\
-**"aboveBelow"** - the words "above" or "below" depending on the item position.

## Type

Enumeration

## Values

- "entireCaption"
- "labelNumber"
- "captionText"
- "pageNum"
- "aboveBelow"


## Example

This example adds a cross-reference to the page containing a table caption.

```javascript editor-docx
// How to create a reference to the paragraph with a caption.

// Use caption to create a cross-reference.

paragraph.AddCaptionCrossRef("table", "pageNum", caption);
```
