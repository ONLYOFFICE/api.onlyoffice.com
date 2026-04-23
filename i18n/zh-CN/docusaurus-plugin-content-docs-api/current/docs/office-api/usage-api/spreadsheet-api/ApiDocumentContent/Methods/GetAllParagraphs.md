# GetAllParagraphs

从当前文档内容返回所有段落的数组。

## 语法

```javascript
expression.GetAllParagraphs();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

此示例展示如何从形状的文档内容中获取所有段落。

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
const p1 = content.GetElement(0);
p1.AddText('First paragraph.');
content.Push(p1);

const p2 = Api.CreateParagraph();
p2.AddText('Second paragraph.');
content.Push(p2);

const paragraphs = content.GetAllParagraphs();
worksheet.GetRange('A1').SetValue('Paragraph count: ' + paragraphs.length);

```
