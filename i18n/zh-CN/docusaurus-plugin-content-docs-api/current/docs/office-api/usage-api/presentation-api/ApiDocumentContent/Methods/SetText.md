# SetText

用指定文本替换当前文档内容对象的所有内容，
保留第一个段落的格式。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要设置的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

```javascript editor-pptx
// How do I overwrite all the text inside a shape's document content in a presentation?

// Clear existing text and write a new sentence into a shape's content area in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#E8D5B7'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
docContent.GetElement(0).AddText('Original shape content text.');
docContent.SetText('Updated shape content text.');
const infoParagraph = Api.CreateParagraph();
infoParagraph.AddText('Text from document content: ' + docContent.GetText());
docContent.Push(infoParagraph);
slide.AddObject(shape);
```
