# GetClassType

Returns a type of the ApiRGBColor class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRGBColor](../ApiRGBColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"rgbColor"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-xlsx
// How to get a class type of ApiRGBColor.

// Get a class type of ApiRGBColor and display it in the worksheet.

const worksheet = Api.GetActiveSheet();
const rgbColor = Api.CreateRGBColor(255, 213, 191);
const gs1 = Api.CreateGradientStop(rgbColor, 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
const classType = rgbColor.GetClassType();
worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 10);
worksheet.GetRange("A1").SetValue("Class Type = ");
worksheet.GetRange("B1").SetValue(classType);

```
