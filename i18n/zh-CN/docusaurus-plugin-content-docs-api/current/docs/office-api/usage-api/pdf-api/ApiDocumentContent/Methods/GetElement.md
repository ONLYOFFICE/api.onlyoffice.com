# GetElement

通过元素在文档中的位置返回元素。

## 语法

```javascript
expression.GetElement(nPos);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 将从文档中获取的元素位置。 |

## 返回值

[DocumentElement](../../Enumeration/DocumentElement.md)

## 示例

按位置从 PDF 中的形状检索段落。

```javascript editor-pdf
// How do I access a specific paragraph inside a shape in a PDF?

// Extract a text block from a shape using its number in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const oBullet = Api.CreateNumbering("ArabicParenR", 1);

const docContent = shape.GetContent();
let oParagraph = docContent.GetElement(0);
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the numbered paragraph.");

oParagraph = Api.CreateParagraph();
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the numbered paragraph.");
docContent.Push(oParagraph);
page.AddObject(shape);
```
