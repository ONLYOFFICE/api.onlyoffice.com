# SetSpacing

设置以二十分之一磅为单位测量的文本间距。

## 语法

```javascript
expression.SetSpacing(nSpacing);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSpacing | 必需 | [twips](../../Enumeration/twips.md) |  | 以二十分之一磅（1/1440 英寸）为单位测量的文本间距值。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

扩展电子表格中形状内段落各字符之间的间距。

```javascript editor-xlsx
// How do I widen or tighten the gaps between letters in a paragraph in a spreadsheet?

// Adjust letter spacing to make text looser or more compact within a shape in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(150, 130, 100));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text has expanded spacing.');
paragraph.SetSpacing(80);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has default spacing.');
content.Push(paragraph2);
```
