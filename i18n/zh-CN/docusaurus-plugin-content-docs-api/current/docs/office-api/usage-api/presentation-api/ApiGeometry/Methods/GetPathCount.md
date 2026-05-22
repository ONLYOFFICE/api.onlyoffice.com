# GetPathCount

返回当前几何形状中的路径数量。

## 语法

```javascript
expression.GetPathCount();
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算演示文稿中形状几何图形中的绘图路径数。

```javascript editor-pptx
// How do I find how many paths a shape has in a presentation?

// Determine the number of paths that make up a shape's outline in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("cloud", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
let path = geometry.GetPath(0);
let paths = geometry.GetPaths();
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Paths: " + geometry.GetPathCount() + ", Width: " + path.GetWidth());
paragraph.AddText(", Height: " + path.GetHeight() + ", Stroke: " + path.GetStroke());
paragraph.AddText(", Fill: " + path.GetFill() + ", Array: " + paths.length);
shape.SetPosition(1000000, 1000000);
slide.AddObject(shape);
```
