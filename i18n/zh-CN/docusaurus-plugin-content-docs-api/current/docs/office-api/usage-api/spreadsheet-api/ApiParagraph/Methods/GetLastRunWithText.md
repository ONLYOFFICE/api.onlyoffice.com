# GetLastRunWithText

返回当前段落中最后一个包含文本的 Run。

## 语法

```javascript
expression.GetLastRunWithText();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

This example shows how to get the last run with text from a paragraph inside a shape.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(100, 140, 120));
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
run1.AddText('First run. ');
paragraph.AddElement(run1);

const run2 = Api.CreateRun();
run2.AddText('Last run.');
paragraph.AddElement(run2);

const lastRun = paragraph.GetLastRunWithText();
worksheet.GetRange('A1').SetValue('Last run text: ' + lastRun.GetText());

```
