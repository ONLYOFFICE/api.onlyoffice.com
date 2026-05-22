# GetPathCount

返回当前几何形状中的路径数量。

## 语法

```javascript
expression.GetPathCount();
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算构成电子表格中形状轮廓的绘图路径数量。

```javascript editor-xlsx
// How do I find out how many separate path segments a shape contains in a spreadsheet?

// Determine the total number of outline segments that together form a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = worksheet.AddShape("cloud", 60 * 36000, 60 * 36000, fill, stroke, 3, 0, 2, 2);
let geometry = shape.GetGeometry();
worksheet.GetRange("A3").SetValue("Path count: " + geometry.GetPathCount());
let path = geometry.GetPath(0);
worksheet.GetRange("A4").SetValue("Width: " + path.GetWidth() + ", Height: " + path.GetHeight());
worksheet.GetRange("A5").SetValue("Stroke: " + path.GetStroke() + ", Fill: " + path.GetFill());
let paths = geometry.GetPaths();
worksheet.GetRange("A6").SetValue("Total paths: " + paths.length);
```
