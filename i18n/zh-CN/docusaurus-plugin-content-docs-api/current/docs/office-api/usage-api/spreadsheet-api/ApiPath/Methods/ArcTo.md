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
