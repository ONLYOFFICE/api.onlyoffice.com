# GetParentContentControl

Returns a content control that contains the current table.

## Syntax

```javascript
expression.GetParentContentControl();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null

## Example

Access the content control that wraps a table in a document.

```javascript editor-docx
// How do I find the structured container holding a table in a document?

// Reach the enclosing content control so its properties can be updated in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
blockLvlSdt.AddElement(table, 0);
doc.AddElement(0, blockLvlSdt);
let parentContentControl = table.GetParentContentControl();
parentContentControl.SetAlias("№1");
```
