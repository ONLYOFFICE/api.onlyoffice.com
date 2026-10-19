# SetLanguage

指定处理当前文本范围内容时用于检查拼写和语法（如果请求）的语言。

## 语法

```javascript
expression.SetLanguage(langId);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| langId | 必需 | string \| null |  | 此参数的可能值为 RFC 4646/BCP 47 定义的语言标识符。示例："en-CA"。传递 *null* 可移除语言。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

为演示文稿中的文本范围设置拼写检查语言。

```javascript editor-pptx
// The language applies to the covered fragment only.

// Set the language of the first word and print it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("This is a sample text.");

const firstWord = shape.GetTextRange().GetRange(0, 4);
firstWord.SetLanguage("en-CA");
paragraph.AddText(" Language of the first word: " + firstWord.GetTextPr().GetLanguage());
```
