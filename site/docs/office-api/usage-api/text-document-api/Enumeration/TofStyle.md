# TofStyle

Possible values for the table of figures style.

## Type

Enumeration

## Values

- "simple"
- "online"
- "classic"
- "distinctive"
- "centered"
- "formal"


## Example

This example adds a table of figures of the distinctive style to the document.

```javascript editor-docx
// How to create a table of figures with distinctive style property.

// Create a property for table of figures indicating its style.

let tofStyle = "distinctive";
let tofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": tofStyle};
doc.AddTableOfFigures(tofPr);
```
