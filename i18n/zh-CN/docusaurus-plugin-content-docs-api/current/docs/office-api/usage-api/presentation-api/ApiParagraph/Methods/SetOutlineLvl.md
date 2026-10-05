# SetOutlineLvl

设置指定属性的大纲级别。

继承自 [ApiParaPr.SetOutlineLvl](../../ApiParaPr/Methods/SetOutlineLvl.md)。

## 语法

```javascript
expression.SetOutlineLvl(lvl);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lvl | 可选 | Number \| null \| undefined |  | 大纲级别。可能的值：1-9。要取消大纲级别，请不带参数使用此方法。 |

## 返回值

boolean

## 示例

在演示文稿中设置段落文本的大纲级别。

```javascript editor-pptx
// How do I assign an outline level to a paragraph in a presentation?

// Configure paragraph hierarchy using outline levels in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
slide.AddObject(shape);

const outlineLvlIndex = 8;

const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.SetOutlineLvl(outlineLvlIndex);
paragraph.AddText("This is a paragraph with outline level (index) set to " + paragraph.GetOutlineLvl());
```
