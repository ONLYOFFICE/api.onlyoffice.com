# Delete

删除当前图形对象。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从文档中形状锚定的段落中删除形状。

```javascript editor-docx
// How do I delete a drawing object that has been inserted into a paragraph in a document?

// Clean up unwanted graphics by programmatically deleting a shape after it has been placed.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.Delete();
paragraph.AddLineBreak();
paragraph.AddText("In this paragraph, the Drawing object has been deleted.");
```
