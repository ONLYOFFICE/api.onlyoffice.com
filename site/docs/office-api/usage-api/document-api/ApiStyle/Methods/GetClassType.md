# GetClassType

Returns a type of the ApiStyle class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"style"

## Example

Find out the class type of a style object in a document.

```javascript editor-docx
// How can I get the class type of a style in a document?

// Get the class type of a style and display it in the document.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableStyle.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
