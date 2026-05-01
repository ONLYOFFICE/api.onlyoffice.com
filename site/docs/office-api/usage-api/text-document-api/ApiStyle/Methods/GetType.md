# GetType

Returns a type of the current style.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[StyleType](../../Enumeration/StyleType.md)

## Example

Get a type of the current style in a document.

```javascript editor-docx
// How to get type of the table style in a document.

// Display the name of the table style in a document.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let tableStyleType = tableStyle.GetType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Style type = " + tableStyleType);
```
