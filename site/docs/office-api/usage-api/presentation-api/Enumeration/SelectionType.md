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

This example gets type of a current selection.

```javascript editor-pptx playground
const selectionType = Api.GetSelection().GetType();

```
