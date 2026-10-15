# FreezePaneType

Specifies a type of freeze panes.

## Type

Enumeration

## Values

- "row"
- "column"
- "cell"
- null

## Example

Set the "column" freeze pane type to the current worksheet.

```javascript editor-xlsx
// How do I freeze columns in the current worksheet?

// Specify the freeze pane type.

const freezePaneType = "column";
Api.SetFreezePanesType(freezePaneType);
```
