# GetPaths

返回当前几何形状的所有路径。

## 语法

```javascript
expression.GetPaths();
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPath](../../ApiPath/ApiPath.md)[]

## 示例

收集定义电子表格中形状轮廓的所有绘图路径。

```javascript editor-xlsx
// How do I retrieve every outline segment belonging to a shape at once in a spreadsheet?

// Gather the full list of paths from a shape so each one can be inspected in a spreadsheet.

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
