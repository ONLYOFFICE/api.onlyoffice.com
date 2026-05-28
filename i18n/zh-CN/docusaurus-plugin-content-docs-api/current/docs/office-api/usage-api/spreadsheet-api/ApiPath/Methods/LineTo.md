# LineTo

从当前点到指定坐标绘制一条线。

## 语法

```javascript
expression.LineTo(x, y);
```

`expression` - 表示 [ApiPath](../ApiPath.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| x | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | X 坐标。 |
| y | 必需 | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | Y 坐标。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中从当前位置到自定义形状的新点绘制直线。

```javascript editor-xlsx
// How do I add a straight segment to a custom shape path in a spreadsheet?

// Extend a shape outline by connecting the current drawing position to a target coordinate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(100 * 36000);
path.SetHeight(100 * 36000);
path.SetStroke(true);
path.SetFill("norm");
path.MoveTo(50 * 36000, 0);
path.LineTo(70 * 36000, 45 * 36000);
path.LineTo(55 * 36000, 70 * 36000);
path.LineTo(100 * 36000, 100 * 36000);
path.LineTo(0, 100 * 36000);
path.Close();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = worksheet.AddShape("rect", 60 * 36000, 60 * 36000, fill, stroke, 3, 0, 2, 2);
shape.SetGeometry(customGeometry);
```
