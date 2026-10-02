# SetHeight

Sets the height to the current table row within the current table.

Inherited from [ApiTableRowPr.SetHeight](../../ApiTableRowPr/Methods/SetHeight.md).

## Syntax

```javascript
expression.SetHeight(sHRule, nValue);
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sHRule | Required | "auto" \| "atLeast" |  | The rule to apply the height value to the current table row or ignore it. Use the `"atLeast"` value to enable the `SetHeight` method use. |
| nValue | Optional | [twips](../../Enumeration/twips.md) |  | The height for the current table row measured in twentieths of a point (1/1440 of an inch). This value will be ignored if \<code\>sHRule="auto"\<code\>. |

## Returns

boolean

## Example

Set the height of a table row in a document.

```javascript editor-docx
// How do I control how tall a row appears within a table in a document?

// Fix a minimum or exact height for a row to ensure consistent spacing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to row #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
doc.Push(table);
```
