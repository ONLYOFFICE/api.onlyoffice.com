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

此示例演示如何获取元素。

```javascript editor-pptx
// How to get an element from the content of a slide shape.

// Find an element from the shape using its index.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const oBullet = Api.CreateNumbering("ArabicParenR", 1);

const docContent = shape.GetDocContent();
let oParagraph = docContent.GetElement(0);
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the numbered paragraph.");

oParagraph = Api.CreateParagraph();
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the numbered paragraph.");
docContent.Push(oParagraph);
slide.AddObject(shape);

```
