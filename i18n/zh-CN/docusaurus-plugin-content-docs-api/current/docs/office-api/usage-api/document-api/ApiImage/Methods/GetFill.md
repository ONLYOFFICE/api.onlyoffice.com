# GetFill

从当前图形对象获取填充格式属性。

继承自 [ApiDrawing.GetFill](../../ApiDrawing/Methods/GetFill.md)。

## 语法

```javascript
expression.GetFill();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFill](../../ApiFill/ApiFill.md) \| null

## 示例

在文档中通过基础 ApiDrawing 接口获取绘图对象的填充格式属性。

```javascript editor-docx
// GetFill returns the ApiFill applied to any graphic object, or null when the object has no fill.

// Read back the fill type of a filled rectangle and write it into the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let currentFill = drawing.GetFill();
if (currentFill) {
	let resultParagraph = Api.CreateParagraph();
	resultParagraph.AddText("Drawing fill type: " + currentFill.GetType());
	doc.Push(resultParagraph);
}
```
