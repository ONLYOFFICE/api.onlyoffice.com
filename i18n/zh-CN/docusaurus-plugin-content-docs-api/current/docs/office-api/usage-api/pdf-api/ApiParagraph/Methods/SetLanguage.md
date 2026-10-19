# SetLanguage

指定处理当前段落内容时用于检查拼写和语法（如果请求）的语言。

## 语法

```javascript
expression.SetLanguage(langId);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| langId | 必需 | string \| null |  | 此参数的可能值为 RFC 4646/BCP 47 定义的语言标识符。示例："en-CA"。传递 *null* 可移除语言。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## 示例

为 PDF 中的段落设置拼写检查语言。

```javascript editor-pdf
// How do I tell the editor which language to use when checking a paragraph of a shape in a PDF?

// Set the language of the paragraph and print it in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.HexColor('#FF6F3D'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('This is a paragraph with the spell-check language set.');
paragraph.SetLanguage('en-CA');

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('Paragraph language: ' + shape.GetTextRange().GetTextPr().GetLanguage());
docContent.Push(resultParagraph);
```
