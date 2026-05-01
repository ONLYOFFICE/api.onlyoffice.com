# GetCategory

Returns the document category.

## Syntax

```javascript
expression.GetCategory();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the category of the document using the core properties in a document.

```javascript editor-docx
// How do I get the category in a document?

// Get the category using a core properties object in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCategory("Examples");

const category = core.GetCategory();
let paragraph = doc.GetElement(0);
paragraph.AddText("Category: " + category);
```
