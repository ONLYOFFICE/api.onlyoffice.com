# GetAllCaptionParagraphs

从当前文档返回指定类型的所有题注段落。

## 语法

```javascript
expression.GetAllCaptionParagraphs(sCaption);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCaption | 必需 | [CaptionLabel](../../Enumeration/CaptionLabel.md) \| string |  | 题注标签（「公式」、「图」、「表」或其他题注标签）。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

收集所有图形题注段落并在文档中将第一个设为大写格式。

```javascript editor-docx
// How do I find every caption of a given type and modify its text style in a document?

// Emphasize a specific caption by converting its letters to uppercase after inserting an image in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
const logoUrl = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';
let drawing = Api.CreateImage(logoUrl, 60 * 36000, 60 * 36000);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddCaption('', 'Figure', false, 'Arabic', false, undefined, 'hyphen');
let captionParagraphs = doc.GetAllCaptionParagraphs('Figure');
captionParagraphs[0].SetCaps(true);
```
