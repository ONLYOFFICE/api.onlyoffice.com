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

使用各种贝塞尔和弧线命令创建复杂的曲线形状。

```javascript editor-pdf
// Demonstrates different curve types in a single path on a page.
const doc = Api.GetDocument();
const page = doc.GetPage(0);

let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(120 * 36000);
path.SetHeight(120 * 36000);
path.MoveTo(0, 60 * 36000);
path.CubicBezTo(0, 0, 60 * 36000, 0, 60 * 36000, 60 * 36000);
path.QuadBezTo(120 * 36000, 60 * 36000, 120 * 36000, 120 * 36000);
path.ArcTo(60 * 36000, 60 * 36000, 0, 10800000);
path.Close();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("rect", 120 * 36000, 120 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
```
