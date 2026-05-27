# GetCurrentRun

返回光标所在的当前文本域。

## 语法

```javascript
expression.GetCurrentRun();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

检索电子表格中形状内容区域内当前活动的文本运行。

```javascript editor-xlsx
// How do I access the specific run of text the cursor is positioned on within a shape in a spreadsheet?

// Read the active inline text segment from a shape's content to inspect its value in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	1, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const run = paragraph.GetElement(0);
run.AddText('Run text.');

const currentRun = content.GetCurrentRun();
const result = currentRun ? currentRun.GetText() : 'null';
worksheet.GetRange('A1').SetValue('Current run: ' + result);
```
