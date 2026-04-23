# ArcTo

使用指定的宽度和高度半径、起始角度和扫描角度从当前点绘制弧线。

## 语法

```javascript
expression.ArcTo(wR, hR, stAng, swAng);
```

`expression` - 表示 [ApiPath](../ApiPath.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| wR | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 宽度半径。 |
| hR | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 高度半径。 |
| stAng | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 起始角度。 |
| swAng | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 扫描角度。 |

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
