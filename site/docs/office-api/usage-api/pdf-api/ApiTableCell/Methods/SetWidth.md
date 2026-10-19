# SetWidth

Specifies the preferred width for this cell.

## Syntax

```javascript
expression.SetWidth(sType, nValue);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TableWidth](../../Enumeration/TableWidth.md) |  | The type of the width value. |
| nValue | Optional | number |  | The table width value measured in positive integers. |

## Returns

boolean

## Example

Set a preferred width on individual table cells in a PDF.

```javascript editor-pdf
// Give specific cells a fixed width in a PDF table.

// Create a table and set the first column cells width in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
for (let r = 0; r < 3; r++) {
	table.GetRow(r).GetCell(0).SetWidth('twips', 5660);
}

page.AddObject(table);
```
