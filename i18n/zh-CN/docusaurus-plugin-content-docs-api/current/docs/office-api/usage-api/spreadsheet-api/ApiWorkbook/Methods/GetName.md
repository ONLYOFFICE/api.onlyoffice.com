# GetName

返回工作簿的名称。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiWorkbook](../ApiWorkbook.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取打开的工作簿的文件名并在电子表格的工作表上显示。

```javascript editor-xlsx
// How do I find out what the current file is called in a spreadsheet?

// Embed the workbook's filename inside a shape on the active sheet in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const workbookName = workbook.GetName();
const worksheet = workbook.GetActiveSheet();

const lightGreen = Api.RGB(16, 121, 63);
const darkGreen = Api.RGB(24, 92, 55);
const fill = Api.CreateSolidFill(lightGreen);
const stroke = Api.CreateStroke(2, Api.CreateSolidFill(darkGreen));
let shape = worksheet.AddShape(
	'rect',
	100 * 36000, 70 * 36000,
	fill, stroke,
	0, 2 * 36000,
	0, 3 * 36000
);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('Filename: ' + workbookName);
```
