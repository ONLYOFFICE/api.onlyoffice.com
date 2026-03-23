# SetPaddings

设置当前形状的文本内边距。

## 语法

```javascript
expression.SetPaddings(nLeft, nTop, nRight, nBottom);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLeft | 必需 | [EMU](../../Enumeration/EMU.md) |  | 左内边距。 |
| nTop | 必需 | [EMU](../../Enumeration/EMU.md) |  | 上内边距。 |
| nRight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 右内边距。 |
| nBottom | 必需 | [EMU](../../Enumeration/EMU.md) |  | 下内边距。 |

## 返回值

boolean

## 示例

此示例设置当前形状的文本内边距。

```javascript editor-pptx
// How to update paddings of the drawing.

// Create a shape and set its paddings.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is a sample text with paddings set to it. ");
paragraph.AddText("Left: 2cm, Top: 0.5cm, Right: 0.5cm, Bottom: 0.3cm");
docContent.Push(paragraph);
shape.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);
slide.AddObject(shape);
```
