# Last

返回段落的最后一个元素。

## 语法

```javascript
expression.Last();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## 示例

从电子表格中形状内的段落检索最后一个文本运行。

```javascript editor-xlsx
// How do I read the content of the final element in a paragraph in a spreadsheet?

// Identify which run appears at the end of a paragraph to inspect its text in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(140, 100, 120));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);

const run1 = Api.CreateRun();
run1.AddText('First. ');
paragraph.AddElement(run1);

const run2 = Api.CreateRun();
run2.AddText('Last.');
paragraph.AddElement(run2);

const last = paragraph.Last();
worksheet.GetRange('A1').SetValue('Last element text: ' + last.GetText());
```
