# AddPath

向当前几何形状添加新路径。

## 语法

```javascript
expression.AddPath();
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPath](../../ApiPath/ApiPath.md) \| null

## 示例

在文档中为自定义几何图形形状添加绘图路径。

```javascript editor-docx
// How do I add a path to a custom shape's geometry in a document?

// Draw a filled polygon outline by connecting a series of points in a custom shape in a document.

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
