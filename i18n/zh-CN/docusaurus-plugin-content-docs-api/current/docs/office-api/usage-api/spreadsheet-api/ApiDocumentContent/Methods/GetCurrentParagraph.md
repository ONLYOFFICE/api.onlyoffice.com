# GetCurrentParagraph

返回光标所在的当前段落。

## 语法

```javascript
expression.GetCurrentParagraph();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例展示如何从形状的文档内容中获取当前段落。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	0, 0, 1, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Current paragraph text.');

const currentParagraph = content.GetCurrentParagraph();
const result = currentParagraph ? currentParagraph.GetText() : 'null';
worksheet.GetRange('A1').SetValue('Current paragraph: ' + result);

```
