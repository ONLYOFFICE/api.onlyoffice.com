# SetVerticalTextAlign

设置可以插入段落或文本运行的形状内容的垂直对齐方式。

## 语法

```javascript
expression.SetVerticalTextAlign(VerticalAlign);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| VerticalAlign | 必需 | [VerticalTextAlign](../../Enumeration/VerticalTextAlign.md) |  | 形状内部内容的垂直对齐类型。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置可以插入段落或文本运行的形状内容的垂直对齐方式。

```javascript editor-pptx
// How to set vertical alignment of the shape content.

// Adjust vertical alignment of the text inside the shape.

const presentation = Api.GetPresentation();
presentation.SetSizes(254 * 36000, 190 * 36000);
const slide = presentation.GetCurrentSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
shape.SetVerticalTextAlign("bottom");
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it ");
paragraph.AddText("aligning it vertically by the bottom.");
docContent.Push(paragraph);
slide.AddObject(shape);

```
