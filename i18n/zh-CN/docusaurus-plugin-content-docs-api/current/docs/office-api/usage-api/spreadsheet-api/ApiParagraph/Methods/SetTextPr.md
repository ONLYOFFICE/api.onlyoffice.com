# SetTextPr

设置段落文本属性。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 段落文本属性。 |

## 返回值

boolean

## 示例

此示例展示如何对形状内段落中的所有文本应用文本属性。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(110, 140, 130));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text has custom text properties applied.');

const textPr = Api.CreateTextPr();
textPr.SetBold(true);
textPr.SetItalic(true);
textPr.SetFontSize(32);
paragraph.SetTextPr(textPr);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has default properties.');
content.Push(paragraph2);

```
