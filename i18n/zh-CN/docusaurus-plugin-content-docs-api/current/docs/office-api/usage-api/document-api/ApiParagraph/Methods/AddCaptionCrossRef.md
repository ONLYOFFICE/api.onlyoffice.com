# AddCaptionCrossRef

向当前段落添加题注交叉引用。
💡 请注意，此段落必须在文档中。

## 语法

```javascript
expression.AddCaptionCrossRef(sCaption, sRefType, oParaTo, bLink, bAboveBelow);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCaption | 必需 | [CaptionLabel](../../Enumeration/CaptionLabel.md) \| string |  | 题注标签（「公式」、「图」、「表」或其他题注标签）。 |
| sRefType | 必需 | [captionRefTo](../../Enumeration/captionRefTo.md) |  | 要插入的题注引用的文本或数值。 |
| oParaTo | 必需 | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | 要引用的题注段落（必须在文档中）。 |
| bLink | 可选 | boolean | true | 指定引用是否作为超链接插入。 |
| bAboveBelow | 可选 | boolean | false | 指定是否应包含表示引用位置的「上方/下方」字样（仅与 "pageNum" sRefType 一起使用）。 |

## 返回值

boolean

## 示例

此示例向段落添加题注交叉引用。

```javascript editor-docx
// How to create a caption reference to the paragraph.

// Add a cross-reference to the caption of the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddCaption('', 'Figure', false, 'Arabic', false, undefined, 'hyphen');
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText('Link to ');
let captionParagraphs = doc.GetAllCaptionParagraphs('Figure');
paragraph.AddCaptionCrossRef('Figure', 'entireCaption', captionParagraphs[0], true, false);

```
