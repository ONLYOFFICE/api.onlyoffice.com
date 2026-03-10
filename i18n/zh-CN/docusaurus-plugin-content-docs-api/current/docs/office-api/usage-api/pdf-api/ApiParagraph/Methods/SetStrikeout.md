# SetStrikeout

指定此段落的内容显示为中间有一条水平线穿过。

## 语法

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | 必需 | boolean |  | 指定当前段落的内容显示为删除线。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

This example applies strikeout formatting to paragraph text.

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('This is a paragraph with the text struck out with a single line.');
paragraph.SetStrikeout(true);
page.AddObject(shape);

```
