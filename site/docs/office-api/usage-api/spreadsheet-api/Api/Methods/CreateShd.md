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

Create a shading object and apply it to the text of a shape in a spreadsheet.

```javascript editor-xlsx
// Build the shading once with Api.CreateShd and pass it to the SetShd method of a text run in a spreadsheet.

// Shade the text of a shape with a light yellow background in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.Color('#F2F2F2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape('rect', 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const shd = Api.CreateShd('clear', Api.Color('#FFF2CC'));
const paragraph = shape.GetContent().GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.SetFill(Api.CreateSolidFill(Api.Color('#000000')));
run.SetShd(shd);
run.AddText('This text has a light yellow shading.');
paragraph.AddElement(run);
```
