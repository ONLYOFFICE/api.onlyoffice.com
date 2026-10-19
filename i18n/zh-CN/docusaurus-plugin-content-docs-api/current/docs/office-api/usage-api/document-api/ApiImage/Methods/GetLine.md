# GetLine

从当前图形对象获取轮廓属性。

继承自 [ApiDrawing.GetLine](../../ApiDrawing/Methods/GetLine.md)。

## 语法

```javascript
expression.GetLine();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiStroke](../../ApiStroke/ApiStroke.md) \| null

## 示例

在文档中通过基础 ApiDrawing 接口获取绘图对象的轮廓。

```javascript editor-docx
// GetLine returns the ApiStroke applied to any graphic object, or null when no outline is set.

// Read back the outline width of a drawing and write it into the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let currentLine = drawing.GetLine();
if (currentLine) {
	let resultParagraph = Api.CreateParagraph();
	resultParagraph.AddText("Drawing outline width (EMU): " + currentLine.GetWidth());
	doc.Push(resultParagraph);
}
```
