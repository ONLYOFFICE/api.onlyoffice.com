# QuadBezTo

使用一个控制点从当前点到指定终点绘制二次贝塞尔曲线。

## 语法

```javascript
expression.QuadBezTo(x1, y1, x2, y2);
```

`expression` - 表示 [ApiPath](../ApiPath.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| x1 | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 控制点的 X 坐标。 |
| y1 | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 控制点的 Y 坐标。 |
| x2 | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 终点的 X 坐标。 |
| y2 | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 终点的 Y 坐标。 |

## 返回值

此方法不返回任何数据。

## 示例

使用三次贝塞尔、二次贝塞尔和弧线命令创建复杂曲线。

```javascript editor-docx
// Demonstrates different types of curve drawing methods.
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
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
paragraph.AddDrawing(shape);
```
