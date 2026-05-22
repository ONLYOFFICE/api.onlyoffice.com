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

Read the alias name assigned to a content control in a document.

```javascript editor-docx
// How do I retrieve the alias of a content control in a document?

// Display the alias label of a content control as visible text in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias 'OnlyOffice'.");
blockLvlSdt.SetAlias("OnlyOffice");
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Alias: " + blockLvlSdt.GetAlias());
```
