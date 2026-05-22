# GetClassType

返回 ApiDrawing 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"drawing"

## 示例

识别电子表格中形状是哪种绘图对象。

```javascript editor-xlsx
// How do I find out the object type of a shape placed on a sheet in a spreadsheet?

// Read the object category of a shape and display the result in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
let classType = drawing.GetClassType();
worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 10);
worksheet.GetRange("A1").SetValue("Class Type = " + classType);
```
