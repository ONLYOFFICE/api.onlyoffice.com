# SetVerPosition

设置浮动对象垂直定位的绝对测量值。

## 语法

```javascript
expression.SetVerPosition(sRelativeFrom, nDistance, bPercent);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | 必需 | [RelFromV](../../Enumeration/RelFromV.md) |  | 将作为对象垂直对齐参考点的文档元素。 |
| nDistance | 必需 | [EMU](../../Enumeration/EMU.md) \| number |  | 从文档元素底部到浮动对象的距离。使用 EMU 表示绝对单位，或当 bPercent=true 时使用数字（1 = 1%）表示百分比相对定位。 |
| bPercent | 可选 | boolean | false | 定义垂直对齐偏移量是否以百分比指定的选项。 |

## 返回值

boolean

## 示例

此示例设置浮动对象垂直定位的绝对测量值。

```javascript editor-docx
// How to set the vertical position at page in points.

// Move the shape vertically on the page.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text (horizontally) is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetVerPosition("page", 914400);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned to the top of the page, and outstands from the page top 1 inch.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The next blue shape is aligned vertically by 50% relative to the page.");
fill = Api.CreateSolidFill(Api.CreateRGBColor(91, 155, 213));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetVerPosition("page", 50, true);
paragraph.AddDrawing(drawing);
doc.Push(paragraph);
```
