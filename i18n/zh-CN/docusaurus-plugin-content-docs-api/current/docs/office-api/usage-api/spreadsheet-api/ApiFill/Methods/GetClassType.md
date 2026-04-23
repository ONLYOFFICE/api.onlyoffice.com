# GetClassType

返回 ApiFill 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiFill](../ApiFill.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"fill"

## 示例

此示例获取类类型并将其插入到文档中。

```javascript editor-xlsx
// How to get a class type of ApiFill.

// Get a class type of ApiFill and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let gradientStop1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gradientStop2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gradientStop1, gradientStop2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
let classType = fill.GetClassType();
worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 10);
worksheet.GetRange("A1").SetValue("Class Type = " + classType);
```
