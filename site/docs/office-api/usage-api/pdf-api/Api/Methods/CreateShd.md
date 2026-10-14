# CreateShd

Creates the shading which can be applied to text, a paragraph, a table or a table cell.

## Syntax

```javascript
expression.CreateShd(type, color);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [ShdType](../../Enumeration/ShdType.md) |  | The shading type: **"nil"** - no shading, **"clear"** - solid fill. |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | The shading color. Required for the **"clear"** type. |

## Returns

[ApiShd](../../ApiShd/ApiShd.md)

## Example

Create a shading object and apply it to table cells in a PDF.

```javascript editor-pdf
// Build the shading once with Api.CreateShd and reuse it for several table cells in a PDF.

// Shade the first row of a new table with the accent1 theme color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const shd = Api.CreateShd('clear', Api.Color('accent1'));
const row = table.GetRow(0);
for (let i = 0; i < 3; i++) {
    row.GetCell(i).SetShd(shd);
}

page.AddObject(table);
```
