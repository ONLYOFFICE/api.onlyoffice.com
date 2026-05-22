# GetX0

返回贝塞尔曲线第一个控制点的 X 坐标。

## 语法

```javascript
expression.GetX0();
```

`expression` - 表示 [ApiPathCommand](../ApiPathCommand.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

读取贝塞尔曲线第一个控制点的水平位置并写入电子表格的单元格。

```javascript editor-xlsx
// How do I find the X coordinate of the first bezier handle on a curve path command in a spreadsheet?

// Inspect the initial horizontal anchor that shapes a cubic curve segment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(100 * 36000);
path.SetHeight(100 * 36000);
path.MoveTo(0, 50 * 36000);
path.CubicBezTo(0, 0, 50 * 36000, 0, 50 * 36000, 50 * 36000);
path.QuadBezTo(100 * 36000, 50 * 36000, 100 * 36000, 100 * 36000);
path.ArcTo(50 * 36000, 50 * 36000, 0, 10800000);
path.Close();
let cmd = path.GetCommand(1);
worksheet.GetRange("A10").SetValue("CP1: (" + cmd.GetX0() + ", " + cmd.GetY0() + ")");
worksheet.GetRange("A11").SetValue("CP2: (" + cmd.GetX1() + ", " + cmd.GetY1() + ")");
worksheet.GetRange("A12").SetValue("End: (" + cmd.GetX2() + ", " + cmd.GetY2() + ")");
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = worksheet.AddShape("rect", 60 * 36000, 60 * 36000, fill, stroke, 3, 0, 2, 0);
shape.SetGeometry(customGeometry);
```
