# SetBasedOn

Specifies the reference to the parent style which this style inherits from in the style hierarchy.

## Syntax

```javascript
expression.SetBasedOn(oStyle);
```

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | The parent style which the style inherits properties from. |

## Returns

boolean

## Example

Base a custom table style on an existing style in a document.

```javascript editor-docx
// How do I build a new table style that inherits formatting from another style in a document?

// Reuse a built-in style as the foundation for a custom table style in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
