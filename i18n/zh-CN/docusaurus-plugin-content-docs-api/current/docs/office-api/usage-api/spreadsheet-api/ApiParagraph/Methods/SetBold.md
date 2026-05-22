# SetBold

为文本字符设置粗体属性。

## 语法

```javascript
expression.SetBold(isBold);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | 必需 | boolean |  | 指定此段落的内容显示为粗体。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

在电子表格中形状内将段落的所有文本设为粗体。

```javascript editor-xlsx
// How do I apply bold formatting to an entire paragraph in a spreadsheet?

// Emphasize a paragraph's text by turning on bold weight for every character in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(160, 100, 110));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text is bold.');
paragraph.SetBold(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text is not bold.');
content.Push(paragraph2);
```
