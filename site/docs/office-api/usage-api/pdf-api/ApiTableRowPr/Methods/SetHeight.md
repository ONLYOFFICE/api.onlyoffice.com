# SetHeight

Sets the height to the current table row within the current table.

## Syntax

```javascript
expression.SetHeight(sHRule, nValue);
```

`expression` - A variable that represents an [ApiTableRowPr](../ApiTableRowPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sHRule | Required | "auto" \| "atLeast" |  | The rule to apply the height value to the current table row or ignore it. |
| nValue | Optional | [twips](../../Enumeration/twips.md) |  | The height for the current table row measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean

## Example

Set a minimum row height in a PDF table using row properties.

```javascript editor-pdf
// Apply the same minimum row height to every row of a table in a PDF.

// Create a table, build row properties with a fixed minimum height, and apply them to each row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
for (let i = 0; i < 3; i++) {
	const rowPr = Api.CreateTableRowPr();
	rowPr.SetHeight('atLeast', 1500);
	table.GetRow(i).SetRowPr(rowPr);
}

page.AddObject(table);
```
