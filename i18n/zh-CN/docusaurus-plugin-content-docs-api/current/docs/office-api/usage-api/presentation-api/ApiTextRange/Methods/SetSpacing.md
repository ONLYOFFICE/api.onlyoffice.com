# SetSpacing

设置以二十分之一磅为单位测量的文本间距。

## 语法

```javascript
expression.SetSpacing(spacing);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| spacing | 必需 | [twips](../../Enumeration/twips.md) \| null |  | 文本间距值，以二十分之一磅（1/1440 英寸）为单位。传递 *null* 可移除文本间距。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

为文本范围内的所有文本块设置字符间距。

```javascript editor-pptx
// Useful for tightening or loosening letter spacing in a selection.

// Apply 80 twentieths-of-a-point spacing to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text has increased character spacing.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetSpacing(80);
```
