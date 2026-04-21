# GetPath

按索引返回几何路径。

## 语法

```javascript
expression.GetPath(nIndex);
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | 必需 | number |  | 路径索引。 |

## 返回值

[ApiPath](../../ApiPath/ApiPath.md)

## 示例

分析页面上云形路径属性。在文本形状中显示全面的路径信息。

```javascript editor-pdf
// How do I get the path in a PDF document?

// Get the path using a geometry object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("cloud", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
let path = geometry.GetPath(0);
let paths = geometry.GetPaths();
let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Paths: " + geometry.GetPathCount() + ", Width: " + path.GetWidth());
paragraph.AddText(", Height: " + path.GetHeight() + ", Stroke: " + path.GetStroke());
paragraph.AddText(", Fill: " + path.GetFill() + ", Array: " + paths.length);
shape.SetPosition(1000000, 1000000);
page.AddObject(shape);
```
