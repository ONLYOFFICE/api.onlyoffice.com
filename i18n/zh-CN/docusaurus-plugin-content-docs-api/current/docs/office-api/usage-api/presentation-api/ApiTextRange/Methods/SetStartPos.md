# SetStartPos

设置当前范围的起始位置。

## 语法

```javascript
expression.SetStartPos(pos);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | 必需 | number |  | 起始位置。 |

## 返回值

boolean

## 示例

设置文本范围的起始位置并检索子范围文本。

```javascript editor-pptx
// Useful for narrowing a range from its head end.

// Set a new start position to select only part of the text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetStartPos(6);

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 300 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 6000000);
shape2.GetDocContent().GetElement(0).AddText("Sub-range text: " + JSON.stringify(range.GetText()));
slide.AddObject(shape2);
```
