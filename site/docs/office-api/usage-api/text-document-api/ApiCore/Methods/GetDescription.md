# GetDescription

Returns the document description.

## Syntax

```javascript
expression.GetDescription();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example demonstrates how to get the description of the current document using the ApiCore.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetDescription("This is a sample document made to help fellow users understand how to use the ApiCore methods.");

const description = core.GetDescription();
let paragraph = doc.GetElement(0);
paragraph.AddText("Description: " + description);

```
