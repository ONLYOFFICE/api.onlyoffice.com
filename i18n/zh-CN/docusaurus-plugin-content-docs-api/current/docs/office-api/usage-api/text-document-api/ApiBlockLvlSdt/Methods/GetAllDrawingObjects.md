# GetAllDrawingObjects

返回当前内容控件中的绘图对象集合。

## 语法

```javascript
expression.GetAllDrawingObjects();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

获取文档中内容控件中的绘图对象集合。

```javascript editor-docx
// How can I get all drawing objects using a block-level content control in a document?

// Get all drawing objects for a block-level content control in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
shape = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
let drawingObjects = blockLvlSdt.GetAllDrawingObjects();
drawingObjects[0].Delete();
```
