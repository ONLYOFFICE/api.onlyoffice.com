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

为工作表上形状中的文本范围设置拼写检查语言。

```javascript editor-xlsx
// The language applies to the covered fragment only.

// Set the language of the first word and print it.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("This is a sample text.");

let firstWord = shape.GetTextRange().GetRange(0, 4);
firstWord.SetLanguage("en-CA");
paragraph.AddText(" Language of the first word: " + firstWord.GetTextPr().GetLanguage());
```
