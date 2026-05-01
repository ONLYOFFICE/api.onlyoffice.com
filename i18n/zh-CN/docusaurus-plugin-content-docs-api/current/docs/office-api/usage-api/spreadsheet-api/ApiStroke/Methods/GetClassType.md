# GetClassType

返回 ApiStroke 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"stroke"

## 示例

获取电子表格中笔触的类类型。

```javascript editor-xlsx
// How to identify the class type of a stroke in a spreadsheet?

// Obtain the class type identifier of a stroke object in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let gradientStop1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gradientStop2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gradientStop1, gradientStop2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
let classType = stroke.GetClassType();
worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 10);
worksheet.GetRange("A1").SetValue("Class Type = ");
worksheet.GetRange("B1").SetValue(classType);
```
