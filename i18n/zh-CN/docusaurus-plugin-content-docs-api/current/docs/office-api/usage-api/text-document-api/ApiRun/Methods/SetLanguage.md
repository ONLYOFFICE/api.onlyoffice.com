# SetLanguage

指定在处理此文本运行内容时将用于检查拼写和语法（如果请求）的语言。

## 语法

```javascript
expression.SetLanguage(sLangId);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLangId | 必需 | string |  | 此参数的可能值是 RFC 4646/BCP 47 定义的语言标识符。示例："en-CA"。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定在处理此文本运行内容时将用于检查拼写和语法（如果请求）的语言。

```javascript editor-docx
// How to change language of the text for grammar check.

// Create a new text run and change its language.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetLanguage("en-CA");
run.AddText("This is a text run with the text language set to English (Canada).");
paragraph.AddElement(run);
```
