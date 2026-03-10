# SetVerticalTextAlign

设置可以插入段落或文本运行的形状内容的垂直对齐方式。

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

boolean

## 示例

How to set vertical alignment of the shape content.

```javascript editor-pdf
// Adjust vertical alignment of the text inside the shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
shape.SetVerticalTextAlign("bottom");
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it ");
paragraph.AddText("aligning it vertically by the bottom.");
docContent.Push(paragraph);
page.AddObject(shape);
```
