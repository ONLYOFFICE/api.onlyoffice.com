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

此示例展示如何从当前文档获取指定类型的所有题注段落。

```javascript editor-docx
// Get all caption paragraphs with the name 'Figure' and make the first one capitalized.

// Make the caption text letters uppercase.

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
