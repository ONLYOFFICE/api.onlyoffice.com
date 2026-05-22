# AddText

将指定文本追加到文档内容的末尾。

## 语法

```javascript
expression.AddText(text);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要添加的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

```javascript editor-pptx
// How do I add text to the last paragraph of a shape's document content in a presentation?

// Add a sentence to a shape without replacing its existing text in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#E8D5B7'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
docContent.GetElement(0).AddText('First sentence.');
docContent.AddText(' Appended sentence.');
const infoParagraph = Api.CreateParagraph();
infoParagraph.AddText('Text from document content: ' + docContent.GetText());
docContent.Push(infoParagraph);
slide.AddObject(shape);
```
