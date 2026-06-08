# SetHeight

Sets the height to the current table row within the current table.

## Syntax

```javascript
expression.SetHeight(sHRule, nValue);
```

`expression` - A variable that represents a [ApiTableRowPr](../ApiTableRowPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sHRule | Required | "auto" \| "atLeast" |  | The rule to apply the height value to the current table row or ignore it. Use the `"atLeast"` value to enable the `SetHeight` method use. |
| nValue | Optional | [twips](../../Enumeration/twips.md) |  | The height for the current table row measured in twentieths of a point (1/1440 of an inch). This value will be ignored if \<code\>sHRule="auto"\<code\>. |

## Returns

boolean

## Example

Define the height of a table row in a document.

```javascript editor-docx
// How do I control how tall a row appears inside a table in a document?

// Adjust the vertical size of a table row to a fixed minimum in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableLook(true, true, true, true, false, false);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
doc.Push(table);
```
