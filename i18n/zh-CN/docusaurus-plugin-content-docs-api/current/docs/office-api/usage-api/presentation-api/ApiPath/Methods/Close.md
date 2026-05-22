# Close

关闭当前路径。

## 语法

```javascript
expression.Close();
```

`expression` - 表示 [ApiPath](../ApiPath.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

关闭形状路径以完成演示文稿中的自定义形状轮廓。

```javascript editor-pptx
// How do I finish drawing a closed shape in a presentation?

// Complete a custom geometry path by connecting the endpoints in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
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
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
```
