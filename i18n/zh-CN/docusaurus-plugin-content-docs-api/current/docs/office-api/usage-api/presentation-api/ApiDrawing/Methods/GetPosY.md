# GetPosY

获取绘图在幻灯片上的 y 位置。

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

此示例获取绘图在幻灯片上的 Y 坐标位置。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(230, 210, 230));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const posY = shape.GetPosY();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Drawing Y position: ' + posY + ' EMU');

```
