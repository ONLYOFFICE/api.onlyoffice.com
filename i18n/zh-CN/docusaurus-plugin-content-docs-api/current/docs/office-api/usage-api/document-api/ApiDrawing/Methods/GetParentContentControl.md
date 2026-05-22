# GetParentContentControl

返回包含图形对象的父内容控件。

## 语法

```javascript
expression.GetParentContentControl();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null

## 示例

检索文档中包含绘图对象的父内容控件。

```javascript editor-docx
// How do I find the content control that wraps a drawing in a document?

// Access the enclosing block-level content control to add text alongside a shape in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
let parentContentControl = drawing.GetParentContentControl();
parentContentControl.AddText("This is a parent content control.");
```
