# SetStyle

Sets a style to the current table.

## Syntax

```javascript
expression.SetStyle(oStyle);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | The style which will be applied to the current table. |

## Returns

boolean

## Example

Apply a predefined visual style to a table in a document.

```javascript editor-docx
// How do I give a table a consistent look and feel in a document?

// Dress up a table using one of the built-in formatting styles in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table and apply one of the existing styles to it:");
let tableStyle = doc.GetStyle("Bordered");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
