# GetAlias

Returns the alias attribute for the current container.

## Syntax

```javascript
expression.GetAlias();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the alias attribute of the container.

```javascript editor-docx
// Creates a block content control, adds a text to it, returns its alias, and writes it to the second paragraph of the document.

// How to return an alias of the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias 'OnlyOffice'.");
blockLvlSdt.SetAlias("OnlyOffice");
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Alias: " + blockLvlSdt.GetAlias());
```
