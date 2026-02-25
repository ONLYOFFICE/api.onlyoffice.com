# GetLastModifiedBy

Returns the name of the user who last modified the document.

## Syntax

```javascript
expression.GetLastModifiedBy();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example demonstrates how to get the name of the last user who modified the current document.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const lastModifiedBy = core.GetLastModifiedBy();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);

```
