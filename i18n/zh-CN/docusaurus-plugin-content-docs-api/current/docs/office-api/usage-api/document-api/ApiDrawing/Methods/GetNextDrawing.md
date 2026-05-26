# GetNextDrawing

返回下一个内联绘图对象（如果存在）。

## 语法

```javascript
expression.GetNextDrawing();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDrawing](../../ApiDrawing/ApiDrawing.md) \| null

## 示例

获取文档中形状之后的下一个内联绘图对象。

```javascript editor-docx
// How do I access the drawing that comes after a given shape in a document?

// Traverse sibling drawings and modify the properties of the following shape in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let copyDrawing = drawing.Copy();
paragraph.AddDrawing(copyDrawing);
let nextDrawing = drawing.GetNextDrawing();
nextDrawing.SetHorFlip(true);
```
