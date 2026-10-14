# SetShd

Specifies the shading which shall be applied to the extents of the current table cell.

## Syntax

```javascript
expression.SetShd(shd);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | Required | [ApiShd](../../ApiShd/ApiShd.md) |  | The shading created with the Api.CreateShd method. |

## Returns

boolean

## Example

Apply a background fill color to a table cell in a PDF.

```javascript editor-pdf
// How do I change the background color of a table cell in a PDF?

// Color the background of your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const shd = Api.CreateShd("clear", Api.RGB(51, 51, 51));
cell.SetShd(shd);

page.AddObject(table);
```
