# GetInternalId

返回当前文档内容的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取分配给电子表格中形状文本区域的唯一标识符。

```javascript editor-xlsx
// How do I obtain the internal identifier of a shape's text area in a spreadsheet?

// Store the text area identifier in a cell for reference in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	0, 0, 3, 0
);
const content = shape.GetContent();
const internalId = content.GetInternalId();
worksheet.GetRange('A1').SetValue('Internal ID: ' + internalId);
```
