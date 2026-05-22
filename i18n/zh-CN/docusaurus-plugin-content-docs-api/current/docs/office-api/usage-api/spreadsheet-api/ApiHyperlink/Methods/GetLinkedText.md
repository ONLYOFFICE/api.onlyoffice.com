# GetLinkedText

返回超链接地址。

## 语法

```javascript
expression.GetLinkedText();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中超链接存储的 URL 地址。

```javascript editor-xlsx
// How do I retrieve the destination address of a hyperlink in a spreadsheet?

// Extract the web address that a hyperlink points to in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(160, 100, 130));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const run = Api.CreateRun();
run.AddText('Visit ONLYOFFICE for developers');
paragraph.AddElement(run, 0);

const hyperlink = run.AddHyperlink('https://api.onlyoffice.com', 'ONLYOFFICE for developers');
worksheet.GetRange('A1').SetValue('Linked text: ' + hyperlink.GetLinkedText());
```
