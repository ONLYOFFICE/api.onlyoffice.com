# SetFontSize

设置当前段落字符的字体大小。

## 语法

```javascript
expression.SetFontSize(nSize);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSize | 必需 | [hps](../../Enumeration/hps.md) |  | 以半磅（1/144 英寸）为单位测量的文本大小值。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

This example shows how to set the font size for all text in a paragraph inside a shape.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(120, 140, 100));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text has a larger font size (24 half-points).');
paragraph.SetFontSize(24);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has the default font size.');
content.Push(paragraph2);

```
