# SelectionType

Represents the type of objects in a selection.

## Type

Enumeration

## Values

- "none"
- "shapes"
- "slides"
- "text"

## Example

Get the type of a current selection.

```javascript editor-pptx
// Use the GetType method to retrieve the selection type.

// The returned value is a string representing the selection type.

const selectionType = Api.GetSelection().GetType();
```
