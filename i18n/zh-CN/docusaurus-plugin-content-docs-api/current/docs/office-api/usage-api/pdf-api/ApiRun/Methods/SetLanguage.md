# SetLanguage

指定在处理此文本块内容时将用于检查拼写和语法（如果请求）的语言。

## 语法

```javascript
expression.SetLanguage(sLangId);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLangId | 必需 | string |  | 此参数的可能值是 RFC 4646/BCP 47 定义的语言标识符。示例："en-CA"。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

指定 PDF 中文本的语言。

```javascript editor-pdf
// How do I set text language for spell checking in a PDF?

// Configure language detection for text content in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is a text run with the text language set to English (Canada).");
paragraph.AddElement(run);
run.SetLanguage("en-CA");
page.AddObject(shape);
```
