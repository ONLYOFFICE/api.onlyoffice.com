# SetVerticalTextAlign

设置可以插入段落或文本块的形状内容的垂直对齐方式。

## 语法

```javascript
expression.SetVerticalTextAlign(verticalAlign);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| verticalAlign | 必需 | [VerticalTextAlign](../../Enumeration/VerticalTextAlign.md) |  | 形状内部内容的垂直对齐类型。 |

## 返回值

此方法不返回任何数据。

## 示例

将形状内的文本垂直对齐到底部。

```javascript editor-pptx
// Clear all default objects and create a custom shape with specific geometry.

// Add text to the shape with bottom vertical alignment to position content at the lower edge.

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
