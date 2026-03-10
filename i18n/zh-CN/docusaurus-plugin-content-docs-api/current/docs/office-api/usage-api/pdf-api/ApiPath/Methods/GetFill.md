# GetFill

返回当前路径的填充类型。

## 语法

```javascript
expression.GetFill();
```

`expression` - 表示 [ApiPath](../ApiPath.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[PathFillType](../../Enumeration/PathFillType.md)

## 示例

Analyzes cloud shape path properties on a page.

```javascript editor-pdf
// Displays comprehensive path information in a text shape.
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
