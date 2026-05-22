# SetLockValue

Sets the lock value to the specified lock type of the current drawing.

## Syntax

```javascript
expression.SetLockValue(sType, bValue);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [DrawingLockType](../../Enumeration/DrawingLockType.md) |  | Lock type in the string format. |
| bValue | Required | boolean |  | Specifies if the specified lock is applied to the current drawing. |

## Returns

boolean

## Example

Prevent a drawing from being selected or modified by setting a lock on it in a spreadsheet.

```javascript editor-xlsx
// How do I restrict what a user can do with a drawing in a spreadsheet?

// Protect a shape from user interaction by applying a specific lock type to it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
drawing.SetLockValue("noSelect", true);
let lockValue = drawing.GetLockValue("noSelect");
worksheet.GetRange("A1").SetValue("This drawing cannot be selected: " + lockValue);
```
