# SetOutlineLvl

设置指定属性的大纲级别。

## 语法

```javascript
expression.SetOutlineLvl(nLvl);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLvl | 可选 | Number |  | 大纲级别。可能的值：1-9。如果需要设置无大纲级别，请不带参数使用此方法。 |

## 返回值

boolean

## 示例

此示例通过段落属性设置指定段落的大纲级别。

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
page.AddObject(shape);

const outlineLvlIndex = 8;

const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
const paraPr = paragraph.GetParaPr();
paraPr.SetOutlineLvl(outlineLvlIndex);
paragraph.AddText("This is a paragraph with outline level parameter set to " + (outlineLvlIndex + 1));

```
