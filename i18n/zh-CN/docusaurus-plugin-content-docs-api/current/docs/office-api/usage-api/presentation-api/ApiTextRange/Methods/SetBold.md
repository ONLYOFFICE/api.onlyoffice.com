# SetBold

为当前文本范围的内容设置粗体格式。

## 语法

```javascript
expression.SetBold(isBold);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | 必需 | boolean \| null |  | 传递 *null* 可移除粗体格式。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## 示例

为文本范围内的所有文本块设置粗体属性。

```javascript editor-pptx
// Useful for emphasizing a portion of text without affecting the rest.

// Apply bold formatting to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be made bold using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetBold(true);
```
