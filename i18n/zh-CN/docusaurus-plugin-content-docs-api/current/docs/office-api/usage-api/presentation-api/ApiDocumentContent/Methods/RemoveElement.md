# RemoveElement

使用指定的位置移除元素。

## 语法

```javascript
expression.RemoveElement(nPos);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 元素在文档中或其他元素内部的编号（位置）。 |

## 返回值

boolean

## 示例

从演示文稿中形状内的内容移除特定元素。

```javascript editor-pptx
// How do I delete an element by its position in a shape in a presentation?

// Access the shape's content and remove a single text or object element in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the first paragraph.");
docContent.RemoveElement(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph. The first paragraph was removed from the document content.");
docContent.Push(paragraph);
slide.AddObject(shape);
```
