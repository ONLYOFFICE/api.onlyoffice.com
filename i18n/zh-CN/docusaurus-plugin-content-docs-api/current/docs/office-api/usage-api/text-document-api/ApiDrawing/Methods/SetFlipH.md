# SetFlipH

设置当前绘图的水平翻转。

## 语法

```javascript
expression.SetFlipH(bFlip);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | 必需 | boolean |  | 指定图形是否水平翻转。 |

## 返回值

boolean

## 示例

This example shows how to set the horizontal flip for a drawing.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(100, 130, 170));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rightArrow', Api.MillimetersToEmus(40), Api.MillimetersToEmus(20), fill, stroke);
paragraph.AddDrawing(drawing);

const flippedDrawing = drawing.Copy();
flippedDrawing.SetFlipH(true);
paragraph.AddDrawing(flippedDrawing);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('The right arrow shape above is flipped horizontally.');
doc.Push(paragraph2);

```
