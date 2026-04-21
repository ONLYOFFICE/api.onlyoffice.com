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

分析云形的路径属性。获取并显示路径尺寸、笔触和填充信息。

```javascript editor-docx
// How do I get the fill in a document?

// Get the fill using a geometry path object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("cloud", 80 * 36000, 80 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
paragraph.AddText("Path count: " + geometry.GetPathCount());
let path = geometry.GetPath(0);
paragraph.AddText(", Width: " + path.GetWidth() + ", Height: " + path.GetHeight());
paragraph.AddText(", Stroke: " + path.GetStroke() + ", Fill: " + path.GetFill());
let paths = geometry.GetPaths();
paragraph.AddText(", Total paths: " + paths.length);
paragraph.AddDrawing(shape);
```
