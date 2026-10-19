# SetText

用给定字符串替换所有文本内容。使用 "\r" 分隔段落。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 新的文本值。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## 示例

为范围设置新的文本内容，替换现有文本。

```javascript editor-pptx
// Useful for swapping out a shape's text without recreating the range.

// Replace the shape text with new content and verify the result.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Old text");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetText("New text");

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 300 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 6000000);
shape2.GetDocContent().GetElement(0).AddText("After SetText: " + JSON.stringify(range.GetText()));
slide.AddObject(shape2);
```
