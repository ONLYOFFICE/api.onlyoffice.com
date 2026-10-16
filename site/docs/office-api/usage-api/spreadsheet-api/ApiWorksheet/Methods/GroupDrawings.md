# GroupDrawings

Groups an array of drawings in the current sheet.

:::note
This method is not supported in the document builder and works only in the editor.
:::

## Syntax

```javascript
expression.GroupDrawings(aDrawings);
```

`expression` - A variable that represents an [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aDrawings | Required | [ApiDrawing](../../ApiDrawing/ApiDrawing.md)[] |  | An array of drawings to group. |

## Returns

[ApiGroup](../../ApiGroup/ApiGroup.md) \| null

## Example

Combine two shapes on the sheet into a single group in a spreadsheet.

```javascript editor-xlsx
// Add two shapes and merge them so they can be moved and formatted as one object.

// Group the shapes and report on the sheet whether the group was created.

const worksheet = Api.GetActiveSheet();

const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(61, 155, 255));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape1 = worksheet.AddShape("rect", 50 * 36000, 30 * 36000, fill1, stroke, 0, 0, 0, 0);
const shape2 = worksheet.AddShape("ellipse", 50 * 36000, 30 * 36000, fill2, stroke, 3, 0, 3, 0);

const group = worksheet.GroupDrawings([shape1, shape2]);
worksheet.GetRange("A10").SetValue(group ? "Group created" : "Group not created");
```
