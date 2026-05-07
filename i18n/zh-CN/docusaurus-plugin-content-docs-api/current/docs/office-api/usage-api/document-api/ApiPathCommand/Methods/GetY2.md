# GetY2

返回三次贝塞尔曲线终点的 Y 坐标。

## 语法

```javascript
expression.GetY2();
```

`expression` - 表示 [ApiPathCommand](../ApiPathCommand.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

从三次贝塞尔曲线命令中获取控制点和端点。在文档中显示贝塞尔曲线的所有控制点坐标。

```javascript editor-docx
// How do I get the y2 in a document?

// Get the y2 using a path command object in a document.

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
