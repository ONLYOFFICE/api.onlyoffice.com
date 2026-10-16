# ShdType

A shade type which can be added to the document element.

## Type

Enumeration

## Values

- "nil"
- "clear"

## Example

Add a green shadow to the table.

```javascript editor-xlsx
// How do I change the shading type of a table?

// Indicate a clear shadow type of the table.

tablePr.SetShd(Api.CreateShd("clear", Api.Color(0, 255, 0)));
```
