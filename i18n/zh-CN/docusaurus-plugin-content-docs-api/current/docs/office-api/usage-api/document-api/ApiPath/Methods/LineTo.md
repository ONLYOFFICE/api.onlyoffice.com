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

在文档中从当前位置到自定义形状上的新点绘制直线。

```javascript editor-docx
// How do I add a straight edge between two points on a custom shape's path in a document?

// Build an angular outline by connecting corners with straight segments in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
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
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
paragraph.AddDrawing(shape);
```
