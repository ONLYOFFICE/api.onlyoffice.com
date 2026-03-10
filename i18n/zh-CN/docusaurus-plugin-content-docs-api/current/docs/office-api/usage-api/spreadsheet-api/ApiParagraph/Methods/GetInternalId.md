# GetInternalId

返回当前内容段落的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

This example shows how to get the internal identifier of a paragraph inside a shape.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Sample text.');

worksheet.GetRange('A1').SetValue('Paragraph ID: ' + paragraph.GetInternalId());

```
