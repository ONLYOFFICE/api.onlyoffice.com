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

This example specifies the reference to the parent style which this style inherits from in the style hierarchy.

```javascript editor-docx
// How to get the specific style from the document and create table style based on it.

// Inherit bordered style of the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
