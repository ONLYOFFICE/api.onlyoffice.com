# SetLanguage

指定处理当前范围内容时用于检查拼写和语法（如果请求）的语言。

## 语法

```javascript
expression.SetLanguage(langId);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| langId | 必需 | string \| null |  | 此参数的可能值为 RFC 4646/BCP 47 定义的语言标识符。示例："en-CA"。传递 *null* 可移除语言。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

为文档中的文本范围设置拼写检查语言。

```javascript editor-docx
// How do I tell the editor which language to use when checking part of a paragraph in a document?

// Set the language of the first word and print it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text.");
let range = paragraph.GetRange(0, 4);
range.SetLanguage("en-CA");
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Language of the first word: " + range.GetTextPr().GetLanguage());
doc.Push(resultParagraph);
```
