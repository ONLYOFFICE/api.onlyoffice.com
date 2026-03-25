# GetPosY

获取绘图在页面上的 y 位置。

## 语法

```javascript
expression.GetPosY();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md)

## 示例

如何获取并显示绘图的 Y 坐标位置。

```javascript editor-pdf
// Get a shape object from a page and get its Y position.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText(`Drawing Y position is: ${shape.GetPosY()}`);
docContent.Push(paragraph);
page.AddObject(shape);
```
