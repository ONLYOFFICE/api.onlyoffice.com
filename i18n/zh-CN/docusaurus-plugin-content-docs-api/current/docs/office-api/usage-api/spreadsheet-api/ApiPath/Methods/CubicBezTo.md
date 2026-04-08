# CubicBezTo

使用两个控制点从当前点到指定终点绘制三次贝塞尔曲线。

## 语法

```javascript
expression.CubicBezTo(x1, y1, x2, y2, x3, y3);
```

`expression` - 表示 [ApiPath](../ApiPath.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| x1 | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 第一个控制点的 X 坐标。 |
| y1 | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 第一个控制点的 Y 坐标。 |
| x2 | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 第二个控制点的 X 坐标。 |
| y2 | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 第二个控制点的 Y 坐标。 |
| x3 | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 终点的 X 坐标。 |
| y3 | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | 终点的 Y 坐标。 |

## 返回值

此方法不返回任何数据。

## 示例

使用不同的贝塞尔曲线和弧命令创建复杂的曲线形状。

```javascript editor-xlsx
// Combines multiple curve types in a single path.
let worksheet = Api.GetActiveSheet();
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(80 * 36000);
path.SetHeight(80 * 36000);
path.MoveTo(0, 40 * 36000);
path.CubicBezTo(0, 0, 40 * 36000, 0, 40 * 36000, 40 * 36000);
path.QuadBezTo(80 * 36000, 40 * 36000, 80 * 36000, 80 * 36000);
path.ArcTo(40 * 36000, 40 * 36000, 0, 10800000);
path.Close();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = worksheet.AddShape("rect", 80 * 36000, 80 * 36000, fill, stroke, 3, 0, 3, 0);
shape.SetGeometry(customGeometry);
```
