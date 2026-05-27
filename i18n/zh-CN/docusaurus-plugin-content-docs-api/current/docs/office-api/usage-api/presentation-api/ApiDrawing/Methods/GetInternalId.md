# GetInternalId

返回当前绘图对象的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取演示文稿中形状的唯一标识符。

```javascript editor-pptx
// How do I retrieve the internal ID assigned to a shape in a presentation?

// Extract and display the unique internal ID of a drawing object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#FADBD8'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const internalId = shape.GetInternalId();

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Drawing internal ID: ' + internalId);
slide.AddObject(shape);
```
