# GetTitle

获取当前绘图对象的标题。

继承自 [ApiDrawing.GetTitle](../../ApiDrawing/Methods/GetTitle.md)。

## 语法

```javascript
expression.GetTitle();
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

在演示文稿中获取绘图对象的标题。

```javascript editor-pptx
// Needed when reading the alternative text title of a drawing.

// Create a drawing, set its title, and read it back.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
drawing.SetTitle("My Drawing Title");
let title = drawing.GetTitle();
let docContent = drawing.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Drawing title: " + title);
```
