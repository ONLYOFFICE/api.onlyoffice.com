# GetX1

返回三次贝塞尔曲线第二个控制点的 X 坐标。

## 语法

```javascript
expression.GetX1();
```

`expression` - 表示 [ApiPathCommand](../ApiPathCommand.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

从三次贝塞尔曲线命令中检索控制点和终点。

```javascript editor-docx
// Displays all control points coordinates of the bezier curve.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(100 * 36000);
path.SetHeight(100 * 36000);
path.MoveTo(0, 50 * 36000);
path.CubicBezTo(0, 0, 50 * 36000, 0, 50 * 36000, 50 * 36000);
path.QuadBezTo(100 * 36000, 50 * 36000, 100 * 36000, 100 * 36000);
path.ArcTo(50 * 36000, 50 * 36000, 0, 10800000);
path.Close();
let cmd = path.GetCommand(1); // cubic bezier command
paragraph.AddText("Control points: (" + cmd.GetX0() + ", " + cmd.GetY0() + "), ");
paragraph.AddText("(" + cmd.GetX1() + ", " + cmd.GetY1() + "), ");
paragraph.AddText("(" + cmd.GetX2() + ", " + cmd.GetY2() + ")");
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("rect", 80 * 36000, 80 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
paragraph.AddDrawing(shape);
```
