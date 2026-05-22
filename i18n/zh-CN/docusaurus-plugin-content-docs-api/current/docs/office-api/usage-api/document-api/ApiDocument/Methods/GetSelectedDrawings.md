# GetSelectedDrawings

返回当前文档中所有选中的绘图。

## 语法

```javascript
expression.GetSelectedDrawings();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

检索文档中当前选定的所有绘图。

```javascript editor-docx
// How do I get a reference to the selected drawings in a document?

// Resize a shape after selecting it by accessing it through the selected drawings collection in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.Select();
let drawings = doc.GetSelectedDrawings();
drawings[0].SetSize(2 * 914400, 2 * 914400);
```
