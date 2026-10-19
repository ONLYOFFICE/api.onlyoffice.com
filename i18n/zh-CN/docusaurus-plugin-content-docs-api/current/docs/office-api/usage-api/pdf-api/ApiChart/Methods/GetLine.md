# GetLine

从当前图形对象获取轮廓属性。

继承自 [ApiDrawing.GetLine](../../ApiDrawing/Methods/GetLine.md)。

## 语法

```javascript
expression.GetLine();
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiStroke](../../ApiStroke/ApiStroke.md) \| null

## 示例

在 PDF 中通过 ApiDrawing 基础接口获取绘图对象的轮廓。

```javascript editor-pdf
// GetLine returns the ApiStroke applied to any graphic object in a PDF, or null when no outline is set.

// Read back the outline width of a drawing and show it inside the shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
const drawing = Api.CreateShape("rect", 50 * 36000, 50 * 36000, fill, stroke);
drawing.SetPosition(2000000, 1000000);
page.AddObject(drawing);
const currentLine = drawing.GetLine();
if (currentLine) {
	drawing.GetContent().GetElement(0).AddText("Outline width (EMU): " + currentLine.GetWidth());
}
```
