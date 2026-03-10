# SetFlipV

设置当前绘图的垂直翻转。

## 语法

```javascript
expression.SetFlipV(bFlip);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | 必需 | boolean |  | 指定图形是否垂直翻转。 |

## 返回值

boolean

## 示例

This example shows how to set the vertical flip for a drawing.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(90, 140, 120));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('upArrow', Api.MillimetersToEmus(40), Api.MillimetersToEmus(80), fill, stroke);
paragraph.AddDrawing(drawing);

const flippedDrawing = drawing.Copy();
flippedDrawing.SetFlipV(true);
paragraph.AddDrawing(flippedDrawing);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('The right arrow shape above is flipped vertically.');
doc.Push(paragraph2);

```
