# BorderType

A border type which will be added to the document element.\
-**"none"** - no border will be added to the created element or the selected element side.\
-**"single"** - a single border will be added to the created element or the selected element side.

## Type

Enumeration

## Values

- "none"
- "single"


## Example

The paragraph has a single green bottom border of 3 point wide with a zero offset from the bottom paragraph edge.

```javascript editor-docx
// How to set a bottom border specifying its type and color.

// Use a border index to set borders with properties.

paraPr.SetBottomBorder("single", 24, 0, 0, 255, 0);
```
