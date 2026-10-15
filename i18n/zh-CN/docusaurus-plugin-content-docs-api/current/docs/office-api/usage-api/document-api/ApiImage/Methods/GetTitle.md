# GetTitle

获取当前绘图对象的标题。

继承自 [ApiDrawing.GetTitle](../../ApiDrawing/Methods/GetTitle.md)。

## 语法

```javascript
expression.GetTitle();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

获取文档中绘图对象的标题。

```javascript editor-docx
// Needed when reading the alternative text title of a drawing.

// Create a drawing, set its title, and read it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetTitle("My Drawing Title");
let title = drawing.GetTitle();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing title: " + title);
doc.AddElement(0, paragraph);
```
