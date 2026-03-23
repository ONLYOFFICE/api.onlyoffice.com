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
// Specify the freeze pane type.

// How to freeze columns in the current worksheet.

const freezePaneType = "column";
Api.SetFreezePanesType(freezePaneType);

```
