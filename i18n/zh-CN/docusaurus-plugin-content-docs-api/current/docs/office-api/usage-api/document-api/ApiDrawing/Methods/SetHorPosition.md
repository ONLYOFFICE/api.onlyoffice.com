# SetHorPosition

设置浮动对象水平定位的绝对测量值。

## 语法

```javascript
expression.SetHorPosition(sRelativeFrom, nDistance, bPercent);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | 必需 | [RelFromH](../../Enumeration/RelFromH.md) |  | 将作为对象水平对齐参考点的文档元素。 |
| nDistance | 必需 | [EMU](../../Enumeration/EMU.md) \| number |  | 从文档元素右侧到浮动对象的距离。当 bPercent=true 时，使用 EMU 表示绝对距离或使用数字表示百分比（1 = 1%）。 |
| bPercent | 可选 | boolean | false | 定义垂直对齐偏移量是否以百分比指定的选项。 |

## 返回值

boolean

## 示例

此示例设置浮动对象水平定位的绝对测量值。

```javascript editor-docx
// How to set the horizontal position property of the shape.

// Create a drawing, add text to it and set its horizontal position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetHorPosition("rightMargin", 0);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is another paragraph.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned next to the right margin horizontally.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The next blue shape is aligned next to the left margin horizontally by 10% percent.");
fill = Api.CreateSolidFill(Api.CreateRGBColor(91, 155, 213));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetHorPosition("page", 5, true);
paragraph.AddDrawing(drawing);
doc.Push(paragraph);
```
