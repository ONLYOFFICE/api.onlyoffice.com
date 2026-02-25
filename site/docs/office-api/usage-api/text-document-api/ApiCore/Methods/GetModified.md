# GetModified

Returns the date when the document was last modified.

## Syntax

```javascript
expression.GetModified();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Date

## Example

This example demonstrates how to get the date when the current document was last modified.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetModified(new Date('1990-03-10'));

const lastModifiedDate = core.GetModified().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);

```
