# GetClassType

返回 ApiRGBColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRGBColor](../ApiRGBColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"rgbColor"

## 示例

获取电子表格中 RGB 颜色对象的类类型。

```javascript editor-xlsx
// How can I get the class type of a RGB color in a spreadsheet?

// Get the class type of a RGB color and display it in the spreadsheet.

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
