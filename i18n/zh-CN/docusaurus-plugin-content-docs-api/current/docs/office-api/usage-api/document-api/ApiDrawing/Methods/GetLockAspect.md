# GetLockAspect

返回绘图对象的纵横比是否已锁定。

## 语法

```javascript
expression.GetLockAspect();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

返回文档中绘图对象的纵横比是否已锁定。

```javascript editor-docx
// Useful for getting the lock aspect ratio state of a shape in a text document.

// Create a shape, lock its aspect ratio and display the result.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
drawing.SetLockAspect(true);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetContent();
let lockAspect = drawing.GetLockAspect();
let innerParagraph = Api.CreateParagraph();
innerParagraph.AddText("Aspect ratio locked: " + lockAspect);
docContent.AddElement(0, innerParagraph);
```
