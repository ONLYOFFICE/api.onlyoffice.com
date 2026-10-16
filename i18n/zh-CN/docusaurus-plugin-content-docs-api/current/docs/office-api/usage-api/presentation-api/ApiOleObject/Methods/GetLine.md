# GetLine

从当前图形对象获取轮廓属性。

继承自 [ApiDrawing.GetLine](../../ApiDrawing/Methods/GetLine.md)。

## 语法

```javascript
expression.GetLine();
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiStroke](../../ApiStroke/ApiStroke.md) \| null

## 示例

在演示文稿中通过基础 ApiDrawing 接口获取绘图对象的轮廓。

```javascript editor-pptx
// GetLine returns the ApiStroke applied to any graphic object on a slide, or null when no outline is set.

// Read back the outline width of a drawing and show it inside the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
const drawing = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const currentLine = drawing.GetLine();
if (currentLine) {
	drawing.GetContent().GetElement(0).AddText("Outline width (EMU): " + currentLine.GetWidth());
}
```
